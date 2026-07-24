import { ShopifyProduct, getProducts } from "@/lib/shopify";
import { PinkBanner } from "@/components/home/PinkBanner";
import { ProductosDestacados } from "@/components/home/ProductosDestacados";
import { ReleasesDestacados, mockRelease } from "@/components/home/ReleasesDestacados";
import { YoutubeEmbed, mockEmbed } from "@/components/home/YoutubeEmbed";

export default async function Home() {

  const { body } = await getProducts();
  const products: ShopifyProduct[] = body.data.products.edges.map((e) => e.node);

  return (
    <>

      {/* Productos Destacados */}
      <ProductosDestacados products={products}/>
      
      {/* Banner */}
      <PinkBanner/>

      {/* Musica/Releases */}
      <ReleasesDestacados releases={mockRelease}/>

      {/* Banner */}
      <PinkBanner/>

      {/* Video Destacado */}
      <YoutubeEmbed videos={mockEmbed}/>

    </>
  );
}
