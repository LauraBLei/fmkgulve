import { useTranslations } from "next-intl";
import { ValueProps } from "../valueProps";

export const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("Title")}</h1>

      <ValueProps />
    </div>
  );
};
