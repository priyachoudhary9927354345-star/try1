"use client";

import { useSyncExternalStore } from "react";

function subscribeToMediaQuery(query: string, callback: () => void) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => subscribeToMediaQuery(query, callback),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function subscribeOnce() {
  return () => {};
}

function getLowCoreSnapshot() {
  // Only treat very low core counts as a hard signal of limited hardware —
  // plenty of capable laptops/desktops report as few as 4 logical cores,
  // so this should never be the sole reason to hide the 3D hero on desktop.
  const cores = navigator.hardwareConcurrency ?? 8;
  return cores > 0 && cores <= 2;
}

/**
 * True when the viewport is small/touch-sized or the device signals limited
 * GPU/CPU headroom (very low core count, reduced-motion preference) — used
 * to decide whether to mount the full 3D canvas or a lightweight fallback.
 */
export function useLowPowerMode(): boolean {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const veryLowCoreCount = useSyncExternalStore(subscribeOnce, getLowCoreSnapshot, () => false);

  return isSmallScreen || prefersReducedMotion || veryLowCoreCount;
}
