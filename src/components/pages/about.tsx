import { ContactFormDesktop } from "../contactDesktop";
import { ContactFormMobile } from "../contactMobile";
import { AboutContent } from "../about/content";

export const AboutPage = () => {
  return (
    <div className="font-secondary">
      <AboutContent />
      <div className="block lg:hidden">
        <ContactFormMobile />
      </div>
      <div className="hidden lg:block">
        <ContactFormDesktop />
      </div>
    </div>
  );
};
