"use client";

import { ProductGrid } from "@/components/ProductGrid";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { CardItem } from "@/lib/vinyl";
import { useLocale } from "@/contexts/LocaleContext";

export function RecomendadosContent({ items }: { items: CardItem[] }) {
  const { t } = useLocale();

  return (
    <div className="w-full flex flex-col px-[4%] md:px-[8%] gap-4">
      <h1 className="text-lg md:text-2xl">{t("recommended.heading")}</h1>

      {/* Desktop */}
      <div className="hidden md:flex md:flex-col gap-4">
        <ProductGrid items={items} maxGridHeight={1} hasPagination={false} />
        <div className="flex justify-end text-[#0000EE] underline">
          <a href="/tienda">{t("recommended.seeMore")}</a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4">
        <ProductCarousel items={items} />
        <div className="flex justify-center text-[#0000EE] underline">
          <a href="/tienda">{t("recommended.seeMore")}</a>
        </div>
      </div>
    </div>
  );
}
