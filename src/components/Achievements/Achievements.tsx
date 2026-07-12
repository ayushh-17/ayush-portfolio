import { motion } from "framer-motion";
import CountUp from "react-countup";
import Container from "../common/Container";

const achievements = [
  {
    number: 3,
    suffix: "+",
    title: "Projects Built",
    description: "Production-ready full stack applications.",
  },
  {
    number: 8,
    suffix: "+",
    title: "Technologies",
    description: "Modern development tools & frameworks.",
  },
  {
    number: 100,
    suffix: "+",
    title: "Git Commits",
    description: "Consistent development and version control.",
  },
  {
    number: 50,
    suffix: "+",
    title: "DSA Problems",
    description: "Continuous problem solving practice.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-32 overflow-hidden"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Numbers That
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
              Define My Journey
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Every project, commit and technology reflects my continuous learning
            and passion for building impactful software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
                duration: .7,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
              "
            >

              <h3 className="text-5xl font-black text-cyan-400">
  {item.number}
  {item.suffix}
</h3>

              <h4 className="mt-5 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-400 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}