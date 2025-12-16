import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  color?: "primary" | "secondary" | "accent";
  delay?: number;
}

const SkillBar = ({ name, level, color = "primary", delay = 0 }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  const glowClasses = {
    primary: "shadow-[0_0_20px_hsl(190,100%,50%,0.5)]",
    secondary: "shadow-[0_0_20px_hsl(280,100%,60%,0.5)]",
    accent: "shadow-[0_0_20px_hsl(320,100%,60%,0.5)]",
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-body text-lg text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
          className="font-display text-lg text-primary"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClasses[color]} ${glowClasses[color]}`}
        />
      </div>
    </div>
  );
};

export default SkillBar;
