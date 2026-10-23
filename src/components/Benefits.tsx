import { motion } from "framer-motion";
import {
  MessageSquare,
  Palette,
  Bot,
  RefreshCw,
  Code2,
  Handshake,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal, StaggerReveal, staggerChild } from "./animations";

const benefitIcons = [MessageSquare, Palette, Bot, RefreshCw, Code2, Handshake];

export function Benefits() {
  return (
    <section
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-main">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Reveal>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                Why {siteConfig.agency.name}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-h1 font-display"
              style={{ marginBottom: "1rem" }}
            >
              Why teams <span className="accent-heading-italic">choose</span> us
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-body-lg"
              style={{ maxWidth: 520, margin: "0 auto" }}
            >
              We combine design craft with technical depth — and we actually
              communicate throughout the process.
            </p>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <StaggerReveal className="benefits-grid" staggerDelay={0.08}>
          {siteConfig.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return (
              <motion.div
                key={benefit.title}
                variants={staggerChild}
                className="card"
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                whileHover={{
                  borderColor: "var(--border-medium)",
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--chip-bg)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-highlight, var(--accent))",
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {benefit.title}
                </h3>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
