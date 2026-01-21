"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, Sparkles } from "lucide-react";
import { projectsData } from "@/lib/config";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">المشاريع</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            نبذة من أبرز المشاريع التي عملت عليها
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-primary">
            <Sparkles size={18} />
            <span className="text-sm">اضغط على أي مشروع لمعرفة المزيد</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="project-card cursor-pointer group"
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    عرض التفاصيل
                    <ChevronLeft size={18} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.titleAr}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                  {project.description.substring(0, 100)}...
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-bg-darker text-text-muted px-2 py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-primary">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
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
                className="fixed inset-4 lg:inset-20 bg-bg-card border border-border rounded-3xl z-50 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${selectedProject.color} p-6 lg:p-8 relative`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 left-4 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="max-w-3xl">
                    <span className="text-white/80 font-mono text-sm">{selectedProject.title}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
                      {selectedProject.titleAr}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                  <div className="max-w-3xl mx-auto">
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-primary mb-4">عن المشروع</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-primary mb-4">المميزات الرئيسية</h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                            </span>
                            <span className="text-text-secondary">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">التقنيات المستخدمة</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="skill-tag"
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
    </div>
  );
}
