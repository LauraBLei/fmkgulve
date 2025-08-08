import { useTranslations } from "next-intl";
import { NavLink } from "./navLink";
import { ServiceDropdown } from "./services";

export const SideBarNav = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const t = useTranslations();
  return (
    <nav className="flex-1 py-4 px-2">
      <div className="space-y-2">
        {/* Home */}
        <div>
          <NavLink
            href="/"
            text={t("Header.nav.home")}
            onClick={closeSidebar}
          />
        </div>

        {/* Services Dropdown */}
        <div>
          <div className="">
            <ServiceDropdown />
          </div>
        </div>

        {/* About */}
        <div>
          <NavLink
            href="/about"
            text={t("Header.nav.about")}
            onClick={closeSidebar}
          />
        </div>

        {/* Contact */}
        <div>
          <NavLink
            href="/contact"
            text={t("Header.nav.contact")}
            onClick={closeSidebar}
          />
        </div>
      </div>
    </nav>
  );
};
