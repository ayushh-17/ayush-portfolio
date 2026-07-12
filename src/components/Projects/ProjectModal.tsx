import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiExternalLink,
  FiCalendar,
  FiBriefcase,
  FiCheckCircle,
  FiImage,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;

  image: string;
  images?: string[];

  tech: string[];
  features: string[];

  github: string;
  live: string;

  architecture?: string;

  duration?: string;
  role?: string;
  status?: string;

  challenges?: string[];
  solutions?: string[];
  achievements?: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

  /* ---------------- Body Scroll Lock ---------------- */

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  /* ---------------- ESC Close ---------------- */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>

      {project && (

        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            z-[999]
            bg-black/80
            backdrop-blur-lg
            "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .94,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .94,
              y: 60,
            }}
            transition={{
              duration: .35,
            }}
            className="
            fixed
            left-1/2
            top-1/2
            z-[1000]
            h-[90vh]
            w-[96%]
            max-w-7xl
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-[#07111f]
            shadow-[0_0_90px_rgba(59,130,246,.15)]
            "
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="
              absolute
              right-6
              top-6
              z-50
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition
              hover:bg-blue-400
              hover:text-black
              "

            >
              <FiX size={20} />
            </button>

            <div className="grid lg:grid-cols-2 h-full">

              {/* ================= LEFT ================= */}

              <div className="relative overflow-hidden bg-[#0B1220]">

                {!imageError ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => setImageError(true)}
                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                    "
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full min-h-[260px] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#0F172A]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-blue-400">
                      <FiImage size={32} />
                    </div>
                    <p className="relative text-xs uppercase tracking-widest text-gray-500">
                      Screenshot coming soon
                    </p>
                  </div>
                )}

                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />

                {/* Status */}

                <div
                  className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  bg-blue-400
                  px-5
                  py-2
                  text-sm
                  font-bold
                  text-black
                  "
                >
                  {project.status}
                </div>

              </div>

              {/* ================= RIGHT ================= */}

              <div
                className="
                overflow-y-auto
                p-10
                lg:p-12
                "
              >

                <h2 className="text-4xl font-black leading-tight">
                  {project.title}
                </h2>

                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Info Cards */}

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    "
                  >
                    <div className="flex items-center gap-2 text-gray-400">
                      <FiBriefcase />

                      <span>Role</span>
                    </div>

                    <h3 className="mt-3 font-semibold">
                      {project.role}
                    </h3>
                  </div>

                  <div
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    "
                  >
                    <div className="flex items-center gap-2 text-gray-400">
                      <FiCalendar />

                      <span>Duration</span>
                    </div>

                    <h3 className="mt-3 font-semibold">
                      {project.duration}
                    </h3>
                  </div>

                </div>

                {/* Tech Stack */}

                <div className="mt-10 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      rounded-full
                      border
                      border-blue-400/20
                      bg-blue-400/10
                      px-4
                      py-2
                      text-sm
                      text-blue-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>
                {/* ================= Features ================= */}

                <div className="mt-12">

                  <h3 className="mb-6 text-2xl font-bold">
                    Key Features
                  </h3>

                  <div className="grid gap-4">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        "
                      >
                        <FiCheckCircle className="text-blue-400 text-lg" />

                        <span>{feature}</span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* ================= Challenges ================= */}

                {project.challenges && project.challenges.length > 0 && (

                  <div className="mt-12">

                    <h3 className="mb-6 text-2xl font-bold">
                      Challenges
                    </h3>

                    <div className="space-y-4">

                      {project.challenges.map((challenge) => (

                        <div
                          key={challenge}
                          className="
                          rounded-xl
                          border
                          border-red-400/20
                          bg-red-500/5
                          p-4
                          text-gray-300
                          "
                        >
                          {challenge}
                        </div>

                      ))}

                    </div>

                  </div>

                )}

                {/* ================= Solutions ================= */}

                {project.solutions && project.solutions.length > 0 && (

                  <div className="mt-12">

                    <h3 className="mb-6 text-2xl font-bold">
                      Solutions
                    </h3>

                    <div className="space-y-4">

                      {project.solutions.map((solution) => (

                        <div
                          key={solution}
                          className="
                          rounded-xl
                          border
                          border-blue-400/20
                          bg-blue-400/5
                          p-4
                          text-gray-300
                          "
                        >
                          {solution}
                        </div>

                      ))}

                    </div>

                  </div>

                )}

                {/* ================= Achievements ================= */}

                {project.achievements && project.achievements.length > 0 && (

                  <div className="mt-12">

                    <h3 className="mb-6 text-2xl font-bold">
                      Key Achievements
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {project.achievements.map((item) => (

                        <span
                          key={item}
                          className="
                          rounded-full
                          border
                          border-green-400/20
                          bg-green-500/10
                          px-4
                          py-2
                          text-sm
                          text-green-400
                          "
                        >
                          🏆 {item}
                        </span>

                      ))}

                    </div>

                  </div>

                )}

                {/* ================= Buttons ================= */}

                <div className="mt-12 flex flex-wrap gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-400
                    to-blue-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                    "
                  >
                    Live Demo
                    <FiExternalLink />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    px-6
                    py-3
                    transition
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

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );
}