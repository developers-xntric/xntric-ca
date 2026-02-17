import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Xntric",
  description: "The Leading Tech Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex"></meta>

      {/* AHREF Script */}

      <script src="https://analytics.ahrefs.com/analytics.js" data-key="B5shWJuCtNuL08s0XSID6A"
        async>
      </script>


      <body className={`bg-black overflow-x-hidden`}>
        <Navbar />
        {children}
        <Navbar position="bottom" />
        <Footer />
      </body>
    </html>
  );
}
