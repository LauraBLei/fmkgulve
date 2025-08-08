import { Menu, X } from "lucide-react";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";

export const CloseButton = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <div className="flex items-center justify-between p-6 ">
      <h2 className="text-xl font-semibold text-white">Menu</h2>
      <button
        onClick={closeSidebar}
        className="p-2 rounded-md cursor-pointer text-white hover:bg-white/20 transition-colors"
      >
        <X />
      </button>
    </div>
  );
};

export const MenuButton = ({ openSidebar }: { openSidebar: () => void }) => {
  return (
    <button
      onClick={openSidebar}
      className="lg:hidden cursor-pointer p-2 rounded-md hover:bg-brand-blue/20 transition-colors"
    >
      <Menu />
    </button>
  );
};

export const LanguageSwitcher = () => {
  const t = useTranslations();
  return (
    <div className="p-6 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <span className="sr-only">{t("LocaleSwitcher.label")}:</span>
        <LocaleSwitcher label={t("LocaleSwitcher.label")} />
      </div>
    </div>
  );
};
