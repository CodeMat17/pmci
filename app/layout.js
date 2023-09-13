import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";

export const metadata = {
  title: "PMCI | Portal",
  description: "PMCI is an international organization that is into human capacity building and development of communities and people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavHeader />
        <main className="bg-purple-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
