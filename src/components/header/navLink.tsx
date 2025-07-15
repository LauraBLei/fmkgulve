import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export const NavLink = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="lg:text-xl hover:text-brand-blue transition-colors"
    >
      {text}
    </Link>
  );
};
