import { Play } from "lucide-react";

interface AudioCardProps {
  name: string;
  duration: string;
  title: string;
}

export default function AudioCard({
  name,
  duration,
  title,
}: AudioCardProps) {
  return (
    <div className="flex items-center  justify-between rounded-2xl border border-slate-200 bg-white px-5 py-5">
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white">
          <Play className="h-4 w-4 fill-current" />
        </button>

        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-slate-500">{title}</p>
        </div>
      </div>

      <span className="text-xs text-slate-400">
        {duration}
      </span>
    </div>
  );
}