import { useTranslations } from "next-intl";
import Image from "next/image";
<<<<<<< HEAD
import { ContactForm } from "../contact/contactForm";
=======
import { ContactFormMobile } from "../contactMobile";
import { ContactFormDesktop } from "../contactDesktop";
import { InterestedText } from "../contact/interested";
import { OpeningHours } from "../contact/openingHours";
import { ContactInformation } from "../contact/contactInfo";
>>>>>>> main

export const ContactPage = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="font-secondary">
      <div className="lg:flex">
        <div className="lg:hidden">
          <Image
            src={"/profile/contactHero.webp"}
            alt="Worker fixing floor"
            width={1034}
            height={463}
            className="w-full h-auto object-cover lg:hidden"
          />
        </div>
        <div className="px-4 lg:px-10 flex-1">
          <h1 className="font-primary font-bold text-brand-blue text-2xl my-4 lg:my-8 lg:text-3xl lg:text-center">
            {t("Title")}
          </h1>
          <InterestedText />
          <hr className="border-1 border-brand-blue" />
          <div className="flex flex-wrap lg:flex-nowrap my-10 justify-center md:justify-evenly lg:justify-between gap-6 lg:flex-row">
            <OpeningHours />
            <ContactInformation />
          </div>
        </div>
        <div className="flex-1 flex items-center ">
          <Image
            src={"/profile/contact.webp"}
            alt="Worker fixing floor"
            width={686}
            height={601}
            className="hidden lg:block w-full h-auto max-h-[601px] object-cover"
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
