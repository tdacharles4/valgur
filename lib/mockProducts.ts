import { ShopifyProduct } from "./shopify";

export const mockProducts: ShopifyProduct[] = [
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
        { node: { url: "/images/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/images/peluchehyoma3.png", altText: "Peluche Hyoma" } },
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
        { node: { url: "/images/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/images/peluchehyoma3.png", altText: "Peluche Hyoma" } },
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
        { node: { url: "/images/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/images/peluchehyoma3.png", altText: "Peluche Hyoma" } },
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
        { node: { url: "/images/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/images/peluchehyoma3.png", altText: "Peluche Hyoma" } },
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
        { node: { url: "/images/peluchehyoma2.png", altText: "Peluche Hyoma" } },
        { node: { url: "/images/peluchehyoma3.png", altText: "Peluche Hyoma" } },
      ],
    },
    title: "Peluche Hyoma",
    price: { amount: "500", currencyCode: "MXN" },
    description: "Peluche promocional 20471120",
    tallas: ["s", "m", "l"],
  },
];
