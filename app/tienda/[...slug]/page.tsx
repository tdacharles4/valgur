interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Item({ params }: PageProps) {
  await params;
  return null;
}
