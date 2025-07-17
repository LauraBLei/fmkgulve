"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FloorCardProps } from "@/types/interface";
import Image from "next/image";

export const FloorCard = ({ service }: FloorCardProps) => {
  const t = useTranslations("FloorPage.services");
  return (
    <Link href={"/tjenester"}>
      <div className="card">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <div>
          <p>{t(service.title)}</p>
        </div>
      </div>
    </Link>
  );
};
