import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../../constants/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-36 overflow-hidden"
    >
      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p className="uppercase tracking-[8px] text-blue-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Featured
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            These projects demonstrate my expertise in building scalable,
            production-ready full-stack applications with Java, Spring Boot,
            React, AI integration and modern software engineering practices.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <ProjectCard project={project} />
              </div>

            </motion.div>

          ))}

        </div>

      </Container>

      {/* Modal */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

export default Projects;