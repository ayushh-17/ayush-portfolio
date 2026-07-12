function FloatingShapes() {
  return (
    <>
      <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-500/20 blur-[150px]" />

      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-yellow-400/30 animate-pulse" />

      <div className="absolute bottom-32 left-32 w-10 h-10 rounded-full bg-cyan-400/40 animate-bounce" />
    </>
  );
}

export default FloatingShapes;