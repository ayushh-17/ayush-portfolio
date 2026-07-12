import { motion } from "framer-motion";
import { FaBriefcase, FaMicrochip } from "react-icons/fa";
import Container from "../common/Container";

const experience = [
  {
    role: "Java Full Stack Intern",
    company: "Syncsas Technologies",
    meta: "Remote · 6 Months",
    icon: <FaBriefcase />,
    bullets: [
      "Built end-to-end full-stack applications from database to UI.",
      "Designed and developed secure REST APIs using Spring Boot.",
      "Integrated React frontends with backend services and MySQL databases.",
      "Implemented JWT-based authentication and role-based access control.",
      "Followed industry-standard git workflows and code review practices.",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
  },
  {
    role: "IoT Intern",
    company: "Anorg Technologies",
    meta: "Gondia, India · 2 Months",
    icon: <FaMicrochip />,
    bullets: [
      "Worked on real-world IoT-based systems and sensor integrations.",
      "Programmed microcontrollers and handled hardware-software communication.",
      "Contributed to prototype builds and end-user IoT implementations.",
    ],
    stack: ["IoT", "Sensors", "Embedded C", "Hardware"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-blue-400 mb-4">Experience</p>

          <h2 className="text-5xl md:text-6xl font-black">
            Professional
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-300 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative mt-24 max-w-4xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-blue-400/30" />

          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-16 mb-14"
            >
              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-black shadow-[0_0_20px_rgba(59,130,246,.6)]">
                {item.icon}
              </div>

              <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                {item.meta}
              </span>

              <h3 className="text-2xl font-bold mt-2">{item.role}</h3>
              <p className="text-gray-400 font-medium">{item.company}</p>

              <ul className="mt-4 space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-gray-400 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-mono text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
