"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Shows", href: "/shows" },
  { title: "Tienda", href: "/tienda" },
  { title: "Bio", href: "/bio" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-bold text-lg tracking-tight">
          Valgur
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium hover:opacity-70 transition-opacity">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
