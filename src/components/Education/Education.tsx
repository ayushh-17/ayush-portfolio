import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    school: "G H Raisoni University, Amravati",
    year: "2023 - 2026",
    score: "CGPA: 7.9",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic Gondia",
    year: "2020 - 2023",
    score: "75%",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-6 bg-[#070b16]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl font-black text-center mb-20"
        >
          Education
        </motion.h2>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[3px] bg-cyan-500"></div>

          <div className="space-y-14">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity:0,x:-60 }}
                whileInView={{ opacity:1,x:0 }}
                transition={{ duration:.7 }}
                className="relative pl-20"
              >

                {/* Circle */}

                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">

                  <GraduationCap size={22}/>

                </div>

                <div className="bg-[#101828] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {item.school}
                  </p>

                  <p className="text-gray-400 mt-1">
                    {item.year}
                  </p>

                  <p className="mt-4 text-white font-semibold">
                    {item.score}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;