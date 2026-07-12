type Props = {
  subtitle: string;
  title: string;
};

function SectionTitle({ subtitle, title }: Props) {
  return (
    <div className="mb-20">

      <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl md:text-6xl font-black">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;