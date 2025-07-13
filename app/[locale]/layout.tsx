// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { hasLocale, NextIntlClientProvider } from "next-intl";
// import { Work_Sans } from "next/font/google";
// import "./globals.css";
// import Layout from "@/provider";
// import { routing } from "@/i18n/routing";

// const workSans = Work_Sans({
//   variable: "--font-work-mono",
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// export const metadata: Metadata = {
//   title: "NFT-Marketplace",
//   description: "Discover digital art & Collect NFTs",
// };

// export default async function RootLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const {locale } = await params;
//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }

//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="icon" href="/logo.svg" />
//       </head>
//       <body className={`${workSans.variable} antialiased`}>
//         <NextIntlClientProvider>
//           <Layout>{children}</Layout>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/provider";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

const workSans = Work_Sans({
  variable: "--font-work-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "NFT-Marketplace",
  description: "Discover digital art & Collect NFTs",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 🟩 Tarjima faylini yuklash
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${workSans.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
