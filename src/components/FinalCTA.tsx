import { ArrowRight } from "lucide-react";
import { Reveal, Magnetic } from "./animations";

export function FinalCTA() {
  return (
    <section
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "var(--cta-glow)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-narrow"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <div className="section-badge" style={{ marginBottom: "1.5rem" }}>
            <span className="section-badge-dot" />
            <span className="text-label" style={{ color: "var(--text-secondary)" }}>
              Ready?
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="text-display font-display"
            style={{ marginBottom: "1.5rem" }}
          >
            Let's build something{" "}
            <span className="accent-heading-italic">remarkable</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className="text-body-lg"
            style={{
              maxWidth: 500,
              margin: "0 auto 2.5rem",
            }}
          >
            Whether it's a website, an automation workflow, or a full digital
            system — we're ready when you are.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Magnetic strength={0.12}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Let's Talk <ArrowRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.12}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                See Our Work
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
