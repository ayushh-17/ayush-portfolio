type Props = {
  children: React.ReactNode;
};

function GlowCard({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
      "
    >
      {children}
    </div>
  );
}

export default GlowCard;