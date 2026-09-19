import type { Metadata } from "next";
import "./globals.css";
const base = process.env.NODE_ENV === "production" ? "/portfolio" : "";
export const metadata: Metadata = {
  metadataBase: new URL("https://kritikaa-srivastavaa.github.io/portfolio/"),
  title: "Kritika Srivastava — Software Engineer",
  description:
    "Software engineer with Microsoft experience, building reliable backend and distributed systems, Android experiences and AI-enabled products. Explore SignalForge and ReEntry.",
  alternates: {
    canonical: "https://kritikaa-srivastavaa.github.io/portfolio/",
  },
  openGraph: {
    title: "Kritika Srivastava — Software Engineer",
    description:
      "Reliable systems. Thoughtful software. Selected work across distributed systems, Android and AI-enabled products.",
    url: "https://kritikaa-srivastavaa.github.io/portfolio/",
    siteName: "Kritika Srivastava",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kritika Srivastava — Software Engineer",
    description: "Reliable systems. Thoughtful software. Ex-Microsoft.",
  },
  icons: { icon: `${base}/icon.svg` },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
