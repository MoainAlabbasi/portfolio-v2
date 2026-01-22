"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, Sparkles } from "lucide-react";
import { projectsData } from "@/lib/config";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedText";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div className="min-h-screen py-8 px-4 lg:px-8">
      {/* Header */}
      <section className="max-w-6xl mx-auto mb-8">
        <FadeInUp>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              نبذة من المشاريع
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              المشاريع
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
              مجموعة من المشاريع التي عملت عليها، تعكس مهاراتي في مختلف التقنيات والمجالات
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-primary">
              <Sparkles size={18} />
              <span className="text-sm">اضغط على أي مشروع لمعرفة المزيد</span>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer h-full"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group">
                  {/* Project Image/Icon Header */}
                  <div className={`h-36 sm:h-44 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                         radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                      }} />
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        className="text-6xl sm:text-7xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {project.icon}
                      </motion.span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2">
                        عرض التفاصيل
                        <ChevronLeft className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.titleAr}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 flex-1">
                      {project.shortDesc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-bg-darker/50 text-xs text-text-muted rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-primary/10 text-xs text-primary rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-8 lg:inset-16 bg-bg-card border border-border rounded-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${selectedProject.color} p-5 sm:p-8 relative`}>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                  }} />
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center gap-4 relative z-10">
                  <span className="text-5xl sm:text-6xl">{selectedProject.icon}</span>
                  <div>
                    <span className="text-white/80 font-mono text-xs sm:text-sm">{selectedProject.title}</span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1">
                      {selectedProject.titleAr}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8">
                <div className="max-w-3xl mx-auto">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      عن المشروع
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      المميزات الرئيسية
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-xs font-bold">+</span>
                          </span>
                          <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      التقنيات المستخدمة
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.tech.map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: techIdx * 0.05 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-darker border border-border rounded-xl text-sm text-text-primary hover:border-primary transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
