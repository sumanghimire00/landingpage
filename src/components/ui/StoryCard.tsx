import Image from "next/image";

interface StoryCardProps {
  image: string;
  label: string;
  labelColor?: string;
}

export default function StoryCard({
  image,
  label,
  labelColor = "bg-white",
}: StoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
     <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
  <Image
    src={image}
    alt={label}
    fill
    className="object-cover"
  />
</div>

      <span
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs ${labelColor}`}
      >
        {label}
      </span>
    </div>
  );
}