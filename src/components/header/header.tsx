"use client";
import { DesktopHeader } from "./desktop";
import { Sidebar } from "./sidebar";

export const Header = () => {
  return (
    <header className="bg-white flex place-content-end  shadow-sm  pageContainer font-primary font-medium">
      <DesktopHeader />
      <Sidebar />
    </header>
  );
};
