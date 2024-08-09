"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

interface InfiniteMovingCardsProps {
  items: { image: string; name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }

    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }

    setStart(true);

    return () => {
      if (scrollerRef.current) {
        Array.from(scrollerRef.current.children).forEach((child, index) => {
          if (index >= items.length) {
            scrollerRef.current?.removeChild(child);
          }
        });
      }
    };
  }, [items.length, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="w-[130px] max-w-full relative rounded-lg border border-b-0 flex-shrink-0 border-slate-700 px-2 py-3 md:w-[156px] flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote className="text-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100% + 8px)] w-[calc(100% + 8px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto max-h-[100px] object-contain"
                />
              </span>
              <div className="relative z-20 mt-3">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
