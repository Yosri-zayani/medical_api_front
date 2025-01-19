// components/ChatbotButton.tsx
"use client";

import { Button } from "./ui/button";
import { useChatbot } from "@/app/context/ChatbotContext";
import { MessageSquare } from "lucide-react"; // Changed Import to MessageSquare

export function ChatbotButton() {
  const { toggleChatbot } = useChatbot();

  return (
    <Button
      onClick={toggleChatbot}
      className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-md"
    >
      <MessageSquare className="h-5 w-5" /> {/* Changed to MessageSquare Icon */}
    </Button>
  );
}