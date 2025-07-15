import { useLocale } from "next-intl";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  onClick?: () => void;
}

export const NavLink = ({ href, text, onClick }: Props) => {
  const locale = useLocale();
  const linkHref = locale === "da" ? href : `/en${href}`;
  return (
    <Link href={linkHref} onClick={onClick} className="block navText">
      {text}
    </Link>
  );
};
