interface DiscoveryCardProps {
  number?: string;
  title: string;
  description: string;
}

export default function DiscoveryCard({
  number,
  title,
  description,
}: DiscoveryCardProps) {
  return (
    <div className="rounded-2xl border border-[#EAE4DA] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex gap-4">
        <span className="font-serif text-4xl text-[#A59C92]">
          { number}
        </span>

        <div>
          <h3 className="font-serif text-lg text-[#2D2336]">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[#77717D]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}