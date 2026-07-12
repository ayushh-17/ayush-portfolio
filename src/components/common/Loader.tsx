import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#050816]
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        h-[320px]
w-[320px]
blur-[90px]
        rounded-full
        bg-cyan-500/10
        "
      />

      <div className="text-center">

        {/* Logo */}

        <motion.h1
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          text-6xl
          md:text-8xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-white
          to-purple-400
          bg-clip-text
          text-transparent
          "
        >
          AK
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .4,
          }}
          className="
          mt-6
          text-gray-400
          tracking-[8px]
          uppercase
          text-sm
          "
        >
          Building Experience
        </motion.p>

        {/* Loading Bar */}

        <div
          className="
          mt-12
          h-[5px]
          w-64
          overflow-hidden
          rounded-full
          bg-white/10
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            "
          />
        </div>

      </div>
    </motion.div>
  );
}