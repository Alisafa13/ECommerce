import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata } from "@/lib/siteMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:new URL(siteMetadata.siteUrl),
  title: {
    template:`%s | ${siteMetadata.title}`,
    default:siteMetadata.title
  },
  description: siteMetadata.description,
  openGraph:{
    title:siteMetadata.title,
    description:siteMetadata.description,
    url:siteMetadata.siteUrl,
    siteName:siteMetadata.title,
    images:[siteMetadata.socialBanner],
    locale:'en-US',
    type:'website'
    },
    robots:{
      index:true,
      follow:true,
      googleBot:{
        index:true,
        follow:true,
        noimageindex:true,
        'max-video-preview':-1,
        'max-image-preview':'large',
        'max-snippet':-1
      }
    },
    twitter:{
      card:'summary_large_image',
      title:siteMetadata.title,
      images:[siteMetadata.socialBanner]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
