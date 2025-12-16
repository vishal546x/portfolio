import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration for seamless payments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app powered by AI with natural language processing capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    tags: ["TypeScript", "OpenAI", "WebSocket", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop functionality and real-time updates.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    tags: ["React", "Firebase", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Analytics",
    description: "Dashboard for tracking and visualizing social media metrics across multiple platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
    tags: ["Python", "React", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first application for tracking workouts, nutrition, and health metrics.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
    tags: ["React Native", "GraphQL", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio management with price alerts and market analysis.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600",
    tags: ["Vue.js", "Web3", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GradientBlurs />
      <ParticlesBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
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
              My Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Featured </span>
              <span className="text-gradient">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A collection of projects showcasing my skills in full-stack development,
              from concept to deployment.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
