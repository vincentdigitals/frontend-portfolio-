import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omoseebi Vincent | Frontend Developer",
  description: "Frontend developer building useful, product-minded web experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
