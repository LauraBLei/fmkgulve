import { FloorCardProps } from "@/types/interface";
import { useTranslations } from "next-intl";
import { HeroSection } from "../servicePage/hero";
import { ArticleSection } from "../servicePage/articles";

export const FloorPage = ({ service }: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  return (
    <div className="flex flex-col gap-10 font-secondary">
      <section>
        <HeroSection service={service} />
      </section>
      <p className="px-5 text-2xl text-brand-blue font-semibold">
        {t("subtitle")}
      </p>

      <ArticleSection service={service} />
    </div>
  );
};
