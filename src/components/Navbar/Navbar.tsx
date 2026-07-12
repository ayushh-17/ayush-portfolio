import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];
function Navbar() {
  const scrollToSection = (sectionId: string) => {

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setOpen(false);
};

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
  const handleActiveSection = () => {
    const scrollPosition = window.scrollY + 120;

    navItems.forEach((item) => {
      const section = document.getElementById(item.to);

      if (!section) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        setActive(item.name);
      }
    });
  };

  window.addEventListener("scroll", handleActiveSection);

  handleActiveSection();

  return () => {
    window.removeEventListener("scroll", handleActiveSection);
  };
}, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6 }}
            className={`
              rounded-full
              transition-all
              duration-500
              flex
              items-center
              justify-between
              px-7
              h-16

              ${scrolled
                ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
                : "bg-transparent"
              }
            `}
          >
            {/* Logo */}

          <div onClick={() => scrollToSection("home")}>
  <motion.h1
    whileHover={{
      scale: 1.08,
    }}
    className="cursor-pointer text-3xl font-black"
  >
    <span className="text-cyan-400">A</span>
    <span>K</span>
  </motion.h1>
</div>

            {/* Desktop */}

           <ul className="hidden lg:flex items-center gap-2">

  {navItems.map((item) => (

    <li key={item.name}>

      <div
  onClick={() => scrollToSection(item.to)}
>
        <motion.div
          whileHover={{ y: -2 }}
          className={`
            relative
            cursor-pointer
            rounded-full
            px-5
            py-2.5
            transition

            ${
              active === item.name
                ? "text-white bg-cyan-500/10"
                : "text-gray-400 hover:text-white"
            }
          `}
        >
          {item.name}

          {active === item.name && (
            <motion.div
             className={`absolute inset-0 rounded-full border transition-all duration-300 ${
active===item.name
? "border-cyan-400/40 opacity-100"
: "opacity-0"
}`}
            />
          )}
        </motion.div>

      </div>
    </li>

  ))}

</ul>
            {/* Right */}

            <div className="hidden lg:flex items-center gap-5">

              <a
  href="https://github.com/ayushh-17"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my GitHub profile"
>
   <FaGithub   role="img"
  aria-label="GitHub" />
</a>

             <a
  href="https://linkedin.com/in/ayush-karmani-7217a3231"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
>
   <FaLinkedin aria-hidden="true" />
</a>

              <a
  href="public/ayush_resume_new17.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    to-blue-500
    px-6
    py-2.5
    font-semibold
    hover:scale-105
    transition
  "
    aria-label="Resume "

>
  Resume
</a>

            </div>

            {/* Mobile */}

           <button
  onClick={() => setOpen(!open)}
  className="lg:hidden text-2xl"
  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
>
  {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
</button>

          </motion.nav>

        </div>

      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
            fixed
            top-24
            left-5
            right-5
            z-40
            rounded-3xl
            border
            border-white/10
            bg-[#0B1120]/95
            backdrop-blur-2xl
            p-8
            lg:hidden
            "
              aria-label="Open Navigation Menu"

          >
            <div className="space-y-6">

              {navItems.map((item) => (

                <div
  key={item.name}
  onClick={() => scrollToSection(item.to)}
  className="cursor-pointer text-lg hover:text-cyan-400 transition"
>
  {item.name}
</div>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;