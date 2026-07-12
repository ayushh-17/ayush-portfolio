import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

const x = useSpring(mouseX,{
stiffness:70,
damping:40
});

const y = useSpring(mouseY,{
stiffness:70,
damping:40
});

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      fixed
      left-0
      top-0
      z-0
      h-[320px]
w-[320px]
blur-[90px]
      rounded-full
      pointer-events-none
      bg-cyan-400/10
      "
    />
  );
}