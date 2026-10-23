import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal, Magnetic } from "./animations";

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "6rem",
      }}
    >
      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background: "var(--hero-glow)",
          pointerEvents: "none",
        }}
      />

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <Reveal delay={0.1}>
            <div className="section-badge" style={{ marginBottom: "2.5rem" }}>
              <span className="section-badge-dot" />
              <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                Web Design · AI Automation · Integrations
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.2}>
            <h1
              className="text-display font-display"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              {siteConfig.hero.headline.map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i === 1 ? (
                    <span className="accent-heading-italic">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.35}>
            <p
              className="text-body-lg"
              style={{
                maxWidth: "600px",
                margin: "0 auto 3rem",
              }}
            >
              {siteConfig.hero.subheadline}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.45}>
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
                  href={siteConfig.hero.cta.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(siteConfig.hero.cta.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                >
                  {siteConfig.hero.cta.label}
                  <ArrowRight size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.12}>
                <a
                  href={siteConfig.hero.ctaSecondary.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(siteConfig.hero.ctaSecondary.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-secondary"
                >
                  {siteConfig.hero.ctaSecondary.label}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <Reveal delay={0.7}>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "-4rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--text-muted)",
            }}
          >
            <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Scroll
            </span>
            <ArrowDown size={14} />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
