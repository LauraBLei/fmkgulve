"use client";
import { DesktopHeader } from "./desktop";
import { Sidebar } from "./sidebar";

export const Header = () => {
  return (
    <header className=" flex place-content-end  pageContainer font-primary font-medium">
      <DesktopHeader />
      <Sidebar />
    </header>
  );
};
