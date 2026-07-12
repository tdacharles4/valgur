"use client";

import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/shopify";
import { useState } from "react";
import leftNav  from "@/lib/vectors/releases_leftnav.svg";
import rightNav  from "@/lib/vectors/releases_rightnav.svg";

{/* Showcase, cambiar a Shopify */}

export type Release = {
images: {edges: {node: {url: string; altText: string;};}[];};
title: string;
year: string;
links: {
    bandcamp?: string | null;
    spotify?: string | null; 
    apple?: string | null;
    youtube?: string | null;
    deezer?: string | null;
    tidal?: string | null;
}
}

export const mockRelease: Release [] = [
    {
        images: {
        edges: [
            { node: { url: "/images/armaggedon.png", altText: "Armaggedon Album Cover" } },
        ],
        },
        title: 'Armaggedon',
        year: '2023',
        links: { spotify: 'https://open.spotify.com/album/3vNQ0IvQiiMVZFP6GHlL1i?si=sEiyc8qARo2MqYgHPIru5w' }
    },
    {
        images: {
        edges: [
            { node: { url: "/images/zapandu.webp", altText: "Armaggedon Album Cover" } },
        ],
        },
        title: 'Zapandú',
        year: '2019',
        links: { spotify: 'https://open.spotify.com/album/7peyVHwdincY9AkNJv0VY0?si=HaGA8S6lQdqCmmTC81A40A',
                 bandcamp: 'https://valgurband.bandcamp.com/album/zapand',
                 deezer: 'https://link.deezer.com/s/33NX30MMQS0j40oBC2q9O'
         }
    },
]

export function ReleasesDestacados({ releases }: { releases: Release [] }){
    const [index, setIndex] = useState(0);
    const release = releases[index];
    const image = release.images.edges[0]?.node;
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    const goPrev = () => setIndex((i) => (i - 1 + releases.length) % releases.length);
    const goNext = () => setIndex((i) => (i + 1) % releases.length);

    return(
        <>
            <div className="w-full flex flex-col px-[8%] py-6 gap-4">
                <h1 className="text-2xl">MÚSICA ‧₊˚♪ 𝄞₊ ♫ ˚⊹</h1>
                <div className="flex flex-row overflow-hidden justify-between">
                    <div className="relative h-172 w-172">
                    <Image 
                        src={image.url}
                        alt={image.altText || release.title}
                        fill
                        className="object-contain"
                    />
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-bold">{release.title} - {release.year}</h1>
                        {Object.entries(release.links)
                            .filter(([, url]) => url !== null)
                            .map(([platform, url]) => (
                                <ul>
                                    <Link 
                                        key={platform} 
                                        href={url as string} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-[#0000EE] text-xl underline">
                                        {capitalize(platform)}
                                    </Link>
                                </ul>
                        ))}
                        <div className="items-center gap-4 mt-auto self-end">
                            <button type="button" onClick={goPrev} aria-label="Previous release">
                                <Image src={leftNav} alt="Left Arrow" width={20} height={20} />
                            </button>
                            <button type="button" onClick={goNext} aria-label="Next release">
                                <Image src={rightNav} alt="Right Arrow" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}