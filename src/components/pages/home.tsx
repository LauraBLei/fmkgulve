import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  );
};
