import { useEffect } from 'react';
import type { Product } from '@/mocks/homeData';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

const CART_KEY = 'duvet-covers-cart';

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('cartUpdated'));
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleAddToCart = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { product, quantity = 1, selectedColor, selectedSize } = customEvent.detail;

      const current = loadCart();
      const existing = current.find(
        (item: CartItem) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existing) {
        const updated = current.map((item: CartItem) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        saveCart(updated);
      } else {
        saveCart([...current, { product, quantity, selectedColor, selectedSize }]);
      }
    };

    window.addEventListener('addToCart', handleAddToCart);
    return () => window.removeEventListener('addToCart', handleAddToCart);
  }, []);

  return <>{children}</>;
}