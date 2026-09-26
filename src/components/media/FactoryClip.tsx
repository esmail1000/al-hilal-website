"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  src: string;
  poster: string;
  alt: string;
  caption: string;
};

export default function FactoryClip({ src, poster, alt, caption }: Props) {
  const frame = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [manual, setManual] = useState(false);
  const [failed, setFailed] = useState(false);
  const t = useTranslations("Media");
  const ready = (inView || manual) && !failed;

  useEffect(() => {
    if (reducedMotion || !frame.current) return;
    if (!window.IntersectionObserver) {
      const frame = window.requestAnimationFrame(() => setInView(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(frame.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <figure
      ref={frame}
      className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-secondary"
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 768px) 46vw, 25vw"
        className="object-cover"
      />
      {ready && (
        <video
          autoPlay={!reducedMotion}
          loop={!reducedMotion}
          muted
          playsInline
          controls={!!reducedMotion}
          preload="none"
          poster={poster}
          aria-label={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-sm font-semibold text-white">
        <span>{caption}</span>
      </figcaption>
      {reducedMotion && !manual && (
        <button
          type="button"
          onClick={() => setManual(true)}
          aria-label={t("enableVideo")}
          className="absolute inset-x-3 top-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-black/70 px-4 text-sm font-semibold text-white backdrop-blur-sm"
        >
          <Play size={17} aria-hidden="true" />
          {t("enableVideo")}
        </button>
      )}
    </figure>
  );
}
