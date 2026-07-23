"use client";

import * as React from "react";
import Link from "next/link";
import type { ShopifyArticle } from "@/lib/shopify";

export const mockEmbed: ShopifyArticle [] = [
    {
        contentHtml: 'https://www.youtube.com/watch?v=QrAH6mr6FXQ',
        tags: [
            'video-destacado'
        ]
    }
]

export function YoutubeEmbed({ videos }: { videos: ShopifyArticle [] }){
  const video = videos.find((v) => v.tags?.includes("video-destacado"));

  if (!video) {
    console.log(videos)
    return null;
  }

  const watchLink = video.contentHtml;
  const embedLink = `https://www.youtube.com/embed/${watchLink?.split("v=")[1]}`;
  

  return (
    <div className="video-responsive flex flex-col items-center py-12">
    <iframe
      width="853"
      height="480"
      src={`${embedLink}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <Link 
        href={`${watchLink}`} 
        className="text-[#0000EE] underline py-8"
        target="_blank" 
        rel="noopener noreferrer"
    >
        Ver mas...
    </Link>
  </div>
  );

}