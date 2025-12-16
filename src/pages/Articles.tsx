import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "A comprehensive guide to structuring large React projects with TypeScript for better maintainability and developer experience.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    url: "#",
  },
  {
    title: "The Future of Web Development: What's Coming in 2025",
    excerpt: "Exploring upcoming trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks.",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    url: "#",
  },
  {
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt: "Learn how to create complex, responsive layouts using CSS Grid and Flexbox with practical examples and best practices.",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    url: "#",
  },
  {
    title: "Introduction to GraphQL: A Complete Beginner's Guide",
    excerpt: "Everything you need to know to get started with GraphQL, from schema design to query optimization.",
    date: "Nov 20, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    url: "#",
  },
  {
    title: "Optimizing Node.js Performance for Production",
    excerpt: "Advanced techniques for improving Node.js application performance including caching, clustering, and memory management.",
    date: "Nov 15, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    url: "#",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GradientBlurs />
      <ParticlesBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 font-body text-sm uppercase tracking-widest text-secondary border border-secondary/30 rounded-full"
            >
              Blog
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Featured </span>
              <span className="text-gradient">Articles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Sharing my thoughts and learnings about web development, technology, and software engineering.
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <ArticleCard key={article.title} {...article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
