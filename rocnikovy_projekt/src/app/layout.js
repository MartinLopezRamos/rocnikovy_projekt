import "./globals.css";
import { Cinzel } from "next/font/google";
import Preloader from "../components/Preloader";
import ResponsiveWrapper from "../components/ResponsiveWrapper";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Mozky jako houby",
  description: "Ultimátní dobrodružství velkého Bolka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={`${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050810]">
        <Preloader>
          <ResponsiveWrapper>
            {children}
          </ResponsiveWrapper>
        </Preloader>
      </body>
    </html>
  );
}
