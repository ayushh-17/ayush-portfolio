import profile from "../../assets/images/profile.webp";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const tech = [
  {
    icon: <FaJava />,
    top: "8%",
    left: "48%",
  },
  {
    icon: <FaReact />,
    top: "28%",
    right: "-2%",
  },
  {
    icon: <SiSpringboot />,
    bottom: "24%",
    right: "2%",
  },
  {
    icon: <SiMysql />,
    bottom: "6%",
    left: "45%",
  },
  {
    icon: <FaGithub />,
    top: "40%",
    left: "-4%",
  },
];

export default function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .9 }}
      className="relative hidden lg:flex items-center justify-center"
    >
      {/* Rotating Ring */}

      <div
        className="
        absolute
        w-[470px]
        h-[470px]
        rounded-full
        border
        border-cyan-400/20
      "
        style={{
          animation: "spin 18s linear infinite",
        }}
      />

      {/* Glow */}

      <div
        className="
        absolute
        w-[410px]
        h-[410px]
        rounded-full
        bg-cyan-400/20
        blur-[90px]
      "
      />

      {/* Image */}

      <div
        className="
        relative
        w-[360px]
        h-[360px]
        rounded-full
        overflow-hidden
        border-2
        border-cyan-400/40
        shadow-[0_0_80px_rgba(34,211,238,.45)]
      "
      >
        <img
          src={profile}
          alt="Ayush"
           loading="eager"
            decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating Tech */}

      {tech.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="
          absolute
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-2xl
          text-cyan-400
          backdrop-blur-xl
        "
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Experience */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        left-0
        top-24
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-6
        py-4
        backdrop-blur-xl
      "
      >
        <p className="text-sm text-gray-400">
          Experience
        </p>

        <h3 className="text-xl font-bold text-cyan-400">
          6+ Months 
        </h3>
      </motion.div>

      {/* Projects */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-14
        right-0
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-6
        py-4
        backdrop-blur-xl
      "
      >
        <p className="text-sm text-gray-400">
          Projects
        </p>

        <h3 className="text-xl font-bold text-cyan-400">
          3+
        </h3>
      </motion.div>
    </motion.div>
  );
}