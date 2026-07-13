"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../ProductCard";

export function SlugDisplay({product} : {product : Product}){
    const [talla, setTalla] = useState("");

    const formatPrice = (price: { amount: string; currencyCode: string }) =>
        new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: price.currencyCode,
            trailingZeroDisplay: "stripIfInteger",
        }).format(parseFloat(price.amount));

    return(
        <>
            <div className="grid grid-cols-2 px-[8%]">
                {/* Columna imagenes */}
                <div className="flex flex-col gap-4">
                    {product.images.edges.map((edge, i) => (
                        <div key={edge.node.url + i} className="relative w-full aspect-square">
                            <Image
                                src={edge.node.url}
                                alt={edge.node.altText || product.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                {/* Columna selectores */}
                <div className="aspect-square flex flex-col justify-center gap-4 px-[8%]">
                    <h1 className="text-l font-bold uppercase">{product.title}</h1>
                    <p>{formatPrice(product.price)} MXN</p>
                    {product.description && <p className="italic uppercase opacity-60">{product.description}</p>}
                    {product.tallas && (
                        <select
                            value={talla}
                            onChange={(e) => setTalla(e.target.value)}
                            className="border-b w-full px-2 py-1 uppercase cursor-pointer"
                            aria-label="Talla"
                        >
                            <option value="" disabled hidden>
                                SELECCIONAR TALLA
                            </option>
                            {product.tallas.map((t) => (
                                <option key={t} value={t} className="uppercase">
                                    {t}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        type="button"
                        className="border bg-[#FF0084] text-white w-full px-4 py-2 font-bold cursor-pointer uppercase italic"
                    >
                        Añadir al carro
                    </button>
                </div>
            </div>
        </>
    );
}