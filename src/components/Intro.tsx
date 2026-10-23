import { Reveal } from "./animations";

export function Intro() {
  return (
    <section
      id="intro"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-narrow">
        <Reveal>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="text-label" style={{ color: "var(--text-secondary)" }}>
              Who We Are
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="text-h1 font-display"
            style={{
              marginBottom: "2rem",
              maxWidth: "700px",
            }}
          >
            Digital experiences that <span className="accent-heading-italic">do more</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className="text-body-lg"
            style={{
              maxWidth: "680px",
              marginBottom: "1.5rem",
            }}
          >
            Most agencies build you a website and walk away. We build the website{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>and</span> the systems behind it — the automations that capture leads,
            the workflows that nurture prospects, and the integrations that keep your
            tools in sync.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p
            className="text-body-lg"
            style={{
              maxWidth: "680px",
            }}
          >
            The result is a digital presence that doesn't just look polished — it
            actively works for your business, every hour of every day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
