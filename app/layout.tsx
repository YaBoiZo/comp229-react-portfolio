import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Your Name | Software Engineering Portfolio",
    template: "%s | Your Name",
  },
  description:
    "A software engineering portfolio featuring projects, education, services, and contact information.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="page-shell">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
