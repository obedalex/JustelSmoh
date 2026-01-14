// MediaCarousel.tsx
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

interface MediaCarouselProps {
  items: MediaItem[];
  caption?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  items,
  caption = "Justelsmoh — Trucks, Materials & Land — In Action",
  autoPlay = true,
  autoPlayInterval = 6000,
}) => {
  const [index, setIndex] = useState(0);
  const len = items.length;
  const intervalRef = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // autoplay slides
  useEffect(() => {
    if (!autoPlay || len <= 1) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, len]);

  // control video playback
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  if (!items || items.length === 0) return null;

  return (
    <section aria-label="Media carousel" className="mt-12">
      {/* Caption */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-6">
        <h3 className="text-lg md:text-xl font-semibold">
          {caption}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Real visuals from our fleet operations, construction materials, and land assets.
        </p>
      </div>

      <div className="flex justify-center px-4">
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px] aspect-square overflow-hidden rounded-2xl bg-black/90 shadow-lg">

          <div className="relative w-full h-full">
            {items.map((it, i) => (
              <div
                key={it.id}
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${(i - index) * 100}%)` }}
                aria-hidden={i !== index}
              >
                <div className="w-full h-full p-4 sm:p-5 md:p-6 flex items-center justify-center">
                  {it.type === "image" ? (
                    <img
                      src={it.src}
                      alt={it.alt ?? `Slide ${i + 1}`}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="max-w-full max-h-full object-contain"
                    >
                      <source src={it.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                {it.caption && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-md text-xs">
                    {it.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() => setIndex((i) => (i - 1 + len) % len)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => setIndex((i) => (i + 1) % len)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaCarousel;
