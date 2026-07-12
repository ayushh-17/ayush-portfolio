import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  children: React.ReactNode;
};

export default function GradientButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03 ,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-purple-600
      px-8
      py-4
      font-semibold
      text-white
      shadow-[0_0_30px_rgba(34,211,238,.25)]
      transition-all
      duration-300
      "
    >
      {/* Glow */}

      <span
        className="
        absolute
        inset-0
        bg-white/10
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
      />

      <span className="relative flex items-center gap-3">
        {children}

        <HiArrowRight
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
        />
      </span>
    </motion.button>
  );
}