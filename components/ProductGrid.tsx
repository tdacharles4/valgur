"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ShopifyProduct } from "@/lib/shopify";
import { useRouter, useSearchParams } from "next/navigation";

export function ProductGrid () {

    return(
        <>
            <ProductCard />
        </>
    );

};