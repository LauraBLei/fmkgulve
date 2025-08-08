"use client";

import Link from "next/link";
import { FloorCardProps } from "@/types/interface";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FloorCard = ({
  service,
  width = "sm:w-[162px]", // Use Tailwind classes
  height = "sm:h-[195px]", // Use Tailwind classes
}: FloorCardProps) => {
  const t = useTranslations(service.translationKey);
  return (
    <Link
      href={`/tjenester/${service.slug}`}
      className={`${width} ${height} w-full h-[250px] relative sm:rounded-[10px] overflow-hidden`}
    >
      <Image
        src={service.image}
        alt={t("title")}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 162px"
        className="object-cover"
      />
      <div className="absolute bottom-8 bg-[#1c74bcae] text-white p-1.5 w-full text-center font-semibold text-[13px]">
        <p>{t("title")}</p>
      </div>
    </Link>
  );
};
