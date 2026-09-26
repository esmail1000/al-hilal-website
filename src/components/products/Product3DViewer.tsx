"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = { src: string; alt: string };

type ViewerElement = HTMLElement & { src: string };

declare global {
  interface Window {
    ModelViewerElement?: { meshoptDecoderLocation?: string };
  }
}

export default function Product3DViewer({ src, alt }: Props) {
  const t = useTranslations("Viewer");
  const reducedMotion = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const viewer = useRef<ViewerElement>(null);
  const [active, setActive] = useState(false);
  const [moduleReady, setModuleReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    "idle",
  );

  useEffect(() => {
    if (reducedMotion || !container.current || !window.IntersectionObserver)
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!active) return;
    let disposed = false;
    const canvas = document.createElement("canvas");
    if (!canvas.getContext("webgl2") && !canvas.getContext("webgl")) {
      const timer = window.setTimeout(() => setStatus("error"), 0);
      return () => window.clearTimeout(timer);
    }
    window.ModelViewerElement = window.ModelViewerElement || {};
    window.ModelViewerElement.meshoptDecoderLocation =
      "/vendor/meshopt_decoder.js";
    import("@google/model-viewer")
      .then(() => {
        if (!disposed) {
          setModuleReady(true);
          setStatus("loading");
        }
      })
      .catch(() => {
        if (!disposed) setStatus("error");
      });
    return () => {
      disposed = true;
    };
  }, [active]);

  useEffect(() => {
    if (!moduleReady || !viewer.current) return;
    const element = viewer.current;
    const handleLoad = () => setStatus("loaded");
    const handleError = () => setStatus("error");
    element.addEventListener("load", handleLoad);
    element.addEventListener("error", handleError);
    return () => {
      element.removeEventListener("load", handleLoad);
      element.removeEventListener("error", handleError);
    };
  }, [moduleReady]);

  useEffect(() => {
    if (status !== "loading") return;
    const timer = window.setTimeout(() => setStatus("error"), 15000);
    return () => window.clearTimeout(timer);
  }, [status]);

  return (
    <div
      ref={container}
      className="relative flex h-[310px] items-center justify-center overflow-hidden border-b border-border bg-[#e9e5dd] sm:h-[350px]"
    >
      <div
        className="industrial-grid pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      {moduleReady && status !== "error" && (
        <model-viewer
          ref={viewer}
          src={src}
          alt={alt}
          loading="lazy"
          camera-controls
          auto-rotate={reducedMotion ? undefined : true}
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          interaction-prompt="auto"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
      )}
      {status !== "loaded" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#e9e5dd]/90 p-6 text-center">
          <div
            className="industrial-grid absolute inset-0 opacity-25"
            aria-hidden="true"
          />
          <p className="relative max-w-xs text-lg font-bold text-primary">
            {alt}
          </p>
          {status === "loading" && (
            <p className="relative text-sm text-muted-foreground" role="status">
              {t("loading")}
            </p>
          )}
          {status === "error" && (
            <p
              className="relative max-w-xs text-sm text-muted-foreground"
              role="alert"
            >
              {t("error")}
            </p>
          )}
          {status === "idle" && (
            <button
              type="button"
              onClick={() => {
                setActive(true);
                setStatus("loading");
              }}
              className="relative min-h-12 rounded-md border border-primary bg-primary px-5 py-3 font-semibold text-white"
            >
              {t("load")}
            </button>
          )}
          {status === "idle" && reducedMotion && (
            <p className="relative text-sm text-muted-foreground">
              {t("reduced")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
