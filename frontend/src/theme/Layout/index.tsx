import React from "react";
import Layout from "@theme-original/Layout";
import AIAssistantWidget from "../../components/HomepageFeatures/Chatbot";
import SelectionTooltip from "@site/src/components/SelectionTooltip";
import { ChatProvider } from "../../components/context/chatContext";

export default function LayoutWrapper(props) {
  return (
    <>
      <ChatProvider>
        <Layout {...props} />
        <SelectionTooltip />
        <AIAssistantWidget />
      </ChatProvider>
    </>
  );
}