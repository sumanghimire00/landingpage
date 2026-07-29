"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface AudioCardProps {
  name: string;
  title: string;
  url: string;
}

export default function AudioCard({
  name,
  title,
  url,
}: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = new Audio(url);
    audioRef.current = audio;

    // -------------------Get total duration of the audis
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    //----------------------- Update current time while playing.
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    // Reset when audio ends......>>>>>>>>>>>>>>>>>>>>
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [url]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-5">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white transition hover:bg-amber-600"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 fill-current" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
        </button>

        <div>
          <h4 className="text-sm font-semibold">{name}</h4>

          <p className="text-xs text-slate-500">{title}</p>

          <p className="mt-1 text-xs text-slate-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>
      </div>
    </div>
  );
}