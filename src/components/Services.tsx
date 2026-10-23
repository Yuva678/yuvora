import { motion } from "framer-motion";
import { Monitor, Zap, Link, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal, StaggerReveal, staggerChild } from "./animations";
import { useTheme } from "../context/ThemeContext";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Zap,
  Link,
};

export function Services() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Reveal>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                What We Do
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-h1 font-display"
              style={{ marginBottom: "1rem" }}
            >
              Services built around{" "}
              <span className="accent-heading-italic">results</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-body-lg"
              style={{ maxWidth: 550, margin: "0 auto" }}
            >
              Three interconnected disciplines. One team that understands how
              they all fit together.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <StaggerReveal
          className="services-grid"
          staggerDelay={0.1}
        >
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || Monitor;
            return (
              <motion.div
                key={service.id}
                variants={staggerChild}
                className="card"
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                whileHover={{
                  borderColor: "rgba(200,255,0,0.2)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(200, 255, 0, 0.14)",
                    border: "1px solid rgba(200, 255, 0, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: isDark ? "#c8ff00" : "#1a2500",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3
                  className="text-h3"
                  style={{ marginBottom: "1rem" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-body"
                  style={{ marginBottom: "1.5rem" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    marginBottom: "2rem",
                    flex: 1,
                  }}
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          boxShadow: "var(--badge-glow)",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: isDark ? "var(--accent)" : "var(--text-primary)",
                    transition: "gap 0.3s ease, color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "0.75rem";
                    e.currentTarget.style.color = isDark ? "#deff4d" : "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "0.5rem";
                    e.currentTarget.style.color = isDark ? "var(--accent)" : "var(--text-primary)";
                  }}
                >
                  Discuss This Service <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
