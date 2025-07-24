import type { Metadata } from "next";
import "../globals.css";
import "../fonts.css";
import { Header } from "@/components/header/header";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "FMKGulve",
  description: "FMKGULVE",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="da">
      <body className="min-h-screen flex flex-col items-center ">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 lg:bg-white bg-transparent  pageContainer">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
