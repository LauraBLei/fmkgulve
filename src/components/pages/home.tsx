import { useTranslations } from "next-intl";
import { ValueProps } from "../valueProps";
import { HeroSection } from "../home/hero";
import { ServicesSection } from "../home/services";
import { ContactFormDesktop } from "../contactDesktop";
import { ContactFormMobile } from "../contactMobile";

export const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="sr-only">{t("Title")}</h1>
      <section id="hero">
        <HeroSection />
      </section>
      <section className="value">
        <ValueProps />
      </section>
      <section id="services" className="w-full flex justify-center my-10">
        <ServicesSection />
      </section>
      <section id="contact">
        <ContactFormDesktop />
        <ContactFormMobile />
      </section>
    </div>
  );
};
