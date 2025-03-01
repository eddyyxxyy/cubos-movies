import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cookies } from "next/headers";
import { THEME_COOKIE_NAME } from "@/lib/constants";
import { TThemes } from "@/@types";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1.0,
    viewportFit: "cover",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fdfcfd" },
      { media: "(prefers-color-scheme: dark)", color: "#121113" },
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get(encodeURIComponent(THEME_COOKIE_NAME))?.value as TThemes;

  return (
    <html lang="pt-br" className={theme}>
      <body
        className={
          `${montserrat.variable} ${inter.variable} ${roboto.variable} antialiased min-h-dvh grid grid-rows-[auto_1fr_auto]`
        }
      >
        <Header.Root>
          <Header.Logo />
          <Header.ThemeToggler initialTheme={theme} />
        </Header.Root>
        {children}
        <Footer />
      </body>
    </html>
  );
}
