import { FloorCardProps, Messages } from "@/types/interface";
import { useMessages, useTranslations } from "next-intl";

export const ArticleSection = ({ service }: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  const messages = useMessages() as Messages;
  const serviceData = messages.FloorPage?.services?.[service.id];
  const textsOne = serviceData?.sectionOne?.text || [];
  const textsTwo = serviceData?.sectionTwo?.text || [];
  const textsThree = serviceData?.sectionThree?.text || [];

  return (
    <section className="px-5 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col gap-10">
        <article>
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">
            {t("sectionOne.title")}
          </h2>

          <div className="space-y-4">
            {textsOne.map((text: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </article>
        <article>
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">
            {t("sectionOne.title")}
          </h2>

          <div className="space-y-4">
            {textsTwo.map((text: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </article>
      </div>
      <article className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-brand-blue">
          {t("sectionOne.title")}
        </h2>

        <div className="space-y-4">
          {textsThree.map((text: string, index: number) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};
