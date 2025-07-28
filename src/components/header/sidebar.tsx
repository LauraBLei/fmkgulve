"use client";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { CloseButton, MenuButton } from "./button";
import { SideBarNav } from "./sideBarNav";
import { Logo } from "./logo";

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
      <Logo closeSidebar={closeSidebar} styling="h-8" />
      {/* Hamburger Button */}
      <MenuButton openSidebar={openSidebar} />

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
        <CloseButton closeSidebar={closeSidebar} />

        {/* Navigation */}
        <SideBarNav closeSidebar={closeSidebar} />

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
