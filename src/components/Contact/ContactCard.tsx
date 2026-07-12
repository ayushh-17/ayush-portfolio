import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function ContactCard({ icon, title, value }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,.20)]
      transition-all
      duration-500
      "
    >
      <div className="text-3xl mb-5">
        {icon}
      </div>

      <h3 className="font-bold text-xl">
        {title}
      </h3>

      <p className="mt-2 text-gray-400 break-all">
        {value}
      </p>
    </motion.div>
  );
}

export default ContactCard;