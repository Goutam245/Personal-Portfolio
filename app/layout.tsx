import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goutam Roy - Frontend Engineer & Technical Leader",
  description: "Award-winning Frontend Architect with 2+ years building enterprise-scale applications. Ready for Staff Engineer trajectory at top-tier technology companies.",
  keywords: "Frontend Engineer, React Developer, Technical Leader, Software Engineer, Full Stack Developer",
  authors: [{ name: "Goutam Roy" }],
  openGraph: {
    title: "Goutam Roy - Frontend Engineer & Technical Leader",
    description: "Award-winning Frontend Architect with 2+ years building enterprise-scale applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goutam Roy - Frontend Engineer & Technical Leader",
    description: "Award-winning Frontend Architect with 2+ years building enterprise-scale applications",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}