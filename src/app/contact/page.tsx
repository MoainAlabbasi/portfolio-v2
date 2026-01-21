"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Download, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("error");
      setErrorMessage("حدث خطأ في الاتصال");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">تواصل معي</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            هل لديك مشروع أو فكرة؟ دعنا نتحدث!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">معلومات التواصل</h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">البريد الإلكتروني</p>
                    <p className="text-text-primary font-medium">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">GitHub</p>
                    <p className="text-text-primary font-medium">MoainAlabbasi</p>
                  </div>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">LinkedIn</p>
                    <p className="text-text-primary font-medium">moainalabbasi</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">الموقع</p>
                    <p className="text-text-primary font-medium">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Download size={20} />
                تحميل السيرة الذاتية
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                احصل على نسخة من سيرتي الذاتية بصيغة PDF
              </p>
              <div className="flex gap-3">
                <a
                  href="/Moain_Alabbasi_CV_EN.pdf"
                  download
                  className="flex-1 btn-primary text-center text-sm py-3"
                >
                  English CV
                </a>
                <a
                  href="/Moain_Alabbasi_CV_AR.pdf"
                  download
                  className="flex-1 btn-outline text-center text-sm py-3"
                >
                  السيرة الذاتية (عربي)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">أرسل رسالة</h2>

              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">تم الإرسال بنجاح!</h3>
                  <p className="text-text-secondary mb-6">
                    شكراً لتواصلك. سأرد عليك في أقرب وقت.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline"
                  >
                    إرسال رسالة أخرى
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">الاسم</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="form-input"
                      placeholder="أدخل اسمك"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="form-input"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">الرسالة</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-danger bg-danger/10 p-3 rounded-lg">
                      <AlertCircle size={18} />
                      <span className="text-sm">{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        إرسال الرسالة
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
