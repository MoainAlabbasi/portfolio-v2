"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { botCommands, siteConfig } from "@/lib/config";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: `مرحباً! أنا مساعد ${siteConfig.nameAr} الافتراضي.\n\nاكتب /help لرؤية الأوامر المتاحة، أو اسألني أي سؤال!`,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Process command or generate response
    setTimeout(() => {
      let response = "";
      const lowerInput = input.toLowerCase().trim();

      // Check for commands
      const command = botCommands.find((cmd) => lowerInput === cmd.command);
      if (command) {
        response = command.response;
      } else if (lowerInput.includes("مرحبا") || lowerInput.includes("هلا") || lowerInput.includes("hi") || lowerInput.includes("hello")) {
        response = `أهلاً وسهلاً! كيف يمكنني مساعدتك؟`;
      } else if (lowerInput.includes("اسم") || lowerInput.includes("من انت") || lowerInput.includes("who")) {
        response = `أنا مساعد ${siteConfig.nameAr} الافتراضي. ${siteConfig.nameAr} هو ${siteConfig.titleAr}.`;
      } else if (lowerInput.includes("مهارات") || lowerInput.includes("skill")) {
        response = "يتقن معين العديد من التقنيات منها:\n• Python, JavaScript, TypeScript\n• React, Next.js, Django\n• AI/ML, Prompt Engineering\n• والمزيد... زر صفحة المهارات لمعرفة المزيد!";
      } else if (lowerInput.includes("مشاريع") || lowerInput.includes("project")) {
        response = "لدى معين 6+ مشاريع رئيسية و 31 مستودع على GitHub. أبرزها:\n• SACM-System - نظام أكاديمي ذكي\n• نظام إدارة محلات الإلكترونيات\n• تطبيق الدخل والمصروفات\nزر صفحة المشاريع لمعرفة المزيد!";
      } else if (lowerInput.includes("تواصل") || lowerInput.includes("contact") || lowerInput.includes("ايميل") || lowerInput.includes("email")) {
        response = `للتواصل مع معين:\nالبريد: ${siteConfig.email}\nGitHub: MoainAlabbasi\nLinkedIn: moainalabbasi\n\nأو استخدم نموذج التواصل في الموقع!`;
      } else if (lowerInput.includes("cv") || lowerInput.includes("سيرة")) {
        response = "يمكنك تحميل السيرة الذاتية من صفحة التواصل:\n• النسخة الإنجليزية\n• النسخة العربية";
      } else if (lowerInput.includes("شكر") || lowerInput.includes("thank")) {
        response = "عفواً! سعيد بمساعدتك";
      } else {
        response = `شكراً لرسالتك!\n\nللحصول على معلومات محددة، جرب الأوامر:\n/about - نبذة عني\n/skills - المهارات\n/projects - المشاريع\n/contact - التواصل\n/help - كل الأوامر`;
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        type: "bot",
        text: response,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-bg-dark shadow-lg ${
          isOpen ? "hidden" : ""
        }`}
        style={{ boxShadow: "0 0 30px var(--color-glow)" }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-bg-card border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-bg-sidebar">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-bg-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">مساعد معين</h3>
                  <p className="text-xs text-accent">متصل الآن</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-bg-card flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "bot"
                        ? "bg-gradient-to-r from-primary to-secondary"
                        : "bg-secondary"
                    }`}
                  >
                    {message.type === "bot" ? (
                      <Bot size={16} className="text-bg-dark" />
                    ) : (
                      <User size={16} className="text-bg-dark" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] ${
                      message.type === "bot" ? "bot-message" : "user-message"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-bg-sidebar">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="اكتب رسالتك أو /help..."
                  className="flex-1 px-4 py-3 bg-bg-darker border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-bg-dark hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
