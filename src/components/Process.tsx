import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import { Reveal, StaggerReveal, staggerChild } from "./animations";

export function Process() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
      }}
    >
      <div className="container-main">
        {/* Header */}
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
                  Our Approach
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h1 font-display">
                How we <span className="accent-heading-italic">work</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-body" style={{ maxWidth: 400 }}>
              A proven four-step process that keeps projects focused,
              collaborative, and on track.
            </p>
          </Reveal>
        </div>

        {/* Process Steps */}
        <StaggerReveal className="process-grid" staggerDelay={0.1}>
          {siteConfig.process.map((step, index) => (
            <motion.div
              key={step.step}
              variants={staggerChild}
              className="card"
              style={{
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                borderColor: "var(--border-medium)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Step Number */}
              <span
                className="font-display"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "var(--watermark-num)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {step.step}
              </span>


              <h3 className="text-h3" style={{ marginBottom: "0.75rem" }}>
                {step.title}
              </h3>

              <p className="text-body">{step.description}</p>

              {/* Connector line to next step */}
              {index < siteConfig.process.length - 1 && (
                <div
                  className="process-connector"
                  style={{
                    position: "absolute",
                    right: "-0.75rem",
                    top: "50%",
                    width: "1.5rem",
                    height: 1,
                    background: "var(--border-subtle)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </StaggerReveal>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .process-connector {
          display: block;
        }
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-connector {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
