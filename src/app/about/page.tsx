"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Building2, Calendar, Award, Heart, Zap, Target, Brain, Lightbulb } from "lucide-react";
import { siteConfig } from "@/lib/config";

const highlights = [
  {
    icon: Brain,
    title: "التفكير التحليلي",
    description: "القدرة على تحليل المشكلات المعقدة وتفكيكها إلى أجزاء قابلة للحل",
  },
  {
    icon: Lightbulb,
    title: "الإبداع في الحلول",
    description: "تحويل الأفكار إلى حلول برمجية مبتكرة وفعالة",
  },
  {
    icon: Zap,
    title: "التعلم السريع",
    description: "القدرة على استيعاب التقنيات الجديدة وتطبيقها بسرعة",
  },
  {
    icon: Target,
    title: "العمل تحت الضغط",
    description: "الحفاظ على الإنتاجية والجودة في ظل المواعيد الضيقة",
  },
];

const timeline = [
  {
    year: "2019",
    title: "بداية المسيرة المهنية",
    description: "انضممت لشركة العباسي لتوليد الطاقة الكهربائية كمحاسب",
    icon: Building2,
  },
  {
    year: "2020",
    title: "الترقية للإدارة",
    description: "تطورت لأتولى مهام إدارية وتقنية متقدمة",
    icon: Award,
  },
  {
    year: "2021",
    title: "بداية رحلة البرمجة",
    description: "بدأت تعلم البرمجة وتطوير حلول للشركة",
    icon: Zap,
  },
  {
    year: "2022",
    title: "الجامعة + العمل",
    description: "التحقت بجامعة العلوم والتكنولوجيا - تخصص IT",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "التخصص في AI",
    description: "تعمقت في الذكاء الاصطناعي وهندسة البرومبتات",
    icon: Brain,
  },
  {
    year: "2025",
    title: "السنة الأخيرة",
    description: "مشروع التخرج SACM-System + التخرج المتوقع",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">نبذة عني</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            تعرف على رحلتي في عالم التقنية والبرمجة
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image & Quick Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-30" />
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.name}
                fill
                className="rounded-3xl object-cover border-2 border-border relative z-10"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{siteConfig.stats.yearsExperience}</p>
                <p className="text-text-secondary text-sm">سنوات الخبرة</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-secondary">{siteConfig.stats.mainProjects}</p>
                <p className="text-text-secondary text-sm">مشاريع رئيسية</p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-bg-card border border-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">من أنا؟</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  أنا <span className="text-primary font-semibold">{siteConfig.nameAr}</span>، طالب في السنة الرابعة (الأخيرة) 
                  في تخصص تقنية المعلومات بجامعة العلوم والتكنولوجيا في اليمن.
                </p>
                <p>
                  أمتلك خبرة عملية تتجاوز <span className="text-primary font-semibold">5 سنوات</span> في إدارة الأنظمة 
                  والحسابات وتطوير البرمجيات، حيث بدأت مسيرتي في شركة العباسي لتوليد الطاقة الكهربائية.
                </p>
                <p>
                  أتميز بالتفكير التحليلي والقدرة على تحويل المشكلات المعقدة إلى حلول عملية. 
                  متخصص في توظيف <span className="text-secondary font-semibold">الذكاء الاصطناعي</span> باحترافية 
                  وتصميم البرومبتات لتسهيل الحلول وإنشاء أنظمة متكاملة.
                </p>
                <p>
                  أعمل تحت الضغط بكفاءة عالية، وأتعلم بسرعة، ولدي شغف كبير بالتصميم الإبداعي وتجربة المستخدم.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">الموقع</p>
                  <p className="text-text-primary font-medium">{siteConfig.location}</p>
                </div>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">التخرج</p>
                  <p className="text-text-primary font-medium">{siteConfig.education.graduation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">ما يميزني</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">رحلتي</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 h-full w-0.5 bg-border" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <div className="bg-bg-card border border-border rounded-2xl p-6 card-hover">
                      <span className="text-primary font-mono text-sm">{item.year}</span>
                      <h3 className="font-semibold text-text-primary text-lg mt-1">{item.title}</h3>
                      <p className="text-text-secondary text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="w-12 h-12 bg-bg-card border-2 border-primary rounded-full flex items-center justify-center z-10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
