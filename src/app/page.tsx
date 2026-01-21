"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, Github, Linkedin, Mail, MapPin, GraduationCap, Building2, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/50 relative z-10"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center lg:text-right flex-1">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-lg mb-4"
              >
                // مرحباً، أنا
              </motion.p>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold mb-4 gradient-text"
              >
                {siteConfig.nameAr}
              </motion.h1>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-text-secondary mb-6 font-mono"
              >
                {siteConfig.title}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-text-secondary text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                {siteConfig.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href="/projects" className="btn-primary flex items-center gap-2">
                  <span>عرض المشاريع</span>
                  <ArrowLeft size={18} />
                </Link>
                <Link href="/contact" className="btn-outline flex items-center gap-2">
                  <span>تواصل معي</span>
                  <Mail size={18} />
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8 justify-center lg:justify-start"
              >
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Github size={22} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
                >
                  <Mail size={22} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-darker/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: siteConfig.stats.yearsExperience, label: "سنوات الخبرة", icon: Calendar },
              { value: siteConfig.stats.projects, label: "مستودع GitHub", icon: Github },
              { value: siteConfig.stats.languages, label: "لغة برمجة", icon: Building2 },
              { value: siteConfig.stats.mainProjects, label: "مشروع رئيسي", icon: GraduationCap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Location */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">الموقع</h3>
                  <p className="text-text-secondary">{siteConfig.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">التعليم</h3>
                  <p className="text-text-secondary">{siteConfig.education.degree}</p>
                  <p className="text-text-muted text-sm">{siteConfig.education.university}</p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">الخبرة</h3>
                  <p className="text-text-secondary">{siteConfig.experience.years} سنوات</p>
                  <p className="text-text-muted text-sm">{siteConfig.experience.period}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
