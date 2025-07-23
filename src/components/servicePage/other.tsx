import { Service } from "@/types/common";
import { FloorCard } from "../card";

export const OtherFloorsSection = ({ list }: { list: Service[] }) => {
  console.log("List: ", list);

  return (
    <div className="flex justify-evenly gap-5 md:gap-8 flex-wrap">
      {list.map((otherService) => (
        <FloorCard
          key={otherService.id}
          service={otherService}
          width="sm:w-[197px]"
          height="sm:h-[230px]"
        />
      ))}
    </div>
  );
};
