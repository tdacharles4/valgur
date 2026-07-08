import Link from "next/link";

const footerLinks: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Shows", href: "/shows" },
  { title: "Tienda", href: "/tienda" },
  { title: "Bio", href: "/bio" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between md:px-8">
        <span className="text-sm font-medium">Valgur</span>

        <ul className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm hover:opacity-70 transition-opacity">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Valgur
        </span>
      </div>
    </footer>
  );
}
