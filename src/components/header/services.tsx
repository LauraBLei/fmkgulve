"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

export const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { href: "/tjenester/nyt-gulv", key: "FloorPage.services.0.title" },
    { href: "/tjenester/sildebensgulv", key: "FloorPage.services.1.title" },
    { href: "/tjenester/linoleum", key: "FloorPage.services.2.title" },
    { href: "/tjenester/andre-traegulve", key: "FloorPage.services.3.title" },
    {
      href: "/tjenester/andre-gulvbelaegninger",
      key: "FloorPage.services.4.title",
    },
    { href: "/tjenester/undergulve", key: "FloorPage.services.5.title" },
    { href: "/tjenester/trapper", key: "FloorPage.services.6.title" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-xl font-primary font-medium hover:text-brand-blue cursor-pointer transition-colors"
      >
        {t("Header.nav.services")}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {services.map((service, index) => (
            <Link
              key={index}
              href={locale === "da" ? service.href : `/en${service.href}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue/20 first:rounded-t-md last:rounded-b-md transition-colors"
              onClick={() => setIsOpen(false)} // Close when clicking a link
            >
              {t(service.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
