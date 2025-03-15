import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import FAQsScript from "@/components/FAQs/FAQsScript.js";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Guiderr.ai",
  description: "Guiderr.ai Website",
};

const fontInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontInter.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
