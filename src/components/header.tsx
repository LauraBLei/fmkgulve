"use client";
import Link from "next/link";
import Image from "next/image";

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
    >
      {text}
    </Link>
  );
};
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b pageContainer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="FMK Gulve"
              width={240}
              height={80}
              className="h-10 w-auto"
              priority
              quality={95}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <NavLink href="/" text="Hjem" />
            <NavLink href="/floor" text="Gulve" />
            <NavLink href="/about" text="Om os" />
            <NavLink href="/contact" text="Kontakt" />
          </nav>
        </div>
      </div>
    </header>
  );
};
