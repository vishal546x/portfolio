import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  href?: string;
}

const GlowButton = ({ children, onClick, variant = "primary", className = "", href }: GlowButtonProps) => {
  const colorClasses = {
    primary: "bg-primary/20 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    secondary: "bg-secondary/20 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
    accent: "bg-accent/20 border-accent text-accent hover:bg-accent hover:text-accent-foreground",
  };

  const glowClasses = {
    primary: "hover:shadow-[0_0_30px_hsl(190,100%,50%,0.5),0_0_60px_hsl(190,100%,50%,0.3)]",
    secondary: "hover:shadow-[0_0_30px_hsl(280,100%,60%,0.5),0_0_60px_hsl(280,100%,60%,0.3)]",
    accent: "hover:shadow-[0_0_30px_hsl(320,100%,60%,0.5),0_0_60px_hsl(320,100%,60%,0.3)]",
  };

  const buttonContent = (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 font-display text-lg font-semibold
        border-2 rounded-lg transition-all duration-300
        ${colorClasses[variant]}
        ${glowClasses[variant]}
        ${className}
      `}
    >
      <motion.span
        className="absolute inset-0 rounded-lg opacity-0 blur-xl transition-opacity duration-300"
        style={{
          background: variant === "primary" ? "hsl(190, 100%, 50%)" 
            : variant === "secondary" ? "hsl(280, 100%, 60%)" 
            : "hsl(320, 100%, 60%)",
        }}
        whileHover={{ opacity: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default GlowButton;
