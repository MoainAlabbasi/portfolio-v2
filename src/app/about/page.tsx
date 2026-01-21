"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  User, 
  Sparkles, 
  History,
  Brain,
  Lightbulb,
  Rocket,
  Zap,
  Heart,
  GraduationCap,
  Calendar,
  Building2,
  Target
} from "lucide-react";
import { siteConfig, aboutData } from "@/lib/config";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";

const tabs = [
  { id: "about", label: "من أنا؟", icon: User },
  { id: "specialties", label: "ما يميزني", icon: Sparkles },
  { id: "journey", label: "رحلتي", icon: History },
];

const specialtyIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "🧠": Brain,
  "💡": Lightbulb,
  "🚀": Rocket,
  "⚡": Zap,
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen py-8 px-4 lg:px-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-8">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              نبذة عني
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
              تعرف على رحلتي في عالم التقنية والبرمجة
            </p>
          </div>
        </FadeInUp>

        {/* Profile Card */}
        <FadeInUp delay={0.1}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow opacity-75" style={{ animationDuration: '6s' }} />
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.nameAr}
                  fill
                  className="rounded-full object-cover border-2 border-bg-dark relative z-10"
                />
              </div>
              <div className="text-center sm:text-right flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                  {siteConfig.nameAr}
                </h2>
                <p className="text-primary font-medium mb-3">{siteConfig.titleAr}</p>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {aboutData.intro}
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Tab Navigation */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-bg-dark"
                    : "bg-bg-card border border-border text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* Tab Content */}
      <section className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {/* من أنا؟ */}
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Who Am I */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <User className="w-5 h-5 text-bg-dark" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{aboutData.whoAmI.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  {aboutData.whoAmI.content}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aboutData.whoAmI.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-bg-darker/50 rounded-xl"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-text-primary text-sm sm:text-base">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <TiltCard glowColor="cyan">
                  <div className="text-center py-4">
                    <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-text-muted mb-1">التعليم</p>
                    <p className="text-sm font-semibold">سنة رابعة IT</p>
                  </div>
                </TiltCard>
                <TiltCard glowColor="purple">
                  <div className="text-center py-4">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <p className="text-xs text-text-muted mb-1">التخرج</p>
                    <p className="text-sm font-semibold">2025-2026</p>
                  </div>
                </TiltCard>
                <TiltCard glowColor="green">
                  <div className="text-center py-4">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <p className="text-xs text-text-muted mb-1">الخبرة</p>
                    <p className="text-sm font-semibold">3+ سنوات</p>
                  </div>
                </TiltCard>
                <TiltCard glowColor="orange">
                  <div className="text-center py-4">
                    <Target className="w-6 h-6 mx-auto mb-2 text-orange-400" />
                    <p className="text-xs text-text-muted mb-1">المشاريع</p>
                    <p className="text-sm font-semibold">31+ مستودع</p>
                  </div>
                </TiltCard>
              </div>

              {/* Passions */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">الشغف</h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {aboutData.passions.map((passion, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-darker/50 border border-border rounded-full text-xs sm:text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {passion}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ما يميزني */}
          {activeTab === "specialties" && (
            <motion.div
              key="specialties"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {aboutData.specialties.map((specialty, index) => {
                  const IconComponent = specialtyIcons[specialty.icon] || Sparkles;
                  const colors = [
                    "from-cyan-500 to-blue-500",
                    "from-purple-500 to-pink-500",
                    "from-green-500 to-emerald-500",
                    "from-orange-500 to-amber-500",
                  ];
                  
                  return (
                    <StaggerItem key={index}>
                      <TiltCard glowColor={["cyan", "purple", "green", "orange"][index]}>
                        <div className="p-6">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold mb-3">{specialty.title}</h3>
                          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                            {specialty.description}
                          </p>
                        </div>
                      </TiltCard>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          )}

          {/* رحلتي */}
          {activeTab === "journey" && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <History className="w-5 h-5 text-bg-dark" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">رحلتي المهنية</h3>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute right-4 sm:right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                  <div className="space-y-6 sm:space-y-8">
                    {aboutData.journey.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="relative pr-12 sm:pr-16"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute right-0 top-0 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-bg-card border-2 border-primary flex items-center justify-center z-10">
                          <span className="text-[10px] sm:text-xs font-bold text-primary">{item.year}</span>
                        </div>

                        {/* Content */}
                        <div className="bg-bg-darker/50 rounded-xl p-4 sm:p-5 border border-border hover:border-primary/50 transition-colors">
                          <h4 className="text-base sm:text-lg font-bold text-primary mb-2">{item.title}</h4>
                          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
