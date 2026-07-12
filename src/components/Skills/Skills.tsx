import { motion } from "framer-motion";
import Container from "../common/Container";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "JWT Auth", "Microservices"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL Design", "Query Optimization"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Claude", "GitHub Copilot"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-blue-400 mb-4">Skills</p>

          <h2 className="text-5xl md:text-6xl font-black">
            Technologies
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-300 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            My current technology stack focuses on building scalable backend
            systems, beautiful frontend experiences and production-ready
            full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <h3 className="text-xl font-bold mb-5">{group.title}</h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 font-mono transition-all hover:text-white hover:border-blue-400/50 hover:shadow-[0_0_16px_rgba(59,130,246,0.25)] hover:-translate-y-0.5"
                  >
                    {skill}
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
