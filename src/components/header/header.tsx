"use client";
import Link from "next/link";
import Image from "next/image";

import { NavLink } from "./navLink";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";
import { ServiceDropdown } from "./services";

export const Header = () => {
  const t = useTranslations();

  return (
    <header className="bg-white shadow-sm border-b pageContainer font-primary font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="FMK Gulve"
              width={240}
              height={80}
              className="h-10 w-auto"
              priority
              quality={100}
            />
          </Link>

          <nav className="flex gap-8 items-center">
            <NavLink href="/" text={t("Header.nav.home")} />
            <ServiceDropdown />
            <NavLink href="/about" text={t("Header.nav.about")} />
            <NavLink href="/contact" text={t("Header.nav.contact")} />
            <LocaleSwitcher label={t("LocalesSwitcher.label")} />
          </nav>
        </div>
      </div>
    </header>
  );
};
