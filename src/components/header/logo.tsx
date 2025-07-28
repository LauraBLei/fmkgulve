import Link from "next/link";
import Image from "next/image";

export const Logo = ({
  closeSidebar,
  styling,
}: {
  closeSidebar: () => void;
  styling: string;
}) => {
  return (
    <Link href="/" onClick={closeSidebar}>
      <Image
        src="/logo/logo.png"
        alt="FMK Gulve"
        width={240}
        height={80}
        className={`${styling} w-auto`}
        priority
        quality={100}
        unoptimized
      />
    </Link>
  );
};
