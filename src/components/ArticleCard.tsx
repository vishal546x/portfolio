import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  index: number;
}

const ArticleCard = ({ title, excerpt, date, readTime, image, url, index }: ArticleCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
      className="group flex flex-col md:flex-row gap-6 p-6 glass-card rounded-xl"
    >
      <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readTime}
          </span>
        </div>
      </div>

      <motion.div
        className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 5 }}
      >
        <ArrowRight size={24} />
      </motion.div>
    </motion.a>
  );
};

export default ArticleCard;
