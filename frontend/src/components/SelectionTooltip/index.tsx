import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { BsRobot } from "react-icons/bs";
import { useChat } from "../context/chatContext";

const tooltipStyle: React.CSSProperties = {
  position: "fixed",
  zIndex: 9999,
  background: "#1e1e2e",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "var(--ifm-font-family-base)",
};

export default function SelectionTooltip() {
  const { openWithText } = useChat();
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // 1. Show tooltip when user finishes selecting (Mouse Up)
    const handleMouseUp = () => {
      const selection = window.getSelection();
      
      // Only show if there is text and it's not just empty space
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        return; 
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Calculate position (centered above selection)
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10, 
      });
    };

    // 2. Hide tooltip immediately if selection is lost/cleared
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      // If selection is empty (collapsed), hide the tooltip
      if (!selection || selection.isCollapsed) {
        setPosition(null);
      }
    };

    // 3. Hide on scroll to prevent "ghost" floating buttons
    const handleScroll = () => setPosition(null);

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAsk = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    const selection = window.getSelection()?.toString();
    if (selection) {
      openWithText(selection);
      window.getSelection()?.removeAllRanges(); // Clear selection logic
      setPosition(null);
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {position && (
        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: -40, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{ ...tooltipStyle, left: position.x, top: position.y, transform: "translateX(-50%)" }}
          
          // CRITICAL: Prevent the click on the button itself from clearing the selection
          // before the onClick handler runs.
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleAsk}
        >
          <BsRobot size={16} color="#61dafb" />
          Ask AI
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
}