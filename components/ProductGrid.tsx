"use client";

import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";

const mockProducts: Product[] = [
  {
    handle: "peluche-hyoma",
    images: {
      edges: [
        { node: { url: "/images/peluchehyoma.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
  {
    handle: 'gorrita-mamalona',
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
    handle: 'valgur-charm-2',
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
];

export function ProductGrid({ products }: { products: Product[] }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Grid */}
      {loading ? (
        <div className="text-center py-20 text-[#757575]">Cargando...</div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export { mockProducts };