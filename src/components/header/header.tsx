"use client";
import Link from "next/link";
import Image from "next/image";

import { NavLink } from "./navLink";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("LocaleSwitcher");

  return (
    <header className="bg-white shadow-sm border-b pageContainer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          <nav className="flex space-x-8 items-center">
            <NavLink href="/" text="Hjem" />
            <NavLink href="/floor" text="Gulve" />
            <NavLink href="/about" text="Om os" />
            <NavLink href="/contact" text="Kontakt" />
            <LocaleSwitcher label={t("label")} />
          </nav>
        </div>
      </div>
    </header>
  );
};
