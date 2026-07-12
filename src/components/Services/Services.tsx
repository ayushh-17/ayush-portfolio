import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants/services";

function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            What I Do
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Services
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            I develop scalable, secure and modern web applications with
            Java, Spring Boot, React and AI technologies while focusing
            on performance, clean architecture and exceptional user
            experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;