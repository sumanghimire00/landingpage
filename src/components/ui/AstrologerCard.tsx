import { BadgeCheck } from 'lucide-react';
import Image from "next/image";

interface AstrologerCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

export default function AstrologerCard({
  image,
  name,
  title,
  description,
}: AstrologerCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-2 inline-flex gap-1 items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium">
         <BadgeCheck className="h-3.5 w-3.5 text-amber-600"/>
        Verified Guru
      </div>

      <h3 className="heading-font mt-4 text-2xl text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-sm font-semibold text-slate-700">
        {title}
      </p>

      <p className="mt-5 text-sm font-light leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}