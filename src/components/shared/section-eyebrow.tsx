interface SectionEyebrowProps {
  label: string;
  tag?: string;
}

export default function SectionEyebrow({
  label,
  tag,
}: SectionEyebrowProps) {
  return (
    <>
      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
      <span className="mx-2 text-xs text-white/50 tracking-widest uppercase">
        {label}
      </span>
      {tag && (
        <span className="ml-2 px-2 py-0.5 rounded-full border border-white/10 text-white/40 text-xs">
          {tag}
        </span>
      )}
    </>
  );
}
