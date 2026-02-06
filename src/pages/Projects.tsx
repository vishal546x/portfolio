import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

const projects = [
   {
    title: "Attendance Analytics",
    description: "Web Application for attendance analytics",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google-Analytics-4-Blog-Post-Header-2096x1182.width-1300_O3uqryV.jpg",
    tags: ["HTML", "CSS", "JS","GCloud"],
    liveUrl: "https://deploy-attendance-pink.vercel.app/",
    githubUrl: "https://github.com/vishal546x/deploy-attendance.git",
  },
  {
    title: "Call Taxi Booking",
    description: "A call taxi booking application by using JAVA programming language",
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/taxi-booking-app.jpg",
    tags: ["Java","Data Structures"],
   // liveUrl: "https://example.com",
    githubUrl: "https://github.com/vishal546x/call_taxi/tree/a9a86219ef0c7b4fac844f3343507e847da05dd4",
  },
  {
    title: "ChipComm-2K25",
    description: "Developed a Website for my department symposium.",
    image: "https://chipcomm25.web.app/logo.jpg",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://chipcomm25.web.app/",
    githubUrl: "https://github.com",
  },
  
  {
    title: "Heart Disease Prediction",
    description: "A model which predicts the heart-disease by the given inputs..",
    image: "https://images.ctfassets.net/ut7rzv8yehpf/1DhC3uX3EeKnjU02LWyTXH/9c82e6ae82662ed5903eafb40d888d90/8_Main_Types_of_Heart_Disease.jpg?w=1800&h=900&q=50&fm=webp",
    tags: ["HTML", "CSS", "Python"],
    liveUrl: "https://heart-disease-up6w.onrender.com",
    githubUrl: "https://github.com/vishal546x/heart_disease.git",
  },
  {
    title: "PlaceMent Prediction",
    description: " Developed a machine learning model in Python to predict student placement chances based on academic and skill-related data.",
    image: "https://konversations.com/community/img/stories/500x500/story_107.jpeg",
    tags: ["HTML", "CSS", "Python"],
    liveUrl: "https://placement-prediction-ejxe.onrender.com",
    githubUrl: "https://github.com/vishal546x/placement_prediction.git",
  },
   {
    title: "ChipComm-2K26",
    description: "Developed a Website for my department symposium.",
    image: "https://chipcomm25.web.app/logo.jpg",
    tags: ["React"],
    liveUrl: "https://chipcomm26.vercel.app/",
    githubUrl: "https://github.com/vishal546x/orbital-uplink.git",
  },
  
  
 
  //{
  //  title: "Crypto Portfolio Tracker",
  //  description: "Real-time cryptocurrency portfolio management with price alerts and market analysis.",
  //  image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600",
  //  tags: ["Vue.js", "Web3", "Chart.js"],
  //  liveUrl: "https://example.com",
  //  githubUrl: "https://github.com",
  //},
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
