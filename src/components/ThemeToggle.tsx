import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const btnSize = size === "sm" ? 34 : 38;
  const iconSize = size === "sm" ? 15 : 17;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`theme-toggle-btn ${className}`}
      style={{
        width: btnSize,
        height: btnSize,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--chip-bg)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
        flexShrink: 0,
        transition: "border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isDark ? (
          <Sun size={iconSize} color="#f5f5f5" />
        ) : (
          <Moon size={iconSize} color="#0a0a0c" />
        )}
      </motion.div>
    </motion.button>
  );
}
