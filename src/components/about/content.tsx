import { useTranslations } from "next-intl";
import Image from "next/image";
export const AboutContent = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="lg:flex lg:flex-row">
      <div>
        <Image
          src={"/profile/contactHero.webp"}
          alt="Worker fixing floor"
          width={1034}
          height={463}
          className="w-full h-auto object-cover lg:hidden"
        />
      </div>
      <div className="px-4 lg:px-1 flex-1">
        <h1 className="font-primary font-bold text-brand-blue text-2xl my-4 lg:my-8 lg:text-3xl lg:text-center">
          {t("Title")}
        </h1>
        <div className="flex flex-col gap-6 mt-4 mb-10 lg:gap-12">
          <p>{t("textOne")}</p>
          <p>{t("textTwo")}</p>
          <p>{t("textThree")}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <Image
          src={"/profile/contact.webp"}
          alt="Worker fixing floor"
          width={686}
          height={601}
          className="hidden lg:block w-full h-auto max-h-[601px] object-cover"
        />
      </div>
    </div>
  );
};
