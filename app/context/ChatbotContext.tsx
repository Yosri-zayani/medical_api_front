// context/ChatbotContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface ChatbotContextType {
    isChatbotOpen: boolean;
    toggleChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType>({
   isChatbotOpen: false,
   toggleChatbot: () => {},
});

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <ChatbotContext.Provider value={{ isChatbotOpen, toggleChatbot }}>
            {children}
        </ChatbotContext.Provider>
    );
};

export const useChatbot = () => useContext(ChatbotContext);