"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, MessageSquare, Check, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 animate-pulse" />
              
              {/* Modal content */}
              <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 left-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-gradient mb-2">أرسل رسالة</h3>
                  <p className="text-white/60 text-sm">سأرد عليك في أقرب وقت ممكن</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="الاسم"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 text-right placeholder:text-white/30 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 text-right placeholder:text-white/30 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute right-4 top-4 text-white/40 w-5 h-5" />
                    <textarea
                      placeholder="رسالتك..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 text-right placeholder:text-white/30 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                      status === "success"
                        ? "bg-green-500 text-white"
                        : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25"
                    }`}
                  >
                    {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                    {status === "success" && <Check className="w-5 h-5" />}
                    {status === "idle" && <Send className="w-5 h-5" />}
                    {status === "error" && "حدث خطأ، حاول مرة أخرى"}
                    {status === "loading" && "جاري الإرسال..."}
                    {status === "success" && "تم الإرسال بنجاح!"}
                    {status === "idle" && "إرسال الرسالة"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
