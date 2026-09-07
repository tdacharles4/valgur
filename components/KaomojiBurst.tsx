"use client";

import { useEffect, useState, type CSSProperties } from "react";
import designs from "@/lib/designs.json";

// individual characters from every kaomoji → smaller, more natural burst
const CHARS = [...designs.join("")].filter((c) => c.trim() !== "");

type Particle = { id: number; x: number; y: number; dx: number; dy: number; r: number; k: string };

export function KaomojiBurst({ trigger }: { trigger: number }) {
  const [parts, setParts] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const n = 80;
    const next: Particle[] = Array.from({ length: n }).map((_, i) => {
      const edge = i % 4;
      const p = Math.random(); // position along the edge (0..1)
      const spread = Math.random() - 0.5; // tangential jitter
      let x = 0, y = 0, ox = 0, oy = 0;
      if (edge === 0) { x = p * 100; y = 0; ox = spread; oy = -1; } // top → up
      else if (edge === 1) { x = 100; y = p * 100; ox = 1; oy = spread; } // right → right
      else if (edge === 2) { x = p * 100; y = 100; ox = spread; oy = 1; } // bottom → down
      else { x = 0; y = p * 100; ox = -1; oy = spread; } // left → left
      const dist = 45 + Math.random() * 55;
      return {
        id: trigger * 100 + i,
        x,
        y,
        dx: ox * dist,
        dy: oy * dist,
        r: Math.random() * 120 - 60,
        k: CHARS[Math.floor(Math.random() * CHARS.length)],
      };
    });
    setParts(next);
    const t = setTimeout(() => setParts([]), 900);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {parts.map((p) => (
        <span
          key={p.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <span
            className="burst-particle block text-sm text-[#FF0084] whitespace-nowrap"
            style={{ "--dx": `${p.dx}px`, "--dy": `${p.dy}px`, "--r": `${p.r}deg` } as CSSProperties}
          >
            {p.k}
          </span>
        </span>
      ))}
    </div>
  );
}
