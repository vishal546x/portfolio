import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProfileCard from "@/components/ProfileCard";
import { Github, Code2, Award, Terminal, Zap, Trophy } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username:"vishal546x",
    Icon: Github,
    url: "https://github.com/vishal546x",
    color: "primary" as const,
  },
  {
    name: "LeetCode",
    username: "Vishal_546",
    Icon: Code2,
    url: "https://leetcode.com/u/Vishal_546/",
    color: "secondary" as const,
    stats: "450+ problems solved",
  },
  //{
  //  name: "HackerRank",
  //  username: "johndoe",
  //  Icon: Award,
  //  url: "https://hackerrank.com",
  //  color: "accent" as const,
  //  stats: "5-star in Problem Solving",
  //},
  //{
  //  name: "CodeChef",
  //  username: "johndoe",
  //  Icon: Trophy,
  //  url: "https://codechef.com",
  //  color: "primary" as const,
  //  stats: "4-star rated",
  //},
  {
    name: "SkillRack",
    username: "111723109056",
    Icon: Zap,
    url: "http://www.skillrack.com/profile/440038/ebef57af3693ff57b4b6b3fd0bfe41b91815c0dc",
    color: "secondary" as const,
    stats: "1500+ programs",
  },
  //{
  //  name: "Codeforces",
  //  username: "johndoe",
  //  Icon: Terminal,
  //  url: "https://codeforces.com",
  //  color: "accent" as const,
  //  stats: "Expert rated",
  //},
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

          
        </div>
      </section>
    </div>
  );
};

export default Profiles;
