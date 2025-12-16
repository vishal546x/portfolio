import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProfileCardProps {
  name: string;
  username: string;
  Icon: LucideIcon;
  url: string;
  color: "primary" | "secondary" | "accent";
  stats?: string;
  index: number;
}

const ProfileCard = ({ name, username, Icon, url, color, stats, index }: ProfileCardProps) => {
  const colorClasses = {
    primary: "border-primary/30 hover:border-primary hover:shadow-[0_0_30px_hsl(190,100%,50%,0.3)]",
    secondary: "border-secondary/30 hover:border-secondary hover:shadow-[0_0_30px_hsl(280,100%,60%,0.3)]",
    accent: "border-accent/30 hover:border-accent hover:shadow-[0_0_30px_hsl(320,100%,60%,0.3)]",
  };

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`
        group relative p-6 glass-card rounded-xl border-2
        transition-all duration-300
        ${colorClasses[color]}
      `}
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`p-3 rounded-xl bg-muted/50 ${iconColors[color]}`}
        >
          <Icon size={32} />
        </motion.div>

        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
          <p className="font-body text-muted-foreground">@{username}</p>
          {stats && (
            <p className={`font-body text-sm mt-2 ${iconColors[color]}`}>{stats}</p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="text-muted-foreground group-hover:text-foreground transition-colors"
        >
          <ExternalLink size={20} />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ProfileCard;
