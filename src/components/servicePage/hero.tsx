import { FloorCardProps } from "@/types/interface";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroSection = ({ service }: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  return (
    <div className="w-full relative h-[400px] mb-10">
      <Image
        src={service.image}
        alt="Description of image"
        fill
        className="object-cover"
        quality={100}
      />
      <h1 className="absolute bottom-0 mb-[-20px]  ml-10 w-[200px] md:w-[400px] text-center text-lg md:text-2xl rounded-md bg-brand-blue shadow-md text-white font-primary py-2">
        {t("title")}
      </h1>
    </div>
  );
};
