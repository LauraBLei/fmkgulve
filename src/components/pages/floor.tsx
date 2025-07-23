import { FloorCardProps } from "@/types/interface";
import { useTranslations } from "next-intl";

export const FloorPage = ({ service }: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};
