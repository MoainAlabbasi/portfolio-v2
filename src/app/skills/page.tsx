"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Award, 
  Languages, 
  Workflow,
  Palette,
  Server,
  Database,
  Brain,
  Cloud,
  Smartphone,
  Paintbrush,
  Wrench,
  CheckCircle
} from "lucide-react";
import { skillsData } from "@/lib/config";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";

const tabs = [
  { id: "skills", label: "المهارات التقنية", icon: Code },
  { id: "certificates", label: "الشهادات والدورات", icon: Award },
  { id: "languages", label: "اللغات", icon: Languages },
  { id: "methodologies", label: "منهجيات العمل", icon: Workflow },
];

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Code,
  Palette,
  Server,
  Database,
  Brain,
  Cloud,
  Smartphone,
  Paintbrush,
  Wrench,
};

const categoryColors: { [key: string]: string } = {
  languages: "from-blue-500 to-cyan-500",
  frontend: "from-purple-500 to-pink-500",
  backend: "from-green-500 to-emerald-500",
  database: "from-orange-500 to-amber-500",
  ai: "from-violet-500 to-purple-500",
  cloud: "from-sky-500 to-blue-500",
  mobile: "from-rose-500 to-pink-500",
  design: "from-fuchsia-500 to-purple-500",
  tools: "from-slate-500 to-gray-500",
};

const certificates = [
  { name: "ICDL", description: "الرخصة الدولية لقيادة الحاسوب", year: "2020" },
  { name: "دورات اللغة الإنجليزية", description: "تحسين مهارات التواصل", year: "2021" },
  { name: "صيانة وبرمجة الهواتف", description: "شهادة معتمدة في صيانة الأجهزة", year: "2019" },
];

const languagesSpoken = [
  { name: "العربية", level: "اللغة الأم", percentage: 100, flag: "🇾🇪" },
  { name: "الإنجليزية", level: "جيد", percentage: 70, flag: "🇬🇧" },
];

const methodologies = [
  { name: "Agile", description: "منهجية مرنة للتطوير التكراري السريع" },
  { name: "Scrum", description: "إطار عمل لإدارة المشاريع بفعالية" },
  { name: "Kanban", description: "نظام مرئي لتتبع سير العمل" },
  { name: "Waterfall", description: "منهجية تسلسلية للمشاريع المحددة" },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("skills");

  const skillKeys = ['languages', 'frontend', 'backend', 'database', 'ai', 'cloud', 'mobile', 'design', 'tools'] as const;
  const skillCategories = skillKeys
    .filter(key => key in skillsData)
    .map((key) => ({
      key,
      data: (skillsData as unknown as Record<string, { title: string; icon: string; skills: unknown[] }>)[key]
    }));

  return (
    <div className="min-h-screen py-8 px-4 lg:px-8">
      {/* Header */}
      <section className="max-w-5xl mx-auto mb-8">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              المهارات
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
              مجموعة المهارات التقنية والشهادات التي اكتسبتها خلال رحلتي
            </p>
          </div>
        </FadeInUp>

        {/* Tab Navigation */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-bg-dark"
                    : "bg-bg-card border border-border text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* Tab Content */}
      <section className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {/* المهارات التقنية */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skillCategories.map(({ key, data }) => {
                  const IconComponent = categoryIcons[data.icon] || Code;
                  const colorClass = categoryColors[key] || "from-gray-500 to-slate-500";
                  
                  return (
                    <StaggerItem key={key}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card rounded-2xl overflow-hidden h-full"
                      >
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${colorClass} p-4`}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-bold text-white text-base sm:text-lg">{data.title}</h3>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="p-4 sm:p-5">
                          {key === "languages" && Array.isArray(data.skills) && typeof data.skills[0] === 'object' ? (
                            // Programming Languages with progress bars
                            <div className="space-y-3">
                              {(data.skills as { name: string; level: number; color: string }[]).slice(0, 5).map((skill, idx) => (
                                <div key={idx}>
                                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                                    <span className="text-text-primary">{skill.name}</span>
                                    <span className="text-text-muted">{skill.level}%</span>
                                  </div>
                                  <div className="h-1.5 bg-bg-darker rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1, delay: idx * 0.1 }}
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: skill.color }}
                                    />
                                  </div>
                                </div>
                              ))}
                              {data.skills.length > 5 && (
                                <p className="text-xs text-text-muted text-center mt-2">
                                  +{data.skills.length - 5} لغات أخرى
                                </p>
                              )}
                            </div>
                          ) : (
                            // Other skills as tags
                            <div className="flex flex-wrap gap-2">
                              {(data.skills as string[]).map((skill, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.03 }}
                                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-bg-darker/50 border border-border rounded-lg text-xs sm:text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          )}

          {/* الشهادات والدورات */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {certificates.map((cert, certIdx) => (
                  <StaggerItem key={certIdx}>
                    <TiltCard glowColor={["cyan", "purple", "green"][certIdx % 3]}>
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                        <p className="text-text-secondary text-sm mb-3">{cert.description}</p>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {cert.year}
                        </span>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}

          {/* اللغات */}
          {activeTab === "languages" && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {languagesSpoken.map((lang, langIdx) => (
                  <StaggerItem key={langIdx}>
                    <TiltCard glowColor={langIdx === 0 ? "green" : "cyan"}>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{lang.flag}</span>
                          <div>
                            <h3 className="text-xl font-bold">{lang.name}</h3>
                            <p className="text-text-muted text-sm">{lang.level}</p>
                          </div>
                        </div>
                        <div className="h-2 bg-bg-darker rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${lang.percentage}%` }}
                            transition={{ duration: 1, delay: langIdx * 0.2 }}
                            className={`h-full rounded-full ${
                              langIdx === 0 
                                ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                                : "bg-gradient-to-r from-cyan-500 to-blue-500"
                            }`}
                          />
                        </div>
                        <p className="text-left text-sm text-text-muted mt-2">{lang.percentage}%</p>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}

          {/* منهجيات العمل */}
          {activeTab === "methodologies" && (
            <motion.div
              key="methodologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {methodologies.map((method, methodIdx) => {
                  const colors = [
                    "from-cyan-500 to-blue-500",
                    "from-purple-500 to-pink-500",
                    "from-green-500 to-emerald-500",
                    "from-orange-500 to-amber-500",
                  ];
                  
                  return (
                    <StaggerItem key={methodIdx}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card rounded-2xl p-6 flex items-start gap-4"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[methodIdx]} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                          <p className="text-text-secondary text-sm">{method.description}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
