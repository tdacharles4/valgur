"use client";

import * as React from "react";
import Link from "next/link";
import type { ShopifyArticle } from "@/lib/shopify";

type Guest = { name: string; symbol: string };

type ParsedShow = {
  ubicacion: string;
  fecha: string;
  tickets: string;
  invitados: Guest[];
  agotado: boolean;
};

function extract(html: string | null | undefined, label: string): string {
  const m = html?.match(new RegExp(`${label}:[ \\t]*([^\\n]*)`));
  return m?.[1]?.trim() ?? "";
}

function parseShow(article: ShopifyArticle): ParsedShow {
  const invitadoRaw = extract(article.contentHtml, "Invitado");

  const invitados: Guest[] = invitadoRaw
    ? invitadoRaw.split(",").map((g) => {
        const parts = g.trim().split(/\s+/);
        const symbol = parts.pop() ?? "";
        return { name: parts.join(" "), symbol };
      })
    : [];

  return {
    ubicacion: extract(article.contentHtml, "Ubicacion"),
    fecha: extract(article.contentHtml, "Fecha"),
    tickets: extract(article.contentHtml, "Tickets"),
    invitados,
    agotado: extract(article.contentHtml, "Estatus") === "Agotado",
  };
}

export const mockShowlist: ShopifyArticle [] = [
    {
        blogTitle: 'Shows',
        title: 'Guadalajara, JAL.',
        contentHtml: 
        `
            Ubicacion: Guadalajara, JAL.
            Fecha: 28.06.2026
            Tickets: www.boleteo.com/valgur-guadalajara-28-06-2026 
            Invitado:
            Estatus: Agotado
        `,
        tags: [
            'tour-2026'
        ]
    },
    {
        blogTitle: 'Shows',
        title: 'Morelia, MIC.',
        contentHtml: 
        `
            Ubicacion: Morelia, MIC.
            Fecha: 3.7.2026
            Tickets: www.boleteo.com/valgur-morelia-03-07-2026 
            Invitado:
            Estatus: Agotado
        `,
        tags: [
            'tour-2026'
        ]
    },
    {
        blogTitle: 'Shows',
        title: 'Zamora, MIC.',
        contentHtml: 
        `
            Ubicacion: Zamora, MIC.
            Fecha: 4.07.2026
            Tickets: www.boleteo.com/valgur-zamora-04-07-2026 
            Invitado:
            Estatus: Disponible
        `,
        tags: [
            'tour-2026'
        ]
    },
    {
        blogTitle: 'Shows',
        title: 'Guatemala',
        contentHtml: 
        `
            Ubicacion: Guatemala
            Fecha: 07.8.2026
            Tickets: www.boleteo.com/valgur-guatemala-07-08-2026 
            Invitado: Malcriada ✱
            Estatus: Disponible
        `,
        tags: [
            'tour-2026'
        ]
    }

]

export function Showlist({ shows }: { shows: ShopifyArticle [] }){

    const parsed = shows
    .filter((s) => s.tags?.includes("tour-2026"))
    .map(parseShow);

    const guests = [
    ...new Map(
      parsed.flatMap((p) => p.invitados).map((g) => [g.symbol + g.name, g])
    ).values(),
  ];

  return (
    <>
    <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col px-[8%] py-12">
        {parsed.map((show, i) => {
            const strike = show.agotado ? "line-through" : "";
            const href = show.tickets.startsWith("http")
            ? show.tickets
            : `https://${show.tickets}`;

            return (
            <div key={i} className="text-xl flex items-center justify-between py-2">
                <span className={strike}>
                <span className="inline-block w-28">{show.fecha}</span>
                {show.ubicacion}
                {show.invitados.map((g) => ` ${g.symbol}`).join("")}
                </span>
                {show.agotado ? (
                    <span className="text-[#0000EE] line-through">Tickets</span>
                    ) : (
                    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-[#0000EE] underline">
                        Tickets
                    </Link>
                )}
            </div>
            );
        })}

        {guests.length > 0 && (
            <div className="pt-30">
            {guests.map((g) => (
                <p key={g.symbol + g.name}>
                {g.symbol} Con {g.name}
                </p>
            ))}
            </div>
        )}
        
        </div>
        <div className="text-right text-[#0000EE] font-bold underline flex flex-row items-center justify-end gap-4 px-[8%] py-8 mt-auto">
            <a href="/bio">Contacto</a>
            <a href="/bio">Booking US / EU</a>
            <a href="/bio">Booking MX / Latam</a>
        </div>
    </div>
    </>
  );
}