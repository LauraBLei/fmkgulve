"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ContactForm } from "./contact/form";

export const ContactFormDesktop = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");
  return (
    <div className="relative font-secondary hidden lg:block px-14 py-26">
      {/* Decorative lines */}
      <div className="absolute top-38 left-0 w-full h-px bg-brand-blue z-0" />
      <div className="absolute bottom-38 left-0 w-full h-px bg-brand-blue z-0" />

      <div className="flex items-center justify-center gap-12 xl:gap-20">
        <Image
          src={"/profile/contactHero.webp"}
          alt="Worker fixing floor"
          width={1034}
          height={463}
          className="w-[350px] h-[442px] object-cover rounded-2xl object-[73%] z-20 bg-white"
        />
        <div className="flex flex-col gap-6 text-center min-w-[210px]">
          <div>
            <p className="font-bold text-brand-blue">{t("callText")}</p>
            <p className="text-xs py-1">{t("callSubText")}</p>
            <p className="font-bold text-brand-blue">{tInfo("phone")}</p>
          </div>
          <div>
            <p className="font-bold text-brand-blue">{t("formularText")}</p>
            <p className="text-xs py-1">{t("formularSubText")}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
