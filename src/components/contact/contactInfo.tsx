import { Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactInformation = () => {
  const tInfo = useTranslations("ContactInfo");
  const t = useTranslations("ContactPage");
  return (
    <div>
      <h2 className="contactHeadings">{t("contact")}</h2>
      <div className="py-2 pb-6">
        <p>{tInfo("company")}</p>
        <p>{tInfo("address")}</p>
        <p>{tInfo("cvr")}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="contactInfo">
          <Phone size={20} strokeWidth={2.5} className="text-brand-blue" />
          <p>{tInfo("phone")}</p>
        </div>
        <div className="contactInfo">
          <Mail size={20} strokeWidth={2.5} className="text-brand-blue" />
          <p>{tInfo("email")}</p>
        </div>
      </div>
    </div>
  );
};
