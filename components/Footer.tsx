import { getPage, getAllPolicies } from "@/lib/shopify";
import { FooterContent } from "@/components/FooterContent";

export default async function Footer() {
  const [atencion, policies] = await Promise.all([
    getPage("atencion-al-cliente"),
    getAllPolicies(),
  ]);
  const privacidad = policies.find((p) => p.title.toLowerCase().includes("privac")) ?? null;

  return <FooterContent atencion={atencion} privacidad={privacidad} />;
}
