"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
  prefix?: string;
};

function CountUp({
  end,
  duration = 1400,
  prefix = "+",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }

    if (reduceMotion) {
      setValue(end);
      return;
    }

    let startTime: number | null = null;
    let frameId = 0;

    function updateValue(timestamp: number) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * end);

      setValue(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    }

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}{value}
    </span>
  );
}

const stats = [
  {
    type: "count",
    key: "projects",
    end: 99,
  },
  {
    type: "text",
    key: "capacity",
    display: "∞",
  },
  {
    type: "count",
    key: "experience",
    end: 30,
  },
] as const;

export default function StatsBar() {
  const t = useTranslations("Stats");
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 px-5 sm:grid-cols-3 md:px-8 lg:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.key}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : index * 0.08,
            }}
            className="
              border-b border-border
              px-4 py-10
              text-center
              sm:border-b-0
              sm:border-e
              md:py-12
              last:sm:border-e-0
            "
          >
            <div className="text-4xl font-bold text-gold md:text-5xl">
              {stat.type === "count" ? (
                <CountUp end={stat.end} />
              ) : (
                <span className="tracking-[0.04em]">{stat.display}</span>
              )}
            </div>

            <p className="mt-3 text-sm font-medium text-muted-foreground md:text-base">
              {t(stat.key)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}