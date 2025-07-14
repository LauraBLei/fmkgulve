import { useTranslations } from "next-intl";

export const FloorPage = () => {
  const t = useTranslations("FloorPage");
  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  );
};
