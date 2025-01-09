import { Outfit, Inter, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], wieght: ["400", "500", "600", "700"]
});

const ovo = Inter({
  subsets: ["latin"], wieght: ["400"]
});

export const metadata = {
  title: "Portfolio - Hanlin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
