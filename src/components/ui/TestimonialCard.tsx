interface TestimonialCardProps {
  image: string;
  name: string;
  review: string;
}

export default function TestimonialCard({
  image,
  name,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-amber-500">★★★★★</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {review}
      </p>
    </div>
  );
}