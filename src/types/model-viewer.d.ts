import type * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        poster?: string;
        ar?: boolean;
        autoplay?: boolean;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
        "interaction-prompt"?: string;
        "rotation-per-second"?: string;
        "touch-action"?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export { };
