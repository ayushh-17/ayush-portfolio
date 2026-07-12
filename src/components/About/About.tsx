import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import Container from "../common/Container";

const skills = [
  {
    title: "Java",
    icon: <FaJava size={42} />,
  },
  {
    title: "Spring Boot",
    icon: <SiSpringboot size={42} />,
  },
  {
    title: "React",
    icon: <FaReact size={42} />,
  },
  {
    title: "System Design",
    icon: "⚡",
  },
  {
    title: "REST APIs",
    icon: "🚀",
  },
  {
    title: "AI",
    icon: "🤖",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative py-36 overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}

          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
              About Me
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Building Modern
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                Software Experiences
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              I enjoy transforming ideas into fast, scalable and
              user-focused digital products using Java, Spring Boot,
              React and AI technologies.
            </p>
          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Card */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:border-cyan-400/30
              hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
              "
            >
              <h3 className="text-3xl font-bold">
                Who I Am
              </h3>

              <p className="mt-8 leading-8 text-gray-400">
                I'm Ayush Dhanraj Karmani, a Computer Science student
                passionate about designing enterprise-grade applications
                and solving real-world problems through software
                engineering.

                <br />
                <br />

                My primary expertise lies in Java, Spring Boot and React,
                while I am continuously expanding my knowledge in
                Artificial Intelligence, cloud technologies and scalable
                system design.

                <br />
                <br />

                My objective is not just to build applications—but to
                create products that deliver meaningful experiences and
                measurable impact.
              </p>
            </motion.div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">

              {skills.map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
                  transition-all
                  duration-500
                  "
                >
                  <div aria-hidden="true"

                  className="text-5xl text-cyan-400 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-lg text-center">
                    {item.title}
                  </h3>
                </motion.div>

              ))}

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;