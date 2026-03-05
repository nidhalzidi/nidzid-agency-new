import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NidZid Agency | Halal Influencer Marketing Agency",
  description: "Connect with Muslim consumers authentically through halal influencer marketing. We help Islamic brands reach the $2 trillion global Muslim consumer market through authentic influencer partnerships and Shariah-compliant marketing strategies.",
  keywords: [
    "halal marketing",
    "Muslim influencers", 
    "Islamic marketing",
    "halal advertising",
    "influencer marketing agency",
    "Shariah compliant marketing",
    "halal brand marketing",
    "Muslim consumer market",
    "Islamic finance marketing",
    "halal food marketing",
    "modest fashion marketing",
    "Muslim travel marketing"
  ],
  authors: [{ name: "NidZid Agency" }],
  creator: "NidZid Agency",
  publisher: "NidZid Agency",
  metadataBase: new URL("https://nidzid-halal-agency.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-SA": "/?lang=ar",
      "fr-FR": "/?lang=fr",
      "ms-MY": "/?lang=ms",
      "id-ID": "/?lang=id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "fr_FR", "ms_MY", "id_ID"],
    url: "https://nidzid-halal-agency.vercel.app",
    siteName: "NidZid Agency",
    title: "NidZid Agency | Halal Influencer Marketing Agency",
    description: "Connect with Muslim consumers authentically through halal influencer marketing. We help Islamic brands reach the $2 trillion global Muslim consumer market.",
    images: [
      {
        url: "/nidzid-logo.png",
        width: 1200,
        height: 630,
        alt: "NidZid Agency - Halal Influencer Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NidZid Agency | Halal Influencer Marketing Agency",
    description: "Connect with Muslim consumers authentically through halal influencer marketing.",
    images: ["/nidzid-logo.png"],
    creator: "@nidzid_agency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nidzid-logo.png" />
        <link rel="apple-touch-icon" href="/nidzid-logo.png" />
        <meta name="theme-color" content="#1B4332" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
// Force redeploy v2 - updated translations - Thu Mar  5 06:19:38 UTC 2026
