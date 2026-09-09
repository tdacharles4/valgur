"use client";

import { useState } from "react";
import { useLocale, Lang } from "@/contexts/LocaleContext";

const LANGUAGES: { code: Lang; labelKey: string }[] = [
  { code: "ES", labelKey: "language.spanish" },
  { code: "EN", labelKey: "language.english" },
];

export function LanguageDropdown() {
  const { lang, setLang, t } = useLocale();
  const [open, setOpen] = useState(false);

  const select = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("language.selectLanguage")}
        className="flex items-center gap-1 cursor-pointer uppercase text-sm font-medium"
      >
        {lang}
        <span className={`transition-transform text-xs ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 z-10 bg-white border border-[#FF0084] w-24">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => select(l.code)}
              className={`block w-full text-left px-3 py-2 uppercase text-sm cursor-pointer ${
                lang === l.code ? "bg-[#FF0084] text-white" : ""
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
