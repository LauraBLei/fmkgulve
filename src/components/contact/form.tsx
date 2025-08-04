import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
  const t = useTranslations("ContactComponent");

  return (
    <form className="flex flex-col gap-5 lg:gap-3 w-full text-xs lg:text-base px-4 my-12 max-w-[550px] mx-auto">
      <input
        type="text"
        placeholder={t("formPlaceholder.name")}
        className="contactInput lg:rounded-xl rounded-full"
      />
      <input
        type="number"
        placeholder={t("formPlaceholder.phone")}
        className="contactInput lg:rounded-xl rounded-full"
      />
      <input
        type="email"
        placeholder={t("formPlaceholder.email")}
        className="contactInput lg:rounded-xl rounded-full "
      />
      <textarea
        placeholder={t("formPlaceholder.text")}
        className="contactInput h-[127px] lg:h-[110px] lg:rounded-xl rounded-2xl"
      />
      <button
        type="submit"
        className="py-2 w-full bg-brand-blue flex justify-center items-center gap-1 lg:w-[182px] lg:rounded-xl cursor-pointer text-white font-semibold rounded-full hover:bg-[#1c74bc85] active:text-black active:bg-white active:border-1 active:border-brand-blue transition-all duration-300"
      >
        {t("formPlaceholder.submit")}
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </form>
  );
};
