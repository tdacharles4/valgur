"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import kaomojis from "@/lib/designs_separated.json";

// Each entry is a kaomoji broken into individual characters.
const DESIGNS = kaomojis as string[][];

const STEP = 28; // px the cursor must travel before the next character is etched
const DELAY = 3000; // ms to wait after landing before the trail starts
const LIFE = 5000; // ms a mark stays before it vanishes (no fade)

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pathname = usePathname();

  // Re-runs on every route change: resets the 3s delay, empties the trail,
  // and re-inits the canvas. (The root layout stays mounted across client-side
  // navigation, so without this the etch would carry between pages.)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (DESIGNS.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const applyStyle = () => {
      ctx.fillStyle = "#FF0084";
      ctx.font = "16px 'Times New Roman', Times, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    };

    // Scale for crisp text on high-DPI screens.
    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      applyStyle();
    };
    setSize();
    window.addEventListener("resize", setSize);

    const start = performance.now();

    // Live marks, each with a birth time so they dissolve in cascade.
    type Mark = { char: string; x: number; y: number; born: number };
    const marks: Mark[] = [];

    let design = DESIGNS[Math.floor(Math.random() * DESIGNS.length)];
    let charIndex = 0;
    let last: { x: number; y: number } | null = null;
    let raf = 0;

    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      let alive = 0;
      for (const m of marks) {
        if (now - m.born >= LIFE) continue; // its 5s are up → gone, no fade
        marks[alive++] = m; // compact survivors in place
        ctx.fillText(m.char, m.x, m.y);
      }
      marks.length = alive;

      if (marks.length > 0) {
        raf = requestAnimationFrame(render);
      } else {
        raf = 0; // idle: stop the loop until the next mark
      }
    };

    const onMove = (e: MouseEvent) => {
      if (performance.now() - start < DELAY) {
        // still in the opening delay — track position but don't etch yet
        last = { x: e.clientX, y: e.clientY };
        return;
      }
      if (!last) {
        last = { x: e.clientX, y: e.clientY };
        return;
      }
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      if (Math.hypot(dx, dy) < STEP) return;
      last = { x: e.clientX, y: e.clientY };

      marks.push({ char: design[charIndex], x: e.clientX, y: e.clientY, born: performance.now() });
      charIndex++;

      // Finished this kaomoji → jump to a new random one.
      if (charIndex >= design.length) {
        design = DESIGNS[Math.floor(Math.random() * DESIGNS.length)];
        charIndex = 0;
      }

      if (!raf) raf = requestAnimationFrame(render);
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", setSize);
      if (raf) cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, [pathname]);

  // z-[-1]: paints above the body background but below all normal-flow
  // content, so the trail only ever shows on the page background.
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[-1]"
      aria-hidden="true"
    />
  );
}
