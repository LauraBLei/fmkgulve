"use client";

import Link from "next/link";
import { FloorCardProps } from "@/types/interface";
import Image from "next/image";

export const FloorCard = ({ service }: FloorCardProps) => {
  return (
    <Link href={"/tjenester"}>
      <div className="relative">
        <Image
          src={service.image}
          alt=""
          width={400}
          height={300}
          className="w-[162px] h-[195px] object-cover rounded-[10px]"
        />
        <div className="absolute bottom-8 bg-[#1c74bcae] text-white p-1.5 w-[162px] text-center font-semibold text-[13px]">
          <p>{service.title}</p>
        </div>
      </div>
    </Link>
  );
};
