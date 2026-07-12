import { ProductGrid, mockProducts} from "../ProductGrid";

export function ProductosDestacados(){
    return(
        <>
            <div className="w-full flex flex-col px-[8%] gap-4">
                <h1 className="text-2xl">PRODUCTOS DESTACADOS ⸜(｡˃ ᵕ ˂ )⸝♡</h1>
                <ProductGrid
                    products = {mockProducts}
                />
                <div className="flex justify-end text-[#0000EE] underline">
                    <a href="/tienda">Ver más...</a>
                </div>
            </div>
        </>
    );
}