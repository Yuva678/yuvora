import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal, StaggerReveal, staggerChild } from "./animations";
import { BorderBeam } from "./BorderBeam";
import { useTheme } from "../context/ThemeContext";

/* Generate a unique gradient for each project card */
function getProjectGradient(color: string, index: number) {
  const gradients = [
    `linear-gradient(135deg, ${color} 0%, #0a0a0a 100%)`,
    `linear-gradient(225deg, ${color} 0%, #0a0a0a 100%)`,
    `linear-gradient(160deg, ${color} 0%, #0a0a0a 100%)`,
    `linear-gradient(200deg, ${color} 0%, #0a0a0a 100%)`,
  ];
  return gradients[index % gradients.length];
}

/* Mock browser chrome for project previews */
function BrowserMockup({
  color,
  title,
  image,
  index = 0,
}: {
  color: string;
  title: string;
  image?: string;
  index?: number;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/10",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border-subtle)",
        background: isDark
          ? getProjectGradient(color, index)
          : "linear-gradient(135deg, #f1f3f9 0%, #e6eaf3 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Browser chrome header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 14px",
          background: isDark ? "rgba(10, 10, 15, 0.85)" : "rgba(245, 247, 251, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border-subtle)",
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.65rem",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            color: "var(--text-muted)",
            background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
            padding: "2px 10px",
            borderRadius: "4px",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {title.toLowerCase().replace(/\s+/g, "")}.com
        </span>
      </div>

      {/* Content preview */}
      <div
        style={{
          position: "relative",
          flex: 1,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: isDark ? "#090a10" : "#f3f5fa",
        }}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} project preview`}
              loading="lazy"
              className="project-mockup-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            {/* Subtle gradient vignette to blend with card */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: isDark
                  ? "linear-gradient(to top, rgba(10, 10, 15, 0.35) 0%, transparent 40%)"
                  : "linear-gradient(to top, rgba(0, 0, 0, 0.08) 0%, transparent 40%)",
              }}
            />
          </>
        ) : (
          <div
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                height: 8,
                borderRadius: 4,
                background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
              }}
            />
            <div
              style={{
                width: "40%",
                height: 8,
                borderRadius: 4,
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              }}
            />
            <div
              style={{
                width: "80%",
                height: 80,
                borderRadius: 8,
                marginTop: "0.5rem",
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="work"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <Reveal>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                  Selected Work
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h1 font-display">
                Projects that <span className="accent-heading-italic">perform</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-body" style={{ maxWidth: 400 }}>
              Concept demonstrations of what we build — websites, automation
              workflows, and connected business systems.
            </p>
          </Reveal>
        </div>

        {/* Project Grid */}
        <StaggerReveal
          className="projects-grid"
          staggerDelay={0.12}
        >
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerChild}
              className="card project-card group"
              style={{
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Animated glowing border beam (triggers on hover) */}
              <BorderBeam duration={3.5} delay={index * -0.8} borderWidth={1.5} size={100} hoverOnly={true} />

              {/* Concept label */}
              {project.isConcept && (
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 2,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "6px",
                    background: "rgba(200, 255, 0, 0.15)",
                    border: "1px solid rgba(200, 255, 0, 0.35)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isDark ? "#c8ff00" : "#000000",
                  }}
                >
                  Concept
                </div>
              )}

              {/* Project Image */}
              <div style={{ padding: "1.25rem 1.25rem 0" }}>
                <BrowserMockup
                  color={project.color}
                  title={project.title}
                  image={"image" in project ? (project as { image?: string }).image : undefined}
                  index={index}
                />
              </div>

              {/* Project Info */}
              <div style={{ padding: "1.5rem 1.5rem 1.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <p
                      className="text-caption"
                      style={{
                        marginBottom: "0.35rem",
                        color: isDark ? "var(--accent)" : "var(--text-secondary)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </p>
                    <h3 className="text-h3">{project.title}</h3>
                  </div>
                  <div
                    className="project-arrow"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid var(--border-subtle)",
                      background: "var(--chip-bg)",
                      color: "var(--text-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-body" style={{ marginBottom: "1rem" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                        background: "var(--chip-bg)",
                        border: "1px solid var(--border-subtle)",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .project-card:hover .project-arrow {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .project-card:hover .project-mockup-img {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
