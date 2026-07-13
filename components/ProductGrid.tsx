"use client";

import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";

export function ProductGrid({
  products,
  maxGridHeight,
  hasPagination = false,
}: {
  products: Product[];
  maxGridHeight?: number;
  hasPagination?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const columns = 4;
  const pageSize = maxGridHeight ? columns * maxGridHeight : products.length;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const visibleProducts = hasPagination
    ? products.slice(page * pageSize, (page + 1) * pageSize)
    : products.slice(0, pageSize);

  return (
    <>
      {/* Grid */}
      {loading ? (
        <div className="text-center py-20 text-[#757575]">Cargando...</div>
      ) : (
        <div className="grid grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.handle} product={product} />
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

export { mockProducts } from "@/lib/mockProducts";