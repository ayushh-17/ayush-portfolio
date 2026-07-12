import { motion } from "framer-motion";
import type { Achievements} from "../../constants/achievements";

interface Props {
  achievement: Achievements;
}

function AchievementCard({ achievement }: Props) {
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
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="text-5xl">
        {achievement.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {achievement.title}
      </h3>

      <p className="mt-4 text-gray-400">
        {achievement.subtitle}
      </p>
    </motion.div>
  );
}

export default AchievementCard;