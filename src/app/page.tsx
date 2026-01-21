"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Linkedin, Mail, MapPin, GraduationCap, Building2, Calendar, Code, FolderOpen, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";

const stats = [
  { icon: Calendar, value: siteConfig.stats.yearsExperience, label: "سنوات الخبرة", color: "cyan" },
  { icon: Code, value: siteConfig.stats.languages, label: "لغة برمجة", color: "purple" },
  { icon: FolderOpen, value: siteConfig.stats.mainProjects, label: "مشروع رئيسي", color: "green" },
  { icon: Github, value: siteConfig.stats.projects, label: "مستودع GitHub", color: "orange" },
];

const infoCards = [
  { 
    icon: MapPin, 
    title: "الموقع", 
    value: siteConfig.location,
    color: "from-cyan-500 to-blue-500"
  },
  { 
    icon: GraduationCap, 
    title: "التعليم", 
    value: siteConfig.education.degree,
    subValue: siteConfig.education.university,
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Building2, 
    title: "الخبرة", 
    value: `${siteConfig.experience.years} سنوات`,
    subValue: `${siteConfig.experience.period}`,
    color: "from-green-500 to-emerald-500"
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <FadeInUp>
              <motion.div 
                className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated border */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-md animate-pulse" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow" style={{ animationDuration: '8s' }} />
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.nameAr}
                  fill
                  className="rounded-full object-cover border-4 border-bg-dark relative z-10"
                  priority
                />
              </motion.div>
            </FadeInUp>

            {/* Greeting */}
            <FadeInUp delay={0.1}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-primary font-mono text-sm sm:text-base">{"//"}</span>
                <span className="text-text-secondary">مرحباً، أنا</span>
              </div>
            </FadeInUp>

            {/* Name */}
            <FadeInUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 gradient-text">
                {siteConfig.nameAr}
              </h1>
            </FadeInUp>

            {/* Title */}
            <FadeInUp delay={0.3}>
              <h2 className="text-base sm:text-lg lg:text-xl text-primary font-medium mb-6 font-mono">
                {siteConfig.title}
              </h2>
            </FadeInUp>

            {/* Description */}
            <FadeInUp delay={0.4}>
              <p className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed px-4">
                {siteConfig.description}
              </p>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2 min-w-[180px] justify-center"
                  >
                    <span>عرض المشاريع</span>
                    <ArrowLeft size={18} />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-2 min-w-[180px] justify-center"
                  >
                    <Sparkles size={18} />
                    <span>تعرف علي</span>
                  </motion.button>
                </Link>
              </div>
            </FadeInUp>

            {/* Social Links */}
            <FadeInUp delay={0.6}>
              <div className="flex items-center justify-center gap-4">
                <motion.a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Mail size={22} />
                </motion.a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-bg-darker/50">
        <div className="container mx-auto max-w-4xl">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <TiltCard glowColor={stat.color}>
                  <div className="text-center py-4 sm:py-6">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">+{stat.value}</div>
                    <div className="text-xs sm:text-sm text-text-muted">{stat.label}</div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((card, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="info-card flex items-center gap-4 p-4 sm:p-5"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-text-muted text-xs sm:text-sm mb-1">{card.title}</p>
                    <p className="font-semibold text-text-primary text-sm sm:text-base truncate">{card.value}</p>
                    {card.subValue && (
                      <p className="text-xs text-text-muted mt-0.5 truncate">{card.subValue}</p>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
