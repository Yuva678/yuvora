import { useTheme } from "../context/ThemeContext";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  borderWidth?: number;
  className?: string;
  size?: number; // size of the beam in degrees
  hoverOnly?: boolean;
}

export function BorderBeam({
  duration = 4,
  delay = 0,
  borderWidth = 1.5,
  className = "",
  size = 95,
  hoverOnly = true,
}: BorderBeamProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Gradient configuration that looks stunning in both modes:
  // Dark mode: Radiant #c8ff00 fading into soft ambient lime glow and transparent.
  // Light mode: Vibrant #c8ff00 paired with a high-contrast lime-core (#7ab800) so it's razor-sharp on pure white.
  const gradient = isDark
    ? `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${360 - size}deg, rgba(200, 255, 0, 0.15) ${360 - size + 35}deg, #c8ff00 ${360 - 15}deg, rgba(200, 255, 0, 0.45) 355deg, transparent 360deg)`
    : `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${360 - size}deg, rgba(160, 225, 0, 0.25) ${360 - size + 30}deg, #74ad00 ${360 - 18}deg, #c8ff00 355deg, transparent 360deg)`;

  return (
    <div
      className={`border-beam-mask ${hoverOnly ? "border-beam-hover-only" : ""} ${className}`}
      aria-hidden="true"
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: `${borderWidth}px`,
        overflow: "hidden",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        zIndex: 5,
      }}
    >
      <div
        className="border-beam-spinner"
        style={{
          position: "absolute",
          inset: "-150%",
          width: "400%",
          height: "400%",
          left: "-150%",
          top: "-150%",
          background: gradient,
          animation: `border-beam-rotate ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
