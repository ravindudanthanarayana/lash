
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface DirectionAwareHoverProps {
  imageUrl: string;
  children: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}

export const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>('');

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? (h / w) : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? (w / h) : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ['top', 'right', 'bottom', 'left'][d];
  };

  const imageVariants = {
    top: { y: -100 },
    bottom: { y: 100 },
    left: { x: -100 },
    right: { x: 100 },
    default: { x: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        animate={direction ? imageVariants[direction as keyof typeof imageVariants] : imageVariants.default}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        src={imageUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${imageClassName}`}
      />
      <div className={`relative z-10 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  );
};
