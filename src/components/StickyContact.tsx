import { Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const StickyContact = () => {
  const t = useTranslations("ContactInfo");
  return (
    <div className="fixed z-50 bottom-0 lg:hidden left-0 bg-white text-brand-blue w-full flex justify-between items-center p-3 border-1 border-brand-bluer h-21 font-semibold shadow-[0_-6px_10px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex-1 flex flex-col items-center gap-1">
        <Phone size={20} />
        <p>{t("phone")}</p>
      </div>
      <span className="border-1 border-brand-blue h-full mx-4" />
      <Link
        href={"/contact"}
        title={t("emailMsg")}
        className="flex-1 flex flex-col items-center gap-1 cursor-pointer"
      >
        <Mail size={20} />
        <p>{t("emailMsg")}</p>
      </Link>
    </div>
  );
};
