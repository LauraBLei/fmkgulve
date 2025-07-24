import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "../contactForm";

export const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const tInfo = useTranslations("ContactInfo");
  return (
    <div className="font-secondary">
      <div className="lg:flex lg:flex-row">
        <Image
          src={"/profile/contactHero.webp"}
          alt="Worker fixing floor"
          width={1034}
          height={463}
          className="w-full h-auto object-cover lg:hidden"
        />
        <div className="px-4 lg:px-10">
          <h1 className="font-primary font-bold text-brand-blue text-2xl my-4 lg:my-8 lg:text-3xl lg:text-center">
            {t("Title")}
          </h1>
          <div className="flex flex-col gap-2 mt-4 mb-10 lg:gap-4">
            <h2 className="contactHeadings">{t("interestedSection.title")}</h2>
            <p>{t("interestedSection.textOne")}</p>
            <p>{t("interestedSection.textTwo")}</p>
          </div>
          <hr className="border-1 border-brand-blue" />
          <div className="flex flex-col my-10 justify-between gap-6 lg:flex-row">
            <div>
              <h2 className="contactHeadings">{t("openingHours.title")}</h2>
              <div className="flex flex-col gap-1 py-2">
                <p className="font-semibold">
                  {t("openingHours.businessHours.title")}
                </p>
                <p>{t("openingHours.businessHours.schedule")}</p>
                <p className="text-xs">
                  {t("openingHours.businessHours.disclaimer")}
                </p>
              </div>
              <div className="flex flex-col gap-1 py-2">
                <p className="font-semibold">
                  {t("openingHours.phoneHours.title")}
                </p>
                <p>{t("openingHours.phoneHours.schedule")}</p>
                <p className="text-xs max-w-[350px]">
                  {t("openingHours.phoneHours.afterHours")}
                </p>
              </div>
            </div>
            <div>
              <h2 className="contactHeadings">{t("contact")}</h2>
              <div className="py-2 pb-6">
                <p>{tInfo("company")}</p>
                <p>{tInfo("address")}</p>
                <p>{tInfo("cvr")}</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="contactInfo">
                  <Phone
                    size={20}
                    strokeWidth={2.5}
                    className="text-brand-blue"
                  />
                  <p>{tInfo("phone")}</p>
                </div>
                <div className="contactInfo">
                  <Mail
                    size={20}
                    strokeWidth={2.5}
                    className="text-brand-blue"
                  />
                  <p>{tInfo("email")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/profile/contact.webp"}
          alt="Worker fixing floor"
          width={686}
          height={601}
          className="hidden lg:block w-full h-auto max-h-[601px] object-cover"
        />
      </div>
      <ContactForm />
    </div>
  );
};
