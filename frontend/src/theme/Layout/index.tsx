import React from "react";
import Layout from "@theme-original/Layout";
import AIAssistantWidget from "../../components/HomepageFeatures/Chatbot";
import { ChatProvider } from "../../components/context/chatContext";

export default function LayoutWrapper(props) {
  return (
    <>
      <ChatProvider>
        <Layout {...props} />
        <AIAssistantWidget />
      </ChatProvider>
    </>
  );
}