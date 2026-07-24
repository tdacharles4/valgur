import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { TiendaProducts } from "@/components/tienda/TiendaProductsGrid";

export default async function Tienda() {
  const { body } = await getProducts();
  const products: ShopifyProduct[] = body.data.products.edges.map((e) => e.node);
  
  return <TiendaProducts products={products}/>;
}
