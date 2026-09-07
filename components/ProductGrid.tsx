"use client";

import { useEffect, useRef, useState } from "react";
import { StoreCard } from "@/components/StoreCard";
import { CardItem } from "@/lib/vinyl";

const keyOf = (item: CardItem) =>
  item.kind === "product" ? item.product.handle : item.vinyl.handle;

export function ProductGrid({
  items,
  maxGridHeight,
  hasPagination = false,
}: {
  items: CardItem[];
  maxGridHeight?: number;
  hasPagination?: boolean;
}) {
  const [loading] = useState(false);
  const [page, setPage] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const columns = 4;
  const pageSize = maxGridHeight ? columns * maxGridHeight : items.length;
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const visibleItems = hasPagination
    ? items.slice(page * pageSize, (page + 1) * pageSize)
    : items.slice(0, pageSize);

  return (
    <>
      {/* Grid */}
      {loading ? (
        <div className="text-center py-20 text-[#757575]">Cargando...</div>
      ) : (
        <div ref={gridRef} className="grid grid-cols-4">
          {visibleItems.map((item, i) => (
            <div
              key={keyOf(item)}
              className={revealed ? "fade-in-item" : "opacity-0"}
              style={revealed ? { animationDelay: `${i * 50}ms` } : undefined}
            >
              <StoreCard item={item} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {hasPagination && totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 py-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="disabled:invisible cursor-pointer"
          >
            {'<:::::::::::::::::}==+'}
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="disabled:invisible cursor-pointer"
          >
            {'+=={:::::::::::::::::>'}
          </button>
        </div>
      )}
    </>
  );
}
