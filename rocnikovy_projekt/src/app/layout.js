import "./globals.css";
import { Cinzel } from "next/font/google";
import Preloader from "../components/Preloader";
import ResponsiveWrapper from "../components/ResponsiveWrapper";
import { GameStateProvider } from "../components/GameStateContext";

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
        <GameStateProvider>
          <Preloader>
            <ResponsiveWrapper>
              {children}
            </ResponsiveWrapper>
          </Preloader>
        </GameStateProvider>
      </body>
    </html>
  );
}
