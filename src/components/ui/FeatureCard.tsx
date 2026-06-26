type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
        w-[240px]
        rounded-[14px]
        border
        border-[#f0c98f]
        bg-white
        px-4
        py-4
        shadow-[0_0_0_1px_rgba(240,201,143,0.15)]
        ${className}
      `}
    >
      <div className="flex items-start gap-2">
        <span className="text-[14px]">{icon}</span>

        <div>
          <h3 className="text-[13px] font-semibold text-[#2b2347]">
            {title}
          </h3>

          <p className="mt-1 text-[11px] leading-[1.5] text-[#8d8898]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}