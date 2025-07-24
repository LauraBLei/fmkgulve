"use client";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export const ContactFormMobile = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");
  return (
    <div className="font-secondary lg:hidden">
      <hr className="border-1 border-brand-blue mb-8" />
      <Image
        src={"/profile/contactForm.png"}
        alt="Worker fixing floor"
        width={154}
        height={154}
        className="w-[154px] h-[154px] object-cover rounded-full mx-auto"
      />
      <div className="text-center flex flex-col gap-2 py-2 px-2">
        <h2 className="font-bold text-2xl text-brand-blue">{t("title")}</h2>
        <p className="font-bold text-brand-blue">{t("formularSubText")}</p>
      </div>
      <div className="px-4 max-w-[550px] mx-auto">
        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <Phone />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("callTitle")}</p>
            <p>{tInfo("phone")}</p>
          </div>
        </div>

        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <Mail />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("emailTitle")}</p>
            <p>{t("locationText")}</p>
          </div>
        </div>

        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <MapPin />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("locationTitle")}</p>
            <p>{tInfo("address")}</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-5 text-xs px-4 my-12 max-w-[550px] mx-auto">
        <input
          type="text"
          placeholder={t("formPlaceholder.name")}
          className="contactInputMobile rounded-full"
        />
        <input
          type="number"
          placeholder={t("formPlaceholder.phone")}
          className="contactInputMobile rounded-full"
        />
        <input
          type="email"
          placeholder={t("formPlaceholder.email")}
          className="contactInputMobile rounded-full"
        />
        <textarea
          placeholder={t("formPlaceholder.text")}
          className="contactInputMobile h-[127px] rounded-3xl"
        />
        <button
          type="submit"
          className="py-2 w-full bg-brand-blue text-white font-semibold rounded-full"
        >
          {t("formPlaceholder.submit")}
        </button>
      </form>
    </div>
  );
};
