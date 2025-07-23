"use client";
import { FloorCard } from "../card";
import { SERVICES } from "@/utility/services";

export const ServicesSection = () => {
  return (
    <div className="flex gap-10 flex-wrap max-w-[1200px] w-full justify-center items-center ">
      {SERVICES.map((service) => (
        <FloorCard
          key={service.id}
          service={service}
          width="xs:w-[238px]"
          height="xs:h-[300px]"
        />
      ))}
    </div>
  );
};
