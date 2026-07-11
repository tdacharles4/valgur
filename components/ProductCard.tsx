"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/shopify";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

{/* Showcase */}
export type Product = {
handle: string;
images: {edges: {node: {url: string; altText: string;};}[];};
title: string;
price: {amount: string; currencyCode: string};
description: string | null;
tallas: string[] | null;
}

export function ProductCard({product} : {product : Product}){


    
    const [isCartHovered, setIsCartHovered] = React.useState(false);
    const image = product.images.edges[0]?.node;
    const formatPrice = (price: { amount: string; currencyCode: string }) => 
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: price.currencyCode,
    }).format(parseFloat(price.amount));

    // const isOutOfStock = !product.availableForSale;


    return(
        <>
            <Card className="border-hidden">
                <Link href={`/tienda/${product.handle}`} className="relative h-40 md:h-48 w-full overflow-hidden block">
                    {image ? (
                    <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover/card:scale-110"
                    />
                    ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground bg-muted">
                        Sin imagen
                    </div>
                    )}
                </Link>
                 <CardContent>
                    <CardTitle className="font-bold">{product.title}</CardTitle>
                    <p>{formatPrice(product.price)} MXN</p>
                 </CardContent>
            </Card>
        </>
    );
}