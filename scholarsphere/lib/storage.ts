"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Tiny localStorage-backed store built on useSyncExternalStore.
 *
 * - Parsed values are cached per key by their raw string, so snapshots are
 *   referentially stable between renders (a useSyncExternalStore requirement).
 * - Writes notify every hook using the same key in this tab; the `storage`
 *   event keeps other tabs in sync.
 * - Server render and the first client render use the fallback, so there is
 *   no hydration mismatch. Pass a module-level constant as the fallback.
 */

const PREFIX = "scholarsphere:";
const listeners = new Map<string, Set<() => void>>();
const cache = new Map<string, { raw: string | null; value: unknown }>();

function storageKey(key: string) {
  return PREFIX + key;
}

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(storageKey(key));
  } catch {
    return null;
  }
}

function read<T>(key: string, fallback: T): T {
  const raw = readRaw(key);
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  let value: T = fallback;
  if (raw !== null) {
    try {
      value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  cache.set(key, { raw, value });
  return value;
}

function emit(key: string) {
  listeners.get(key)?.forEach((fn) => fn());
}

export function writeStored<T>(key: string, value: T) {
  const raw = JSON.stringify(value);
  try {
    window.localStorage.setItem(storageKey(key), raw);
  } catch {
    // Quota exceeded or storage blocked: keep an in-memory copy for this tab.
  }
  cache.set(key, { raw: readRaw(key) ?? raw, value });
  emit(key);
}

function subscribe(key: string, fn: () => void) {
  let set = listeners.get(key);
  if (!set) listeners.set(key, (set = new Set()));
  set.add(fn);
  const onStorage = (e: StorageEvent) => {
    if (e.key === storageKey(key)) fn();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    set.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}

export function useStored<T>(
  key: string,
  fallback: T,
): [T, (next: T | ((prev: T) => T)) => void] {
  const value = useSyncExternalStore(
    useCallback((fn) => subscribe(key, fn), [key]),
    () => read(key, fallback),
    () => fallback,
  );
  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = read(key, fallback);
      const resolved =
        typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      writeStored(key, resolved);
    },
    [key, fallback],
  );
  return [value, set];
}

const noopSubscribe = () => () => {};

/** False during SSR and hydration, true afterwards. */
export function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
