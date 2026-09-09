"use client";

import { FooterDrawer } from "@/components/FooterDrawer";
import { useLocale } from "@/contexts/LocaleContext";

type Doc = { title: string; body: string } | null;

export function FooterContent({ atencion, privacidad }: { atencion: Doc; privacidad: Doc }) {
  const { t } = useLocale();

  return (
    <footer className="w-full">
      <div className="w-full flex justify-between items-center gap-1 px-[8%] py-8">
        <div className="text-left flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-8">
          <FooterDrawer atencion={atencion} privacidad={privacidad} />
        </div>
        <div className="text-right flex flex-col md:flex-row items-end md:items-center gap-8 md:gap-8">
          <a href="https://www.instagram.com/soyvalgur/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0000EE]">{t("footer.instagram")}</a>
          <span className="text-sm font-medium">{t("footer.copyright", { year: new Date().getFullYear() })}</span>
        </div>
      </div>
    </footer>
  );
}
