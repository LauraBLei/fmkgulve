import { useTranslations } from "next-intl";
import { Phone, MapPin, Mail } from "lucide-react";

export const ContactFormInfo = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");
  return (
    <div>
      <div className="px-4 max-w-[550px] mx-auto">
        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <Phone />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("callTitle")}</p>
            <p>{tInfo("phone")}</p>
          </div>
        </div>

        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <Mail />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("emailTitle")}</p>
            <p>{t("locationText")}</p>
          </div>
        </div>

        <div className="contactIconContainer">
          <div className="contactFormIcons">
            <MapPin />
          </div>
          <div className="max-w-[200px]">
            <p className="contactIconTitle">{t("locationTitle")}</p>
            <p>{tInfo("address")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
