"use client";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { handleContactSubmit } from "@/utility/handleContactSubmit";

export const ContactFormDesktop = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleContactSubmit(e.currentTarget);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    }
  };

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
        <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
          <input
            name="name"
            type="text"
            placeholder={t("formPlaceholder.name")}
            className="contactInputDesktop"
          />
          <input
            name="phone"
            type="text"
            placeholder={t("formPlaceholder.phone")}
            className="contactInputDesktop"
          />
          <input
            name="email"
            type="email"
            placeholder={t("formPlaceholder.email")}
            className="contactInputDesktop"
          />
          <textarea
            name="message"
            placeholder={t("formPlaceholder.text")}
            className="contactInputDesktop h-[110px]"
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-1 py-2 w-[182px] bg-brand-blue text-white font-semibold rounded-xl cursor-pointer hover:bg-[#1c74bc85] active:text-black active:bg-white active:border-1 active:border-brand-blue transition-all duration-300"
          >
            {t("formPlaceholder.submit")}
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </div>
  );
};
