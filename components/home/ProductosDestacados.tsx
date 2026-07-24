import { ProductGrid } from "../ProductGrid";
import { ShopifyProduct } from "@/lib/shopify";

export function ProductosDestacados({ products }: { products: ShopifyProduct[] }){
    return(
        <>
            <div className="w-full flex flex-col px-[8%] gap-4">
                <h1 className="text-2xl">PRODUCTOS DESTACADOS ⸜(｡˃ ᵕ ˂ )⸝♡</h1>
                <ProductGrid
                    products = {products}
                    maxGridHeight = {2}
                    hasPagination = {false}
                />
                <div className="flex justify-end text-[#0000EE] underline">
                    <a href="/tienda">Ver más...</a>
                </div>
            </div>
        </>
    );
}