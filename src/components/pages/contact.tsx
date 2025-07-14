import { useTranslations } from "next-intl";

export const ContactPage = () => {
  const t = useTranslations("ContactPage");
  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  );
};
