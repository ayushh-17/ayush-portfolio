import { motion } from "framer-motion";

const particles = Array.from({ length: 35 });

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;

        return (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-cyan-300/50 blur-[1px]"
          />
        );
      })}
    </div>
  );
}

export default Particles;