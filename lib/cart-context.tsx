"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DISCOVERY_PRICE, getProduct, type CartSize } from "@/lib/products";

export type CartLine = {
  slug: string;
  size: CartSize;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (slug: string, size: CartSize, quantity?: number) => void;
  removeItem: (slug: string, size: CartSize) => void;
  updateQuantity: (slug: string, size: CartSize, quantity: number) => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "maison-elan-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of persisted cart after mount, intentionally diverges from the empty SSR state
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback(
    (slug: string, size: CartSize, quantity = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.slug === slug && l.size === size);
        if (existing) {
          return prev.map((l) =>
            l === existing ? { ...l, quantity: l.quantity + quantity } : l,
          );
        }
        return [...prev, { slug, size, quantity }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((slug: string, size: CartSize) => {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));
  }, []);

  const updateQuantity = useCallback(
    (slug: string, size: CartSize, quantity: number) => {
      if (quantity <= 0) {
        removeItem(slug, size);
        return;
      }
      setLines((prev) =>
        prev.map((l) => (l.slug === slug && l.size === size ? { ...l, quantity } : l)),
      );
    },
    [removeItem],
  );

  const { itemCount, subtotal } = useMemo(() => {
    return lines.reduce(
      (acc, line) => {
        const product = getProduct(line.slug);
        const price =
          line.size === "sample" ? DISCOVERY_PRICE : (product?.prices[line.size] ?? 0);
        return {
          itemCount: acc.itemCount + line.quantity,
          subtotal: acc.subtotal + price * line.quantity,
        };
      },
      { itemCount: 0, subtotal: 0 },
    );
  }, [lines]);

  const value: CartContextValue = {
    lines,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
