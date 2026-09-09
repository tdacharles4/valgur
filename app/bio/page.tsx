"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

const CONTACT_EMAIL = "valgurmusica@gmail.com";
const BOOKING_US_EMAIL = "merrick@groundcontroltouring.com";

export default function Bio() {
  const { t } = useLocale();
  const [toast, setToast] = useState<{ x: number; y: number } | null>(null);

  const copy = (email: string) => (e: React.MouseEvent) => {
    navigator.clipboard.writeText(email);
    setToast({ x: e.clientX, y: e.clientY });
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <>

      <div className="w-full flex-1 flex justify-center items-center gap-1 px-[8%] py-8">
        <h1 className="font-helvetica font-bold text-7xl">
          {t("bio.statement")}
        </h1>
      </div>
      <div className="text-right text-[#0000EE] font-bold underline flex flex-row items-center justify-end gap-4 px-[8%] py-8">
        <button type="button" className="cursor-pointer" onClick={copy(CONTACT_EMAIL)}>{t("bio.contact")}</button>
        <button type="button" className="cursor-pointer" onClick={copy(BOOKING_US_EMAIL)}>{t("bio.bookingUs")}</button>
        <button type="button" className="cursor-pointer" onClick={copy(CONTACT_EMAIL)}>{t("bio.bookingMxLatam")}</button>
      </div>

      {toast && (
        <div
          className="fixed z-[10001] border border-[#FF0084] bg-white text-[#FF0084] px-2 py-1 text-sm uppercase pointer-events-none"
          style={{ left: toast.x+10, top: toast.y-10, transform: "translate(0, -100%)" }}
        >
          {t("bio.copied")}
        </div>
      )}

    </>
  );
}
