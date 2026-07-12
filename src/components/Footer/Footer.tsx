import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import Container from "../common/Container";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/ayushh-17",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/ayush-karmani-7217a3231",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-[#070B14]">

      {/* Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-[120px]" />

      </div>

      <Container>

        <div className="relative py-20">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-black">

                Ayush{" "}

                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Karmani
                </span>

              </h2>

              <p className="mt-6 max-w-sm leading-8 text-gray-400">

                Passionate Full Stack Developer building scalable,
                modern and AI-powered applications with exceptional
                user experiences.

              </p>

            </div>

            {/* Links */}

            <div>

              <h3 className="mb-6 text-lg font-semibold">
                Quick Links
              </h3>

              <div className="grid gap-4">

                {links.map((item) => (

                  <a
                    key={item.title}
                    href={item.href}
                    className="text-gray-400 transition hover:text-blue-400"
                  >
                    {item.title}
                  </a>

                ))}

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="mb-6 text-lg font-semibold">
                Connect
              </h3>

              <div className="flex gap-4">

                {socials.map((item, index) => (

                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                    }}
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-xl
                    transition
                    hover:border-blue-400
                    hover:text-blue-400
                    "
                  >
                    {item.icon}
                  </motion.a>

                ))}

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-white/10" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-gray-500">

              © {new Date().getFullYear()} Ayush Dhanraj Karmani.
              All Rights Reserved.

            </p>



          </div>

        </div>

      </Container>

    </footer>
  );
}   