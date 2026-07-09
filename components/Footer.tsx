import Link from "next/link";

const footerLinks: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Shows", href: "/shows" },
  { title: "Tienda", href: "/tienda" },
  { title: "Bio", href: "/bio" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex justify-between items-center gap-1 px-[8%] py-8">
        <div className="text-left flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-8">
          <span className="text-sm font-medium">ATENCIÓN AL CLIENTE</span>
          <span className="text-sm font-medium">POLITICA DE PRIVACIDAD</span>
        </div>
        <div className="text-right flex flex-col md:flex-row items-end md:items-center gap-8 md:gap-8">
          <a href="https://www.instagram.com/soyvalgur/" className="text-sm font-medium">INSTAGRAM</a>
          <span className="text-sm font-medium">© {new Date().getFullYear()} VALGUR</span>
        </div>
      </div>
    </footer>
  );
}
