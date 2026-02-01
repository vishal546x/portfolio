import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Code2, Database, BookOpen, Users, Briefcase, Award, X, ExternalLink, ZoomIn } from "lucide-react";

// --- Data Configuration ---

// 1. Certificates Data (Using Local Image Paths)
const certificateCategories = [
  {
    title: "NPTEL",
    icon: BookOpen,
    description: "Online certifications from IITs & IISc",
    certificates: [
      { 
        name: "Programming in Java", 
        // Path to your image in public/certificates folder
        image: "/certificates/java.png" 
      },
      { 
        name: "Python for Data Science", 
        image: "/certificates/python.png" 
      },
      { 
        name: "The Joy of Computing Using Python", 
        image: "/certificates/joy.png" 
      },
    ]
  },
  {
    title: "Infosys Springboard",
    icon: Code2,
    description: "Corporate technical skills",
    certificates: [
      { 
        name: "Java Foundation Certification", 
        image: "/certificates/info-java.png" 
      },
      { 
        name: "Data Structures and Algorithms using Java", 
        image: "/certificates/data.png" 
      },
    ]
  },
  //{
  //  title: "Symposiums",
  //  icon: Users,
  //  description: "Events and Technical Meets",
  //  certificates: [
  //    { 
  //      name: "Web Design Winner", 
  //      image: "/certificates/symposium-1.jpg" 
  //    },
  //    { 
  //      name: "Paper Presentation", 
  //      image: "/certificates/symposium-2.jpg" 
  //    },
  //  ]
  //},
  {
    title: "Internships",
    icon: Briefcase,
    description: "Professional Experience",
    certificates: [
      { 
        name: "Wiztech Automations Pvt. Ltd.", 
        image: "/certificates/intern.png" 
      },
      {
        name:"Nainu StartUps",
        image:"/certificates/nainu.png"
      }
    ]
  }
];

// 2. Skills Data
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary" as const,
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary" as const,
    skills: ["Java", "Python", "Node.js", "SQL (MySQL)", "REST APIs"],
  },
];

const techIcons = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },             
  { name: "SQL", icon: "🛢️" },            
  { name: "Data Structures", icon: "🌳" }, 
  { name: "Machine Learning", icon: "🧠" }
];

const Skills = () => {
  // State for the Image Viewer Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GradientBlurs />
      <ParticlesBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* --- Header --- */}
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
              Expertise & Credentials
            </motion.span>

            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Skills & </span>
              <span className="text-gradient">Certificates</span>
            </h1>

            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical proficiency and professional recognitions.
            </p>
          </motion.div>

          {/* --- Tech Icons Strip --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 border border-white/5 hover:border-white/20 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-body text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          

          {/* --- Certificates Section --- */}
          <div className="relative">
            <h2 className="text-3xl font-display font-bold mb-12 text-center text-foreground/90 flex items-center justify-center gap-3">
              <Award className="text-accent" /> Certifications
            </h2>

            <div className="space-y-16">
              {certificateCategories.map((category) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6 px-4 border-l-4 border-accent/50 ml-2">
                    <category.icon className="text-muted-foreground" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.certificates.map((cert) => (
                      <motion.div
                        key={cert.name}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImage(cert.image)}
                        className="group relative glass-card p-3 rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                      >
                        {/* Image Container */}
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/50 relative">
                          {/* Main Image */}
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              // Fallback if image not found
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          
                          {/* Fallback Text */}
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 z-0">
                            Image Not Found
                          </div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                            <div className="flex items-center gap-2 text-white font-medium bg-accent/20 px-4 py-2 rounded-full border border-accent/50">
                              <ZoomIn size={16} />
                              <span>View Full Size</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 px-1">
                          <h4 className="font-semibold text-foreground/90">{cert.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- Full Screen Image Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;