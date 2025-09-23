import { cn } from "@/lib/utils";
import "./globals.css";

import { Allura, Fira_Code, Geist, Lora } from "next/font/google";

const geist = Geist({ variable: "--font-sans" });
const lora = Lora({ variable: "--font-serif" });
const firaCode = Fira_Code({ variable: "--font-mono" });
const allura = Allura({ variable: "--font-allura", weight: ["400"] });

export const metadata = {
  title: "Chanel and Nicholas's Wedding",
  description: "Please join us in celebrating our special day - Jan 10, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        geist.variable,
        lora.variable,
        firaCode.variable,
        allura.variable,
      )}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
