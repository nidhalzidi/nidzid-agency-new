import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";

// Optimize font loading with display swap for better LCP
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B4332",
};

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
  metadataBase: new URL("https://nidzid.site"),
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
    url: "https://nidzid.site",
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
  // Performance: Reduce unnecessary data fetching
  other: {
    "X-DNS-Prefetch-Control": "on",
    "X-Content-Type-Options": "nosniff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/nidzid-logo.png" />
        <link rel="apple-touch-icon" href="/nidzid-logo.png" />
        <meta name="theme-color" content="#1B4332" />
        
        {/* Preload critical images for LCP */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero-image.png" 
          fetchPriority="high"
        />
        
        {/* Critical inline styles for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for initial render */
              *,*::before,*::after{box-sizing:border-box}
              html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
              body{margin:0;font-family:var(--font-inter),system-ui,-apple-system,sans-serif;background:#fff;color:#1B4332;-webkit-font-smoothing:antialiased}
              .hero-section{min-height:70vh;background:linear-gradient(135deg,#1B4332 0%,#2D6A4F 100%)}
              .nav-bar{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(10px)}
              @media(max-width:768px){.hero-section{min-height:60vh}}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
