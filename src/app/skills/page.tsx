"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, Database, Brain, Cloud, Smartphone, Paintbrush, Wrench } from "lucide-react";
import { skillsData } from "@/lib/config";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
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
  languages: "from-cyan-500 to-blue-500",
  frontend: "from-pink-500 to-rose-500",
  backend: "from-green-500 to-emerald-500",
  database: "from-orange-500 to-amber-500",
  ai: "from-purple-500 to-violet-500",
  cloud: "from-sky-500 to-blue-500",
  mobile: "from-teal-500 to-cyan-500",
  design: "from-fuchsia-500 to-pink-500",
  tools: "from-slate-500 to-zinc-500",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">المهارات التقنية</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            التقنيات والأدوات التي أتقنها وأستخدمها في بناء المشاريع
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([key, category], index) => {
            const Icon = iconMap[category.icon];
            const gradient = categoryColors[key] || "from-primary to-secondary";

            return (
              <motion.div
                key={key}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-2xl overflow-hidden card-hover group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${gradient} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg">{category.title}</h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
                        className="skill-tag text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">الشهادات والدورات</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ICDL", description: "الرخصة الدولية لقيادة الحاسوب", icon: "🎓" },
              { title: "دورات اللغة الإنجليزية", description: "تحسين مهارات التواصل", icon: "🌍" },
              { title: "صيانة وبرمجة الهواتف", description: "شهادة معتمدة", icon: "📱" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <span className="text-4xl mb-4 block">{cert.icon}</span>
                <h3 className="font-semibold text-text-primary mb-2">{cert.title}</h3>
                <p className="text-text-secondary text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">اللغات</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="bg-bg-card border border-border rounded-2xl p-6 text-center w-48 card-hover">
              <span className="text-4xl mb-3 block">🇾🇪</span>
              <h3 className="font-semibold text-text-primary">العربية</h3>
              <p className="text-primary text-sm mt-1">اللغة الأم</p>
              <div className="mt-3 h-2 bg-bg-darker rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-full" />
              </div>
            </div>
            <div className="bg-bg-card border border-border rounded-2xl p-6 text-center w-48 card-hover">
              <span className="text-4xl mb-3 block">🇬🇧</span>
              <h3 className="font-semibold text-text-primary">الإنجليزية</h3>
              <p className="text-secondary text-sm mt-1">جيد</p>
              <div className="mt-3 h-2 bg-bg-darker rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-accent w-3/4" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Methodologies */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">منهجيات العمل</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {["Agile", "Scrum", "Kanban", "Waterfall"].map((method, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl px-6 py-3"
              >
                <span className="text-primary font-mono">{method}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
