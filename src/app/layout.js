import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata = {
  title: "Fapos West Africa",
  description: "Ground Water Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${Bebas.variable}`}>{children}</body>
    </html>
  );
}
