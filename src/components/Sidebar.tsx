"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-all"
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
        className={`fixed top-0 right-0 h-screen w-72 bg-bg-sidebar border-l border-border z-50 flex flex-col lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-border">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-28 h-28 mx-auto mb-4"
          >
            <Image
              src="/images/profile.jpg"
              alt={siteConfig.name}
              fill
              className="rounded-full object-cover border-3 border-primary pulse-glow"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-primary mb-1"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-text-secondary leading-relaxed"
          >
            {siteConfig.title}
          </motion.p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-4">
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
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-border">
          <div className="flex justify-center gap-4">
            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
