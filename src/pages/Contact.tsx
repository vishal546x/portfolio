import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import GradientBlurs from "@/components/GradientBlurs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/SocialIcon";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  ];

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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
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
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card p-8 rounded-2xl"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Follow Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  <SocialIcon Icon={Github} href="https://github.com" label="GitHub" color="primary" delay={0} />
                  <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" color="secondary" delay={0.1} />
                  <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" color="accent" delay={0.2} />
                  <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube" color="primary" delay={0.3} />
                  <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" color="secondary" delay={0.4} />
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Send a Message
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
