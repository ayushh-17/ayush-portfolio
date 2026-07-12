import { motion } from "framer-motion";

function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-[450px] h-[450px] rounded-full bg-yellow-400/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 90, -70, 0],
          y: [0, 100, -120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-cyan-400/15 blur-[130px]"
      />

    </div>
  );
}

export default BackgroundBlobs;