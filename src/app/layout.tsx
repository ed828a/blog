import { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blog in Next13.4.4",
    description: "Blog in next.js 13.4.4",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
