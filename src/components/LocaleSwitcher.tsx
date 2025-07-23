"use client";
import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

type Props = {
  label: string;
};

export default function LocaleSwitcher({ label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  function changeLocale(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  const locales = [
    {
      code: "da" as Locale,
      flag: "/flags/da.webp",
      alt: "Danish flag",
    },
    {
      code: "en" as Locale,
      flag: "/flags/gb.webp",
      alt: "English flag",
    },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="sr-only">{label}</span>
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => changeLocale(locale.code)}
          disabled={isPending}
          className={`rounded-full cursor-pointer overflow-hidden w-[30px] h-[30px] flex items-center justify-center transition-all duration-200 ${
            currentLocale === locale.code
              ? "ring-2 ring-white lg:ring-black opacity-100"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <Image
            src={locale.flag}
            alt={locale.alt}
            width={90}
            height={90}
            quality={95}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
