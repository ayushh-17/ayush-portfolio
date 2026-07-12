import { TypeAnimation } from "react-type-animation";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import GradientButton from "../common/GradientButton";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Status */}
      <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 backdrop-blur-xl">
        <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm uppercase tracking-[3px] text-emerald-300">
          Available for Opportunities
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
        <span className="block text-white">Ayush</span>

        <span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-300 bg-clip-text text-transparent">
          Dhanraj
        </span>

        <br />

        <span className="text-white">Karmani</span>
      </h1>

      {/* Animated Role */}
      <div className="mt-8 flex items-center gap-3">
        <HiOutlineArrowSmRight className="text-2xl text-cyan-400" />

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React Developer",
            2000,
            "AI Engineer",
            2000,
          ]}
          speed={45}
          repeat={Infinity}
          className="text-2xl font-medium text-gray-300"
        />
      </div>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Passionate about building scalable full-stack applications with Java,
        Spring Boot, React and AI. I focus on clean architecture, exceptional
        UI and production-ready software.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-5">
        <a href="#projects">
  <GradientButton>
    View Projects
  </GradientButton>
</a>
        <a
  href="/public/ayush_resume_new17.pdf"
  download
  className="
  rounded-full
  border
  border-white/15
  px-8
  py-4
  font-medium
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-400/10
"
>
  Download Resume
</a>      </div>

      {/* Stats */}
      <div className="mt-14 flex flex-wrap gap-10">
        {[
          { number: "8+", label: "MONTHS INTERNING" },
          { number: "2", label: "INTERNSHIP" },
          { number: "7.9", label: "cgpa" },
        ].map((item) => (
          <div key={item.label}>
            <h3 className="text-3xl font-black text-cyan-400">
              {item.number}
            </h3>

            <p className="mt-1 text-sm uppercase tracking-[2px] text-gray-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}