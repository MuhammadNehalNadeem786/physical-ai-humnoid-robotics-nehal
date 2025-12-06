import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  draftText: string | null;
  openWithText: (text: string) => void;
  clearDraftText: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState<string | null>(null);

  // Opens the chat and stages the text for the input field
  const openWithText = (text: string) => {
    setDraftText(text);
    setIsOpen(true);
  };

  const clearDraftText = () => {
    setDraftText(null);
  };

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, draftText, openWithText, clearDraftText }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}