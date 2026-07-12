const HeroBackground = () => {
  return (
    <>
      {/* Dark Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top Glow */}
      <div
        className="
        absolute
        top-[-180px]
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        animate-pulse
        -z-10
      "
      />

      {/* Left Glow */}
      <div
        className="
        absolute
        left-[-180px]
        top-[30%]
        h-[450px]
        w-[450px]
        rounded-full
        bg-violet-500/20
        blur-[120px]
        -z-10
      "
        style={{
          animation: "floatLeft 12s ease-in-out infinite",
        }}
      />

      {/* Right Glow */}
      <div
        className="
        absolute
        right-[-180px]
        h-[320px]
w-[320px]
blur-[90px]
        rounded-full
        bg-sky-500/20
        -z-10
      "
        style={{
          animation: "floatRight 15s ease-in-out infinite",
        }}
      />

      {/* Radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-60 w-full bg-gradient-to-t from-[#030712] to-transparent -z-10" />

      <style>{`
        @keyframes floatLeft{
          0%{
            transform:translate(0,0) scale(1);
          }
          50%{
            transform:translate(80px,-60px) scale(1.15);
          }
          100%{
            transform:translate(0,0) scale(1);
          }
        }

        @keyframes floatRight{
          0%{
            transform:translate(0,0) scale(1);
          }
          50%{
            transform:translate(-70px,70px) scale(1.1);
          }
          100%{
            transform:translate(0,0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default HeroBackground;