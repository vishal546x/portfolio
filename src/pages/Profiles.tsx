import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProfileCard from "@/components/ProfileCard";
import { Github, Code2, Award, Terminal, Zap, Trophy } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "johndoe",
    Icon: Github,
    url: "https://github.com",
    color: "primary" as const,
    stats: "500+ contributions this year",
  },
  {
    name: "LeetCode",
    username: "johndoe",
    Icon: Code2,
    url: "https://leetcode.com",
    color: "secondary" as const,
    stats: "300+ problems solved",
  },
  {
    name: "HackerRank",
    username: "johndoe",
    Icon: Award,
    url: "https://hackerrank.com",
    color: "accent" as const,
    stats: "5-star in Problem Solving",
  },
  {
    name: "CodeChef",
    username: "johndoe",
    Icon: Trophy,
    url: "https://codechef.com",
    color: "primary" as const,
    stats: "4-star rated",
  },
  {
    name: "SkillRack",
    username: "johndoe",
    Icon: Zap,
    url: "https://skillrack.com",
    color: "secondary" as const,
    stats: "1000+ programs",
  },
  {
    name: "Codeforces",
    username: "johndoe",
    Icon: Terminal,
    url: "https://codeforces.com",
    color: "accent" as const,
    stats: "Expert rated",
  },
];

const Profiles = () => {
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
              Competitive Programming
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Coding </span>
              <span className="text-gradient">Profiles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Track my coding journey across various competitive programming platforms.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <ProfileCard key={profile.name} {...profile} index={index} />
            ))}
          </div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 glass-card p-8 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Overall Statistics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Problems Solved", value: "1500+" },
                { label: "Contest Rating", value: "2000+" },
                { label: "Badges Earned", value: "50+" },
                { label: "Streak Days", value: "365+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="font-body text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Profiles;
