"use client";

import { useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { VinylCard } from "@/components/tienda/VinylCard";
import { CardItem } from "@/lib/vinyl";

export function StoreCard({ item }: { item: CardItem }) {
  const [shake, setShake] = useState(0); // 0 none, 1 slow, 2 med, 3 fast — hover easter egg
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const onEnter = () => {
    timers.current = [
      setTimeout(() => setShake(1), 5000),
      setTimeout(() => setShake(2), 7000),
      setTimeout(() => setShake(3), 9000),
    ];
  };

  const onLeave = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShake(0);
  };

  const shakeClass =
    shake === 1 ? "shake-slow" : shake === 2 ? "shake-med" : shake === 3 ? "shake-fast" : "";

  return (
    <div className={shakeClass} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="transition-transform duration-150 hover:-translate-y-1 hover:scale-[1.02]">
        {item.kind === "product" ? (
          <ProductCard product={item.product} />
        ) : (
          <VinylCard vinyl={item.vinyl} />
        )}
      </div>
    </div>
  );
}
