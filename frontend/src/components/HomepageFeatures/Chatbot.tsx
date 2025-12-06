"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRegPaperPlane, FaRobot } from "react-icons/fa";
import { RotateCcw, X, Maximize2, Minimize2 } from "lucide-react";
import ThreeDotBounce from "./ThreeDotBounce";
import { marked } from "marked";
import sanitizeInput from "../utils/sanitizeInput";
import { useChat } from "../context/chatContext"; // <--- Import Context
import './AIAssistantWidget.css';import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface ChatMessage {
  role: string;
  text: string;
}

export default function AIAssistantWidget() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

  const { isOpen, setIsOpen, draftText, clearDraftText } = useChat();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLarge, setIsLarge] = useState(false);
  const [streamingReply, setStreamingReply] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // To focus input

  const suggestedQuestions = [
    "What are the hardware requirements for the Sim Rig?",
    "Tell me about the Capstone Project.",
    "What topics are covered in Module 3?",
  ];

  // --- LOGIC TO HANDLE PRE-FILLING TEXT ---
  useEffect(() => {
    if (draftText) {
      setInput(draftText); // 1. Put text in input
      clearDraftText();    // 2. Clear from context
      
      // 3. Focus the input field so user can type immediately
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); 
    }
  }, [draftText, clearDraftText]);
  // ----------------------------------------

  const scrollToBottom = () => {
    if (messagesEndRef.current && chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (messageText?: string) => {
    const messageToSend = messageText || input.trim();
    if (!messageToSend || isLoading) return;

    const newMessages = [...messages, { role: "user", text: messageToSend }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setShowWelcome(false);
    // console.log("backend url:", customFields.BACKEND_URL);

    try {
      const res = await fetch(`https://textbook-backend.vercel.app/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      const botReply = data.response || data.text || data.message || "No response received.";
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "❌ Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => sendMessage(question);
  
  const handleRefresh = () => {
    setMessages([]);
    setShowWelcome(true);
    setInput("");
  };
  const handleLarge = () => setIsLarge(!isLarge);
  const handleChatClick = (e) => e.stopPropagation();
  const handleChatWheel = (e) => e.stopPropagation();

  return (
    <main>
      {/* Floating Chat Button */}
      <button
        aria-label="Open AI Assistant Chat"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="ai-widget-button"
      >
        <FaRobot size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <>
          {/* Backdrop (Mobile only logic handled in CSS) */}
          <div
            onClick={() => setIsOpen(false)}
            className="ai-backdrop"
          />

          <div
            className={`ai-chat-container ${isLarge ? "large" : "normal"}`}
            onClick={handleChatClick}
            onWheel={handleChatWheel}
          >
            {/* Header */}
            <div className="ai-header">
              <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div className="ai-avatar-container">
                  <FaRobot className="ai-avatar-icon" />
                  <div className="ai-status-dot" />
                </div>
                <div className="ai-title-group">
                  <h2 className="ai-title">
                    AI Assistant
                  </h2>
                  <p className="ai-subtitle">
                    {isLoading ? (
                      <span className="thinking-text">Thinking...</span>
                    ) : (
                      "Ready to help"
                    )}
                  </p>
                </div>
              </div>

              <div className="ai-controls">
                <button
                  onClick={handleRefresh}
                  className="ai-control-btn refresh"
                  title="Clear Chat"
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={handleLarge}
                  className="ai-control-btn resize"
                  style={{ display: window.innerWidth > 640 ? 'flex' : 'none' }} 
                >
                  {isLarge ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="ai-control-btn close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="ai-body">
              <div
                ref={chatContentRef}
                onWheel={handleChatWheel}
                className="ai-messages-area"
              >
                {showWelcome && messages.length === 0 ? (
                  <div className="ai-welcome">
                    <div className="ai-welcome-icon">
                      <FaRobot size={40} />
                    </div>
                    <p className="ai-welcome-text">
                    Hi! Select any text on the page to ask about it, or type a question below!
                    </p>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="ai-suggestion-btn"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {messages.map((msg, ind) => (
                      <div
                        key={ind}
                        className={`message-row ${msg.role === "user" ? "user" : "bot"}`}
                      >
                        <div
                          className={`message-bubble ${msg.role === "user" ? "user" : "bot"}`}
                        >
                          {msg.role === "user" ? (
                            msg.text
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: marked.parse(msg.text),
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}

                    {isLoading && streamingReply && (
                      <div className="message-row bot">
                        <div className="message-bubble bot">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: marked(streamingReply),
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {isLoading && !streamingReply && (
                      <div className="message-row bot">
                        {/* Wrapper for padding to match bubble alignment */}
                        <div style={{ padding: '8px' }}>
                          <ThreeDotBounce />
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* Input Section */}
            <div className="ai-input-area">
              <input
                className="ai-input"
                placeholder="Ask me something..."
                value={input}
                onChange={(e) =>  setInput(sanitizeInput(e.target.value))}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading}
                className="ai-send-btn"
              >
                <FaRegPaperPlane className="ai-send-icon" />
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}