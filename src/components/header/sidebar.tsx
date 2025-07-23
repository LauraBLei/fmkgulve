"use client";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { NavLink } from "./navLink";
import { ServiceDropdown } from "./services";
import LocaleSwitcher from "../LocaleSwitcher";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className=" lg:hidden w-full flex  justify-between py-2 px-2">
      <Link href="/" onClick={closeSidebar}>
        <Image
          src="/logo/logo.png"
          alt="FMK Gulve"
          width={240}
          height={80}
          className="h-8 w-auto" // Slightly smaller for sidebar
          priority
          quality={100}
          unoptimized
        />
      </Link>
      {/* Hamburger Button */}
      <button
        onClick={openSidebar}
        className="lg:hidden cursor-pointer p-2 rounded-md hover:bg-brand-blue/20 transition-colors"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-white/20 transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-50 bg-brand-blue shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 ">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md cursor-pointer text-white hover:bg-white/20 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2">
          <div className="space-y-2">
            {/* Home */}
            <div>
              <NavLink
                href="/"
                text={t("Header.nav.home")}
                onClick={closeSidebar}
              />
            </div>

            {/* Services Dropdown */}
            <div>
              <div className="">
                <ServiceDropdown />
              </div>
            </div>

            {/* About */}
            <div>
              <NavLink
                href="/about"
                text={t("Header.nav.about")}
                onClick={closeSidebar}
              />
            </div>

            {/* Contact */}
            <div>
              <NavLink
                href="/contact"
                text={t("Header.nav.contact")}
                onClick={closeSidebar}
              />
            </div>
          </div>
        </nav>

        {/* Language Switcher Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="sr-only">{t("LocaleSwitcher.label")}:</span>
            <LocaleSwitcher label={t("LocaleSwitcher.label")} />
          </div>
        </div>
      </div>
    </div>
  );
};
