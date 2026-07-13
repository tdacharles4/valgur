"use client";

import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";

const mockProducts: Product[] = [
  {
    handle: "peluche-hyoma",
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
  {
    handle: 'gorrita-mamalona',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/gorritamamalona.png', altText: 'Gorrita Mamalona' } },
        ],
    },
    title: 'Gorrita Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: 'Gorrita mamalona',
    tallas: ["s", "m", "l"],
  },
  {
    handle: 'zapandu-vinil',
    collections: { 
      edges: [
        { node: { title: "discos" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/zapanduvinil.png', altText: 'Zapandú Vinil' } },
        ],
    },
    title: 'Zapandú Vinil',
    price: { amount: '800', currencyCode: 'MXN' },
    description: 'Zapandú Vinil',
    tallas: null,
  },
  {
    handle: 'valgur-charm',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/valgurcharm.png', altText: 'Valgur Charm' } },
        ],
    },
    title: 'Valgur Charm',
    price: { amount: '380', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'camiseta-mamalona',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/camisetamamalona.png', altText: 'Camiseta Mamalona' } },
        ],
    },
    title: 'Camiseta Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: "peluche-hyoma-2",
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
  {
    handle: 'valgur-charm-2',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/valgurcharm.png', altText: 'Valgur Charm' } },
        ],
    },
    title: 'Valgur Charm',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'gorrita-mamalona-2',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/gorritamamalona.png', altText: 'Gorrita Mamalona' } },
        ],
    },
    title: 'Gorrita Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: 'Gorrita mamalona',
    tallas: ["s", "m", "l"],
  },
  {
    handle: 'valgur-charm-3',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/valgurcharm.png', altText: 'Valgur Charm' } },
        ],
    },
    title: 'Valgur Charm',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'zapandu-vinil-2',
    collections: { 
      edges: [
        { node: { title: "discos" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/zapanduvinil.png', altText: 'Zapandú Vinil' } },
        ],
    },
    title: 'Zapandú Vinil',
    price: { amount: '800', currencyCode: 'MXN' },
    description: 'Zapandú Vinil',
    tallas: null,
  },
  {
    handle: 'valgur-charm-4',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/valgurcharm.png', altText: 'Valgur Charm' } },
        ],
    },
    title: 'Valgur Charm',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'camiseta-mamalona-2',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/camisetamamalona.png', altText: 'Camiseta Mamalona' } },
        ],
    },
    title: 'Camiseta Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'camiseta-mamalona-3',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/camisetamamalona.png', altText: 'Camiseta Mamalona' } },
        ],
    },
    title: 'Camiseta Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: 'camiseta-mamalona-4',
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
        edges: [
            { node: {url: '/images/camisetamamalona.png', altText: 'Camiseta Mamalona' } },
        ],
    },
    title: 'Camiseta Mamalona',
    price: { amount: '450', currencyCode: 'MXN' },
    description: null,
    tallas: null,
  },
  {
    handle: "peluche-hyoma-3",
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
  {
    handle: "peluche-hyoma-4",
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
  {
    handle: "peluche-hyoma-5",
    collections: { 
      edges: [
        { node: { title: "merch" } }
      ],
    },
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/imagenes/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
];

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

export { mockProducts };