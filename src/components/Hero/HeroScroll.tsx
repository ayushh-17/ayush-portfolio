import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.2,
        duration: 1,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div
        className="
        flex
        h-12
        w-7
        justify-center
        rounded-full
        border
        border-cyan-400/40
        backdrop-blur-xl
      "
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
        />
      </div>

      <p className="mt-3 text-center text-xs uppercase tracking-[3px] text-gray-500">
        Scroll
      </p>
    </motion.div>
  );
}