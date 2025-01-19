import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChatbotProvider } from "@/app/context/ChatbotContext";
import { ChatbotButton } from "@/components/ChatbotButton";
import { ChatbotCard } from "@/components/ChatbotCard";
import "@/app/globals.css"; // Import global styles

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-blue-50 font-sans">
        <ChatbotProvider>
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <ChatbotButton />
            <ChatbotCard />
            <Footer />
        </ChatbotProvider>
      </body>
    </html>
  );
}
