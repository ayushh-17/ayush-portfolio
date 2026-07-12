function BackgroundGlow() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="fixed -top-40 -left-40 w-[320px] h-[500px] bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Bottom Right Glow */}
      <div className="fixed -bottom-40 -right-40 w-[380px] h-[600px] bg-purple-500/20 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Center Glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none"></div>
    </>
  );
}

export default BackgroundGlow;