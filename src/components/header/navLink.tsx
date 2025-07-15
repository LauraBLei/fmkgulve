import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export const NavLink = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
    >
      {text}
    </Link>
  );
};
