"use client";

import { useState } from "react";
import { ProductGrid } from "../ProductGrid";
import { ShopifyProduct } from "@/lib/shopify";


export function TiendaProducts({ products }: { products: ShopifyProduct[] }){
    const [filter, setFilter] = useState<string | null>(null);

    const filterMerch = () => setFilter((f) => (f === "merch" ? null : "merch"));
    const filterDiscos = () => setFilter((f) => (f === "discos" ? null : "discos"));

    const filteredProducts = filter
        ? products.filter((product) =>
            product.collections?.edges.some((edge) => edge.node.title === filter)
          )
        : products;

    return(
        <>
            <div className="font-bold w-full flex px-[8%] gap-4">
                <button className="underline" type="button" onClick={filterMerch} aria-label="Merch">
                    Merch
                </button>
                <span>/</span>
                <button className="underline" type="button" onClick={filterDiscos} aria-label="Discos">
                    Discos
                </button>
                <button
                    className={`text-xs cursor-pointer ${filter ? "" : "invisible"}`}
                    type="button"
                    onClick={() => setFilter(null)}
                    aria-label="Quitar filtros"
                >
                    ✕
                </button>
            </div>
            <div className="w-full flex flex-col px-[8%] gap-4">
                <ProductGrid
                    key = {filter ?? "all"}
                    products = {filteredProducts}
                    maxGridHeight = {4}
                    hasPagination = {true}
                />
            </div>
        </>
    );
}