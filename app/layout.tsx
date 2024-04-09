import type { Metadata } from "next";
import { Lexend as NextLexend } from "next/font/google"; // Renamed import to resolve conflict
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "@/components/AiComponents/Providers";

const Lexend = NextLexend({ subsets: ["latin"] }); // Renamed variable to resolve conflict

export const metadata: Metadata = {
  title: "Dealo Group Incorporation",
  description: "A Multinational Business Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${Lexend.className} auth_page`}>
          <Provider>
            <Toaster />
            {children}
          </Provider>
        </body>
      </SessionProvider>
    </html>
  );
}
