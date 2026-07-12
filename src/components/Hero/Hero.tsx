import Container from "../common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroProfile from "./HeroProfile";
import HeroScroll from "./HeroScroll";




function Hero() {
  return (

    <section id="home"
     className="relative min-h-screen flex items-center overflow-hidden pt-40">
     

      {/* ================= Background ================= */}

      <HeroBackground/>

      {/* Decorative Lines */}

      <svg 
aria-hidden="true"
focusable="false"
        className="absolute left-[46%] top-52 hidden xl:block"
        width="70"
        height="40"
        viewBox="0 0 70 40"
        fill="none"
      >
        <path
          d="M2 20C15 0 30 40 45 20C55 8 62 10 68 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <svg
      aria-hidden="true"
focusable="false"
        className="absolute bottom-28 right-28 hidden xl:block"
        width="80"
        height="45"
        viewBox="0 0 80 45"
        fill="none"
      >
        <path
          d="M2 20C15 0 30 40 45 20C60 5 68 8 78 22"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">

  <h1
    className="
      text-[180px]
      md:text-[260px]
      font-black
      text-white/[0.03]
      tracking-[20px]
      uppercase
      whitespace-nowrap
    "
  >
    DEVELOPER
  </h1>

</div>
      <Container>

        <div className="grid lg:grid-cols-2 items-center gap-28">

          <HeroContent />
             <HeroProfile />
        </div>
      </Container>

      {/* Scroll Indicator */}

      <HeroScroll />

    </section>
  );
}

export default Hero;
