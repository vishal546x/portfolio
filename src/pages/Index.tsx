import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, Award, Code } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "@/components/ParticlesBackground";
import Scene3D from "@/components/Scene3D";
import GradientBlurs from "@/components/GradientBlurs";
import Navigation from "@/components/Navigation";
import GlowButton from "@/components/GlowButton";
import SocialIcon from "@/components/SocialIcon";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const Index = () => {
  const achievements = [
    { icon: Code, label: "Projects", value: "3+" },
    { icon: Award, label: "Certifications", value: "15+" },
  ];

  const resumeLink = "https://drive.google.com/file/d/1I6U9LGZ4ukjB7ZJObRpUEQopSbg4PajQ/view?usp=sharing";
  const profileImage = "https://github.com/vishal546x.png"; 

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <ParticlesBackground />
      <GradientBlurs />
      <Scene3D />

      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left z-10 order-2 md:order-1"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 font-body text-sm uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5"
            >
              Welcome to my universe
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-2xl md:text-3xl font-medium text-muted-foreground mb-2"
            >
              Hi, I'm <span className="text-foreground font-bold">Vishal M</span>
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Java</span>
              <br />
              <span className="text-gradient">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8"
            >
              Crafting digital experiences with code, creativity, and a passion for innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link to="/contact">
                <GlowButton variant="primary">Hire Me</GlowButton>
              </Link>
              
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <GlowButton variant="secondary">
                  <Download size={20} className="mr-2 inline" />
                  Resume
                </GlowButton>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }} // Floating animation
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-[500px] md:h-[500px]"
            >
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 bg-background/50 backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Vishal Moorthy" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 blur-2xl rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full" />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={32} className="text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-gradient">About</span>
                <span className="text-foreground"> Me</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-body text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                I'm a passionate full-stack developer with expertise in building scalable web applications. 
                With over 5 years of experience, I've worked with startups and enterprises to deliver 
                high-quality software solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-body text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                My tech stack includes React, Node.js, TypeScript, Python, and cloud technologies. 
                I love solving complex problems and turning ideas into reality through code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <SocialIcon Icon={Github} href="https://github.com/vishal546x" label="GitHub" color="primary" delay={0} />
                <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/vishalmoorthy/" label="LinkedIn" color="secondary" delay={0.1} />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-card p-6 rounded-xl flex items-center gap-6"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-xl bg-primary/10 text-primary"
                  >
                    <item.icon size={32} />
                  </motion.div>
                  <div>
                    <p className="font-display text-3xl font-bold text-gradient">{item.value}</p>
                    <p className="font-body text-muted-foreground">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 relative z-10"
          >
            <span className="text-foreground">Let's </span>
            <span className="text-gradient">Work Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl text-muted-foreground mb-8 relative z-10"
          >
            Have a project in mind? Let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center relative z-10"
          >
            <Link to="/contact">
              <GlowButton variant="primary">
                Get In Touch
              </GlowButton>
            </Link>
            <Link to="/projects">
              <GlowButton variant="accent">
                View Projects
              </GlowButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;