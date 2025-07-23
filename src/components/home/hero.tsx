import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full relative h-[400px]">
      <Image
        src="/profile/profile3.png"
        alt="Description of image"
        fill
        className="object-cover object-top"
      />
      <div className="absolute z-20 h-full flex flex-col gap-5 justify-center items-center mx-5 md:mx-10 lg:mx-20 text-white font-semibold max-w-[250px] lg:max-w-[400px] text-base md:text-xl lg:text-2xl">
        <p className="px-2">{t("heroSection.text")}</p>
        <Link
          href="#contact"
          className="py-2 px-10 text-sm lg:text-lg hoverEffect bg-brand-blue cursor-pointer shadow-md block text-center"
        >
          {t("heroSection.button")}
        </Link>
      </div>
      <div className="h-full w-full z-10 bg-black/20 absolute"></div>
    </div>
  );
};
