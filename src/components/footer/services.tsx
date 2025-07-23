import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export const ServicesFooter = () => {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    { href: "/tjenester/nyt-gulv", key: "FloorPage.services.0.title" },
    { href: "/tjenester/sildebensgulv", key: "FloorPage.services.1.title" },
    { href: "/tjenester/linoleum", key: "FloorPage.services.2.title" },
    { href: "/tjenester/andre-traegulve", key: "FloorPage.services.3.title" },
    {
      href: "/tjenester/andre-gulvbelaegninger",
      key: "FloorPage.services.4.title",
    },
    { href: "/tjenester/undergulve", key: "FloorPage.services.5.title" },
    { href: "/tjenester/trapper", key: "FloorPage.services.6.title" },
  ];
  return (
    <article className="flex flex-col px-2 w-full max-w-[400px] gap-2">
      <h3 className="footerHeadline">{t("Footer.services")}</h3>
      <div className="grid grid-cols-2 gap-2 ">
        {services.map((service, index) => (
          <Link
            key={index}
            href={locale === "da" ? service.href : `/en${service.href}`}
            className="block  text-xs text-white  hover:bg-white/20 py-1 first:rounded-t-md last:rounded-b-md transition-colors"
          >
            {t(service.key)}
          </Link>
        ))}
      </div>
    </article>
  );
};
