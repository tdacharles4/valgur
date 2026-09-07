"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function TopProgress() {
  const pathname = usePathname();
  const first = useRef(true);
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false; // don't run on initial load (loader handles that)
      return;
    }
    setVisible(true);
    setWidth(10);
    const a = requestAnimationFrame(() => setWidth(90));
    const t1 = setTimeout(() => setWidth(100), 250);
    const t2 = setTimeout(() => setVisible(false), 550);
    const t3 = setTimeout(() => setWidth(0), 850);
    return () => {
      cancelAnimationFrame(a);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-[#FF0084] transition-all duration-300"
      style={{ width: `${width}%`, opacity: visible ? 1 : 0 }}
    />
  );
}
