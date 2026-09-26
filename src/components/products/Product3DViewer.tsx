"use client";

import { useEffect, useState } from "react";

type Product3DViewerProps = {
  src: string;
  alt: string;
};

declare global {
  interface Window {
    ModelViewerElement?: {
      meshoptDecoderLocation?: string;
    };
  }
}

export default function Product3DViewer({
  src,
  alt,
}: Product3DViewerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadModelViewer() {
      window.ModelViewerElement = window.ModelViewerElement || {};

      window.ModelViewerElement.meshoptDecoderLocation =
        "https://cdn.jsdelivr.net/npm/meshoptimizer/meshopt_decoder.js";

      await import("@google/model-viewer");

      setReady(true);
    }

    loadModelViewer();
  }, []);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[10px] border border-border bg-white">

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Loading 3D model...
          </p>
        </div>
      )}

      {ready && (
        <model-viewer
          src={src}
          alt={alt}
          camera-controls
          auto-rotate
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          interaction-prompt="auto"
          rotation-per-second="18deg"
          touch-action="pan-y"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
          }}
        />
      )}

    </div>
  );
}