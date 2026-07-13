import { notFound } from "next/navigation";
import { SlugDisplay } from "@/components/tienda/SlugDisplay";
import { mockProducts } from "@/lib/mockProducts";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Item({ params }: PageProps) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.handle === slug[0]);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SlugDisplay product={product}/>
    </>
  );
}
