import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import SkillBar from "@/components/SkillBar";
import { Code2, Database, Cloud, Palette, Terminal, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary" as const,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary" as const,
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "accent" as const,
    skills: [
      { name: "Docker / Kubernetes", level: 80 },
      { name: "AWS / GCP", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Linux Administration", level: 78 },
    ],
  },
];

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◈" },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GradientBlurs />
      <ParticlesBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
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
              className="inline-block px-4 py-2 mb-6 font-body text-sm uppercase tracking-widest text-accent border border-accent/30 rounded-full"
            >
              Expertise
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">My </span>
              <span className="text-gradient">Skills</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life.
            </motion.p>
          </motion.div>

          {/* Tech Icons Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="glass-card px-6 py-4 rounded-xl flex items-center gap-3"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-body text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl ${
                      category.color === "primary" ? "bg-primary/10 text-primary" :
                      category.color === "secondary" ? "bg-secondary/10 text-secondary" :
                      "bg-accent/10 text-accent"
                    }`}
                  >
                    <category.icon size={28} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
