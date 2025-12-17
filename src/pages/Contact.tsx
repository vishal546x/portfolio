import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import SocialIcon from "@/components/SocialIcon";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "vishalmoorthy8471@gmail.com" },
    { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu" },
    { icon: Phone, label: "Phone", value: "+91 9025711720" },
  ];

  // Direct Gmail Link
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=vishalmoorthy8471@gmail.com&su=Project%20Inquiry";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GradientBlurs />
      <ParticlesBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
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
              className="inline-block px-4 py-2 mb-6 font-body text-sm uppercase tracking-widest text-primary border border-primary/30 rounded-full"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Contact </span>
              <span className="text-gradient">Me</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Have a question or want to work together? Drop me a message!
            </motion.p>
          </motion.div>

          {/* Contact Content */}
          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* 1. Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-body text-lg text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 2. Direct Mail Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Send a Direct Email
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Click below to open Gmail in a new tab.
              </p>
              
              <a 
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                // ✅ I used your theme's Primary color here (teal/cyan) so it matches the rest of the site.
                // If you want it red again, change 'bg-primary' to 'bg-red-600'
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
              >
                <Mail className="w-5 h-5" />
                Open Gmail
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </motion.div>

            {/* 3. Social Links Card (CENTERED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card p-8 rounded-2xl text-center" // ✅ Added text-center here
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Follow Me
              </h3>
              {/* ✅ Added justify-center here */}
              <div className="flex flex-wrap gap-4 justify-center"> 
                <SocialIcon Icon={Github} href="https://github.com/vishal546x" label="GitHub" color="primary" delay={0} />
                <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/vishalmoorthy/" label="LinkedIn" color="secondary" delay={0.1} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;