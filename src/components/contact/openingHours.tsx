import { useTranslations } from "next-intl";

export const OpeningHours = () => {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <h2 className="contactHeadings">{t("openingHours.title")}</h2>
      <div className="flex flex-col gap-1 py-2">
        <p className="font-semibold">{t("openingHours.businessHours.title")}</p>
        <p>{t("openingHours.businessHours.schedule")}</p>
        <p className="text-xs">{t("openingHours.businessHours.disclaimer")}</p>
      </div>
      <div className="flex flex-col gap-1 py-2">
        <p className="font-semibold">{t("openingHours.phoneHours.title")}</p>
        <p>{t("openingHours.phoneHours.schedule")}</p>
        <p className="text-xs max-w-[200px] lg:max-w-[350px]">
          {t("openingHours.phoneHours.afterHours")}
        </p>
      </div>
    </div>
  );
};
