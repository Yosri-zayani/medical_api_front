// components/ChatbotCard.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useChatbot } from "@/app/context/ChatbotContext";

interface Message {
  text: string;
  isUser: boolean;
}

export function ChatbotCard() {
  const { isChatbotOpen } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      return;
    }

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Fake API interaction (replace with your actual API call when ready)
    if (input.toLowerCase().includes("fever") && input.toLowerCase().includes("cough")) {
      setTimeout(() => {
        const botMessage = {
          text: `Based on your symptoms of fever and cough, you might have a common cold or the flu. I recommend seeing Dr. Wafa Kefi (Traumatology). She is available Monday, Tuesday, and Wednesday from 1:00 PM to 4:00 PM. If your fever is high or you have difficulty breathing, please seek immediate medical attention.`,
          isUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        const botMessage = {
          text: "I'm still learning! Please provide more details about your symptoms, including when they started, any other symptoms you have, etc.",
          isUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    }
  };

  if (!isChatbotOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-16 right-4 z-50 w-[450px] max-h-[600px]">
      <Card className="w-full h-full flex flex-col bg-white">
        <CardHeader>
          <CardTitle>Medical Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-[calc(100vh-250px)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}