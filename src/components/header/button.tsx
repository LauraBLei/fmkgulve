import { Menu, X } from "lucide-react";

export const CloseButton = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <div className="flex items-center justify-between p-6 ">
      <h2 className="text-xl font-semibold text-white">Menu</h2>
      <button
        onClick={closeSidebar}
        className="p-2 rounded-md cursor-pointer text-white hover:bg-white/20 transition-colors"
      >
        <X />
      </button>
    </div>
  );
};

export const MenuButton = ({ openSidebar }: { openSidebar: () => void }) => {
  return (
    <button
      onClick={openSidebar}
      className="lg:hidden cursor-pointer p-2 rounded-md hover:bg-brand-blue/20 transition-colors"
    >
      <Menu />
    </button>
  );
};
