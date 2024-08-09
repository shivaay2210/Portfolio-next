import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface AnimatedTooltipProps {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    link: string; // Add link property to the item
  }[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };

  const rotate = useSpring(useMotionValue(x.get()), springConfig);

  const translateX = useSpring(useMotionValue(x.get()), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.clientX - event.currentTarget.offsetLeft - halfWidth);
  };

  const handleMouseEnter = (id: number) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="-mr-4 relative group"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 10 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div onClick={() => handleRedirect(item.link)}>
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full h-14 w-14 border-2 border-white relative transition duration-500"
            />
          </div>
        </div>
      ))}
    </>
  );
};
