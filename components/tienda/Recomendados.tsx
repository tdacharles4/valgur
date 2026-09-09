import { RecomendadosContent } from "@/components/tienda/RecomendadosContent";
import { ShopifyProduct } from "@/lib/shopify";
import { CardItem, Vinyl } from "@/lib/vinyl";

export function Recomendados({ products, vinyls }: { products: ShopifyProduct[]; vinyls: Vinyl[] }) {
  const all: CardItem[] = [
    ...products.map((p) => ({ kind: "product" as const, product: p })),
    ...vinyls.map((v) => ({ kind: "vinyl" as const, vinyl: v })),
  ];
  const items = [...all].sort(() => Math.random() - 0.5).slice(0, 4);

  return <RecomendadosContent items={items} />;
}
