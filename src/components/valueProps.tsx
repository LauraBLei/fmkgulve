"use client";

import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const ValueProps = () => {
  const t = useTranslations();
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-6 bg-white border-b-1 border-brand-blue md:border-none  ${
                index === 2 && "border-none"
              }`}
            >
              <div>
                <h3 className="text-base  flex gap-2 items-center justify-center lg:text-lg font-semibold text-brand-blue mb-2">
                  <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                  {t(`ValueProps.${index}.title`)}
                </h3>
                <p className="text-sm lg:text-base">
                  {t(`ValueProps.${index}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
