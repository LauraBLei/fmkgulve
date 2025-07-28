export const BackDrop = ({
  closeSidebar,
  isOpen,
}: {
  closeSidebar: () => void;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-white/20 transition-opacity z-40 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeSidebar}
    />
  );
};
