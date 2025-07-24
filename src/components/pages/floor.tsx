import { FloorCardProps } from "@/types/interface";
import { useTranslations } from "next-intl";
import { HeroSection } from "../servicePage/hero";
import { ArticleSection } from "../servicePage/articles";
import { ContactForm } from "../contact/contactForm";
import { ValueProps } from "../valueProps";
import { OtherFloorsSection } from "../servicePage/other";
import { SERVICES } from "@/utility/services";

export const FloorPage = ({ service }: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  const translate = useTranslations();

  const otherServices = SERVICES.filter((s) => s.id !== service.id);
  return (
    <div className="flex flex-col gap-10 font-primary">
      <section>
        <HeroSection service={service} />
      </section>
      <p className="px-5 text-2xl text-brand-blue font-semibold">
        {t("subtitle")}
      </p>

      <ArticleSection service={service} />
      <section id="value" className="border-y-1 border-brand-blue">
        <ValueProps />
      </section>
      <section id="other" className="px-5 flex flex-col gap-5">
        <h3 className="text-lg text-brand-blue">
          {translate("FloorPage.otherServices")}
        </h3>
        <OtherFloorsSection list={otherServices} />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};
