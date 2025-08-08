import { useTranslations } from "next-intl";

export const InterestedText = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className="flex flex-col gap-2 mt-4 mb-10 lg:gap-4">
      <h2 className="contactHeadings">{t("interestedSection.title")}</h2>
      <p>{t("interestedSection.textOne")}</p>
      <p>{t("interestedSection.textTwo")}</p>
    </div>
  );
};
