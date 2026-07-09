"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import cartIcon from "@/lib/vectors/cart.svg";
import globeIcon from "@/lib/vectors/globe.svg";

const navLinks: { title: string; href: string }[] = [
  { title: "Inicio", href: "/" },
  { title: "Shows", href: "/shows" },
  { title: "Tienda", href: "/tienda" },
  { title: "Bio", href: "/bio" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full">
      <nav className="w-full flex justify-between items-center gap-1 px-[8%] py-8">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xl tracking-tight">
            Valgur <span className="text-[0.6em] align-super">(mx)</span>
          </Link>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-xl font-medium hover:opacity-70 transition-opacity">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop icons */}
        <div className="hidden md:flex items-center gap-4">
          <Image src={globeIcon} alt="Language" width={20} height={20} />
          <Image src={cartIcon} alt="Cart" width={20} height={20} />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link href="/" className="text-xl tracking-tight">
            Valgur <span className="text-[0.6em] align-super">(mx)</span>
          </Link>
        </div>
        
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
