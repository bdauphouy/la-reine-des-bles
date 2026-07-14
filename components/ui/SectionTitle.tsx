interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const eyebrowStyle =
    tone === "dark"
      ? "border-divider-dark bg-white/5 text-on-dark-mute"
      : "border-hairline bg-canvas text-charcoal";
  const titleColor = tone === "dark" ? "text-on-dark" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-on-dark-mute" : "text-charcoal";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${eyebrowStyle}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[32px] font-bold leading-none tracking-[-1.5px] sm:text-[44px] lg:text-[64px] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg leading-[1.56] ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
