"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard({ children, className = "", glowColor = "cyan" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const glowColors: Record<string, string> = {
    cyan: "from-cyan-400 to-blue-500",
    purple: "from-purple-400 to-pink-500",
    green: "from-green-400 to-emerald-500",
    orange: "from-orange-400 to-red-500",
    pink: "from-pink-400 to-rose-500",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Gradient border glow */}
      <motion.div
        className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${glowColors[glowColor] || glowColors.cyan} opacity-0 blur-sm transition-opacity duration-500`}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
      />
      
      {/* Card content */}
      <div
        className="relative glass-card p-6 h-full rounded-2xl"
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.08) 0%, transparent 50%)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div style={{ transform: "translateZ(15px)" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// Simple Glass Card without tilt
export function GlassCard({ 
  children, 
  className = "",
  hover = true,
}: { 
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`glass-card p-6 rounded-2xl ${className}`}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

// Stat Card
export function StatCard({ 
  icon, 
  value, 
  label,
  color = "cyan",
}: { 
  icon: React.ReactNode;
  value: string;
  label: string;
  color?: string;
}) {
  const colors: Record<string, string> = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-green-400",
    orange: "text-orange-400",
    pink: "text-pink-400",
  };

  return (
    <TiltCard glowColor={color}>
      <div className="flex flex-col items-center text-center py-4">
        <div className={`text-3xl mb-3 ${colors[color]}`}>{icon}</div>
        <div className={`text-3xl font-bold mb-1 ${colors[color]}`}>{value}</div>
        <div className="text-sm text-white/60">{label}</div>
      </div>
    </TiltCard>
  );
}
