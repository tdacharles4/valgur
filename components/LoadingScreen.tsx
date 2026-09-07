"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2000); // fill finishes, start fade
    const t2 = setTimeout(() => setGone(true), 2600); // unmount after fade
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative inline-block text-2xl whitespace-nowrap">
        {/* base: off-pink */}
        <span className="text-[#FFB3D1]">
          VALGUR <span className="text-[0.6em] align-super">(mx)</span>
        </span>
        {/* fill: full pink, revealed left → right as it loads */}
        <span
          aria-hidden
          className="valgur-fill absolute left-0 top-0 h-full overflow-hidden text-[#FF0084]"
        >
          <span className="whitespace-nowrap">
            VALGUR <span className="text-[0.6em] align-super">(mx)</span>
          </span>
        </span>
      </div>
    </div>
  );
}
