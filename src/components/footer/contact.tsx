import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const ContactFooter = () => {
  const t = useTranslations();
  return (
    <article className=" flex flex-col w-full px-2 max-w-[400px] gap-2">
      <h3 className="footerHeadline">{t("Footer.contact")}</h3>
      <div>
        <p>{t("ContactInfo.company")}</p>
        <p>{t("ContactInfo.address")}</p>
      </div>

      <Link
        href="tel:+4530131631"
        className="flex items-center gap-2 font-semibold hover:bg-white/20 transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span>{t("ContactInfo.phone")}</span>
      </Link>

      <Link
        href="mailto:kontakt@fmkgulve.dk"
        className="flex items-center gap-2 font-semibold hover:bg-white/20 transition-colors"
      >
        <Mail className="h-4 w-4" />
        <span>{t("ContactInfo.email")}</span>
      </Link>
    </article>
  );
};
