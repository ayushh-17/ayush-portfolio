import { useEffect, useState, lazy, Suspense } from "react";
import Hero from "./components/Hero/Hero";

const About = lazy(() => import("./components/About/About"));
const Education = lazy(() => import("./components/Education/Education"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Services = lazy(() => import("./components/Services/Services"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const ScrollProgress = lazy(() =>
  import("./components/common/ScrollProgress")
);
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const ScrollToTop = lazy(() =>
  import("./components/common/ScrollToTop")
);
const Particles = lazy(() =>
  import("./components/common/Particles")
);

import { AnimatePresence } from "framer-motion";
import Loader from "./components/common/Loader";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="relative overflow-x-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at top, #0a0a0a 0%, #050505 45%, #000000 100%)",
      }}
    >
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      <Suspense fallback={null}>
        <ScrollProgress />
        <Navbar />
      </Suspense>

      {/* Hero should NOT be lazy */}
      <Hero />

      <Suspense fallback={null}>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />

        <ScrollToTop />
        <Particles />
      </Suspense>
    </main>
  );
}

export default App;