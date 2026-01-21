"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Info,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MessageCircle,
  Download,
} from "lucide-react";
import { siteConfig, navLinks, contactInfo } from "@/lib/config";
import { ContactModal } from "./ContactModal";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Home,
  User,
  Code,
  FolderOpen,
  Info,
  Mail,
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : typeof window !== "undefined" && window.innerWidth < 1024 ? "100%" : 0,
        }}
        className={`fixed top-0 right-0 h-screen w-72 bg-bg-sidebar/95 backdrop-blur-xl border-l border-border z-50 flex flex-col lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-border">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-24 h-24 mx-auto mb-4"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-75 blur-sm" />
            <Image
              src="/images/profile.jpg"
              alt={siteConfig.name}
              fill
              className="rounded-full object-cover border-2 border-bg-dark relative z-10"
              priority
            />
            <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-green-500 rounded-full border-2 border-bg-sidebar z-20" />
          </motion.div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold gradient-text mb-1"
          >
            {siteConfig.nameAr}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-text-muted leading-relaxed"
          >
            {siteConfig.titleAr}
          </motion.p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              const isActive = pathname === link.href;

              return (
                <motion.li
                  key={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="px-4 pb-4">
          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-bg-dark font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <MessageCircle size={18} />
            <span>تواصل معي</span>
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="p-4 border-t border-border">
          <div className="flex justify-center gap-3">
            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href={contactInfo.cvAr}
              download
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Download size={18} />
            </motion.a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 text-center text-xs text-text-muted border-t border-border">
          <p>© 2024 {siteConfig.nameAr}</p>
        </div>
      </motion.aside>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
