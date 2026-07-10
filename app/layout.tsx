import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ContactModalProvider } from "@/components/contact/contact-modal-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ailiteracybrasil.com.br";

export const metadata: Metadata = {
  title: "AI Literacy Brasil",
  description:
    "Educação prática em Inteligência Artificial para profissionais, empresas e empreendedores.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "AI Literacy Brasil",
    description:
      "Educação prática em Inteligência Artificial para profissionais, empresas e empreendedores.",
    url: siteUrl,
    siteName: "AI Literacy Brasil",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Literacy Brasil",
    description:
      "Educação prática em Inteligência Artificial para profissionais, empresas e empreendedores.",
  },
  icons: {
    icon: "/icon-brain.png",
    apple: "/icon-brain.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Pular para o conteúdo
        </a>
        <ContactModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
