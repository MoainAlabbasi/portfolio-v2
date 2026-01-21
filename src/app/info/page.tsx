"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Building2, 
  Github, 
  Linkedin,
  Calendar,
  Globe,
  ExternalLink
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";

const contactInfo = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "from-red-500 to-orange-500",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: siteConfig.location,
    href: null,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    label: "التعليم",
    value: `${siteConfig.education.degree} - ${siteConfig.education.university}`,
    href: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    label: "التخرج المتوقع",
    value: siteConfig.education.graduation,
    href: null,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    label: "الخبرة العملية",
    value: `${siteConfig.stats.yearsExperience} سنوات`,
    href: null,
    color: "from-amber-500 to-orange-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "MoainAlabbasi",
    href: siteConfig.social.github,
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "moainalabbasi",
    href: siteConfig.social.linkedin,
    color: "from-blue-600 to-blue-800",
  },
];

export default function InfoPage() {
  return (
    <div className="min-h-screen py-8 px-4 lg:px-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-8">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              معلومات التواصل
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
              جميع المعلومات التي تحتاجها للتواصل معي
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Main Contact Card */}
      <section className="max-w-4xl mx-auto mb-8">
        <FadeInUp delay={0.1}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse opacity-50" />
                <img
                  src="/images/profile.jpg"
                  alt={siteConfig.nameAr}
                  className="w-full h-full rounded-full object-cover border-2 border-bg-dark relative z-10"
                />
              </div>
              <div className="text-center sm:text-right">
                <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                  {siteConfig.nameAr}
                </h2>
                <p className="text-primary font-medium mb-1">{siteConfig.titleAr}</p>
                <p className="text-text-secondary text-sm">{siteConfig.location}</p>
              </div>
            </div>

            {/* Contact Info Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-bg-darker/50 rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-muted text-xs mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text-primary font-medium text-sm hover:text-primary transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-medium text-sm truncate">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeInUp>
      </section>

      {/* Social Links */}
      <section className="max-w-4xl mx-auto mb-8">
        <FadeInUp delay={0.2}>
          <h3 className="text-xl font-bold text-center mb-6">الروابط الاجتماعية</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {socialLinks.map((link, index) => (
              <TiltCard key={index} glowColor={index === 0 ? "purple" : "cyan"}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-muted text-xs mb-1">{link.label}</p>
                    <p className="text-text-primary font-medium">{link.value}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-text-muted" />
                </a>
              </TiltCard>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* Download CV */}
      <section className="max-w-4xl mx-auto">
        <FadeInUp delay={0.3}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">تحميل السيرة الذاتية</h3>
            <p className="text-text-secondary text-sm mb-6">
              يمكنك تحميل السيرة الذاتية بصيغة PDF باللغة العربية أو الإنجليزية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/cv/Moain_Alabbasi_CV_EN.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-bg-dark font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>English CV</span>
              </motion.a>
              <motion.a
                href="/cv/Moain_Alabbasi_CV_AR.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-bg-card border border-primary text-primary font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>السيرة الذاتية - عربي</span>
              </motion.a>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
