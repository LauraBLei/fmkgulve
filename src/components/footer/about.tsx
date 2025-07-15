import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const AboutFooter = () => {
  const t = useTranslations();
  return (
    <article className="flex px-2 flex-col gap-2 items-center f max-w-[400px] ">
      <h3 className="footerHeadline">{t("Footer.about.title")}</h3>
      <p className="text-center text-sm">{t("Footer.about.text")}</p>
      <Link
        href="/about"
        className="flex border-1 border-white rounded-full w-auto p-2 max-w-[150px] items-center justify-center hoverEffect cursor-pointer"
      >
        {t("Footer.about.button")} <ArrowRight />
      </Link>
    </article>
  );
};
