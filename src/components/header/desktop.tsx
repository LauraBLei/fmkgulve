import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import { NavLink } from "./navLink";
import { ServiceDropdown } from "./services";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const DesktopHeader = () => {
  const t = useTranslations();

  return (
    <div className="mx-auto px-5 hidden lg:block w-full">
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
  );
};
