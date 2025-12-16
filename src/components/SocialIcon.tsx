import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
  label: string;
  color?: "primary" | "secondary" | "accent";
  delay?: number;
}

const SocialIcon = ({ Icon, href, label, color = "primary", delay = 0 }: SocialIconProps) => {
  const colorClasses = {
    primary: "text-primary hover:bg-primary",
    secondary: "text-secondary hover:bg-secondary",
    accent: "text-accent hover:bg-accent",
  };

  const glowClasses = {
    primary: "hover:shadow-[0_0_30px_hsl(190,100%,50%,0.5)]",
    secondary: "hover:shadow-[0_0_30px_hsl(280,100%,60%,0.5)]",
    accent: "hover:shadow-[0_0_30px_hsl(320,100%,60%,0.5)]",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`
        relative p-4 rounded-xl border border-border bg-card/50
        transition-all duration-300 group
        ${colorClasses[color]}
        ${glowClasses[color]}
        hover:text-background
      `}
      aria-label={label}
    >
      <Icon size={28} className="transition-colors duration-300" />
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-body bg-card text-foreground rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {label}
      </motion.span>
    </motion.a>
  );
};

export default SocialIcon;
