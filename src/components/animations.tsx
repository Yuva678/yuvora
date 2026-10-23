import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variant,
  type Variants,
} from "framer-motion";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Reveal on Scroll ─── */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const directionOffset = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const hidden: Variant = {
    opacity: 0,
    ...directionOffset[direction],
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASE_EXPO,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger Children ─── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: StaggerProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_EXPO,
    },
  },
};

/* ─── Magnetic Hover ─── */
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const { left, top, width, height } =
      ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

/* ─── Text Reveal (line-by-line) ─── */
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: EASE_EXPO,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/* ─── Counter Animation ─── */
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setCount(to);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, from, to, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Animated Border Beam ─── */
export { BorderBeam } from "./BorderBeam";

