"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { PinkBanner } from "@/components/home/PinkBanner";
import { ProductosDestacados } from "@/components/home/ProductosDestacados";

export default function Home() {

  return (
    <>

      {/* Productos Destacados */}
      <ProductosDestacados />
      
      {/* Banner */}
      <PinkBanner/>

      {/* Musica/Releases */}

      {/* Banner */}
      <PinkBanner/>
      {/* Video Destacado */}

    </>
  );
}
