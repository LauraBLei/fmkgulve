import { useTranslations } from "next-intl";

export const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  );
};
