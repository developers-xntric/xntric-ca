import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Xntric",
  description: "The Leading Tech Company",
  alternates: {
    canonical: 'https://xntric.ca',
    languages: {
      'en-AE': 'https://xntric.ae',
      'en-CA': 'https://xntric.ca',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow"></meta>
      <head>
        <link rel="alternate" href="https://xntric.ae" hrefLang="en-AE" />
<link rel="alternate" href="https://xntric.ca" hrefLang="en-CA" />
<link rel="alternate" href="https://xntric.ca" hrefLang="x-default" />
<link rel="canonical" href="https://xntric.ca" />
      </head>
      {/* ✅ Google Tag Manager */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMNKB697');
            `,
        }}
      />

      {/* AHREF Script */}

      <script src="https://analytics.ahrefs.com/analytics.js" data-key="B5shWJuCtNuL08s0XSID6A"
        async>
      </script>

      <body className={`bg-black overflow-x-hidden`}>
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMNKB697"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Navbar position="bottom" />
        <Footer />
      </body>
    </html>
  );
}
