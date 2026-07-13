"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { PinkBanner } from "@/components/home/PinkBanner";
import { ProductosDestacados } from "@/components/home/ProductosDestacados";
import { ReleasesDestacados, mockRelease } from "@/components/home/ReleasesDestacados";
import { YoutubeEmbed, mockEmbed } from "@/components/home/YoutubeEmbed";

export default function Home() {

  return (
    <>

      {/* Productos Destacados */}
      <ProductosDestacados />
      
      {/* Banner */}
      <PinkBanner/>

      {/* Musica/Releases */}
      <ReleasesDestacados releases={mockRelease}/>

      {/* Banner */}
      <PinkBanner/>

      {/* Video Destacado */}
      <YoutubeEmbed videos={mockEmbed}/>

    </>
  );
}
