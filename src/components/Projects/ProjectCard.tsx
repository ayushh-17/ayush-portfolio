import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="
      group
      relative
      w-full
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      transition-all
      duration-500
      hover:border-blue-400/40
      hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-400/10 blur-[100px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Preview */}

      <div
        className="
        relative
        h-44
        overflow-hidden
        bg-gradient-to-br
        from-[#0B1220]
        via-[#111827]
        to-[#0F172A]
        "
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="
          absolute
          left-5
          top-5
          w-52
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4
          "
        >
          <div className="mb-3 flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="space-y-2">
            <div className="h-2 rounded-full bg-blue-400/20" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
          </div>
        </motion.div>

        <div
          className="
          absolute
          right-4
          top-4
          rounded-full
          border
          border-blue-400/20
          bg-blue-400/10
          px-3
          py-1
          text-[10px]
          font-semibold
          text-blue-300
          "
        >
          Production
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold leading-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-blue-400/20
              bg-blue-400/10
              px-3
              py-1.5
              text-xs
              text-blue-300
              transition
              duration-300
              hover:bg-blue-400
              hover:text-black
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Features */}

        <div className="mt-6 space-y-2">

          {project.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <FiCheckCircle className="text-blue-400 text-sm" />
              {feature}
            </div>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-blue-400
            to-blue-500
            py-3
            text-sm
            font-semibold
            text-black
            transition
            duration-300
            hover:scale-[1.03]
            "
          >
            Live
            <FiExternalLink />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/15
            py-3
            text-sm
            transition
            duration-300
            hover:border-blue-400
            hover:text-blue-400
            "
              aria-label="GitHub Profile"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </motion.article>
  );
}