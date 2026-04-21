import type { Metadata } from "next";
import { Ubuntu } from "next/font/google"; // Import Ubuntu
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure the Ubuntu font
const ubuntu = Ubuntu({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

// app/layout.tsx
// app/layout.tsx
export const metadata = {
  title: 'Subham Sahoo',
  description: '3D & Graphic Designer',
  icons: {
    // This looks into your 'public' folder for the file
    icon: '/logop.png', 
    // Recommended: add this so it looks good on iPhones when bookmarked
    apple: '/logo.png', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* bg-black: Makes the whole site black
         text-white: Makes all default text white
      */}
      <body className={`${ubuntu.className} bg-black text-white antialiased`}>
        <Navbar />
        <main className="pt-20 md:pt-28 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}