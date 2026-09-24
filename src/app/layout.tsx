import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omoseebi Vincent | Frontend Developer",
  description: "Frontend developer building useful, product-minded web experiences.",
  icons: {
    icon: "/portrait.jpg",
    shortcut: "/portrait.jpg",
    apple: "/portrait.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
