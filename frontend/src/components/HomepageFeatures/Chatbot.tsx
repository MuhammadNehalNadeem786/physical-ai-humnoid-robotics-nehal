"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaRegPaperPlane, FaRobot } from "react-icons/fa";
import { RotateCcw, X, Maximize2, Minimize2 } from "lucide-react";
import ThreeDotBounce from "./ThreeDotBounce";
import { marked } from "marked";
import sanitizeInput from "../utils/sanitizeInput";
import { useChat } from "../context/chatContext";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./AIAssistantWidget.css";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

export default function AIAssistantWidget() {
  const { siteConfig: { customFields } } = useDocusaurusContext();
  const { isOpen, setIsOpen, draftText, clearDraftText } = useChat();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLarge, setIsLarge] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "What are the hardware requirements for the Sim Rig?",
    "Tell me about the Capstone Project.",
    "What topics are covered in Module 3?",
  ];

  // Auto-focus + pre-fill draft text when chat opens
  useEffect(() => {
    if (isOpen && draftText) {
      setInput(draftText);
      clearDraftText();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, draftText, clearDraftText]);

  // Scroll to bottom every time messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text?: string) => {
    const messageText = (text || input).trim();
    if (!messageText || isLoading) return;

    const userMsg: ChatMessage = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setShowWelcome(false);

    try {
      const res = await fetch("https://textbook-backend.vercel.app/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      const botReply = data.response || data.text || data.message || "I'm not sure how to respond.";

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-widget-button fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Open AI Assistant"
      >
        <FaRobot size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <>
          <div className="ai-backdrop" onClick={() => setIsOpen(false)} />

          <div className={`ai-chat-container ${isLarge ? "large" : "normal"}`}>
            {/* Header */}
            <div className="ai-header">
              <div className="flex items-center gap-3">
                <div className="ai-avatar-container">
                  <FaRobot className="ai-avatar-icon" />
                  <div className="ai-status-dot" />
                </div>
                <div>
                  <h2 className="ai-title">AI Assistant</h2>
                  <p className="ai-subtitle text-sm">
                    {isLoading ? "Thinking..." : "Ready to help"}
                  </p>
                </div>
              </div>

              <div className="ai-controls">
                <button onClick={() => { setMessages([]); setShowWelcome(true); }} className="ai-control-btn" title="New chat">
                  <RotateCcw size={18} />
                </button>
                <button
                  onClick={() => setIsLarge(!isLarge)}
                  className="ai-control-btn max-sm:hidden"
                >
                  {isLarge ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="ai-control-btn">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area - THIS IS THE MOST IMPORTANT PART */}
            <div className="ai-body">
              <div className="ai-messages-area">
                {showWelcome && messages.length === 0 ? (
                  <div className="ai-welcome">
                    <FaRobot size={50} className="text-blue-600 mb-4" />
                    <p className="text-center text-gray-600 mb-6">
                      Hi! Ask me anything or select text on the page!
                    </p>
                    <div className="space-y-2">
                      {suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(q)}
                          className="ai-suggestion-btn"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-3`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-800"
                            } ${msg.role === "user" ? "rounded-br-none" : "rounded-bl-none"}`}
                        >
                          {msg.role === "bot" ? (
                            <div
                              className="prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
                            />
                          ) : (
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex justify-start mb-3">
                        <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                          <ThreeDotBounce />
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="ai-input-area">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(sanitizeInput(e.target.value))}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="ai-input"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                className="ai-send-btn"
              >
                <FaRegPaperPlane size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}