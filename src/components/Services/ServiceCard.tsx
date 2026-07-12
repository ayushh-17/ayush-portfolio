import { motion } from "framer-motion";
import type { Service } from "../../constants/services";

interface Props {
  service: Service;
}

function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:border-cyan-400/40
      hover:shadow-[0_0_45px_rgba(34,211,238,.20)]
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-20
        -right-20
        h-40
        w-40
        rounded-full
        bg-cyan-400/10
        blur-3xl
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
        "
      />

      <div className="text-5xl">
        {service.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {service.description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;