import { motion } from "framer-motion";

const GradientBlurs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      <motion.div
        className="gradient-blur gradient-blur-primary w-96 h-96 -top-48 -left-48"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blur gradient-blur-secondary w-80 h-80 top-1/2 -right-40"
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blur gradient-blur-accent w-72 h-72 bottom-0 left-1/3"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientBlurs;
