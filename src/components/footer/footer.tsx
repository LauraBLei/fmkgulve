import { useTranslations } from "next-intl";
import { ContactFooter } from "./contact";
import { ServicesFooter } from "./services";
import { AboutFooter } from "./about";

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="mt-auto bg-brand-blue text-white py-4 w-full">
      <div className="flex gap-10 flex-wrap py-5 justify-evenly ">
        <ContactFooter />
        <ServicesFooter />
        <AboutFooter />
      </div>
      <div className="text-center border-t-1 pt-5">
        <p className="text-sm">{t("Footer.copyright")}</p>
      </div>
    </footer>
  );
};
