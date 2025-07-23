import { useTranslations } from "next-intl";
import { ValueProps } from "../valueProps";
import { HeroSection } from "../home/hero";

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
      <section id="services"></section>
      <section id="contact"></section>
    </div>
  );
};
