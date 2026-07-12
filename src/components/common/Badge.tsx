type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-cyan-400/30
      bg-cyan-400/10
      px-4
      py-2
      text-sm
      text-cyan-300
      "
    >
      {text}
    </span>
  );
}

export default Badge;