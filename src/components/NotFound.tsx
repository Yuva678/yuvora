import { ArrowLeft, Home } from "lucide-react";

export function NotFound() {
  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
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

      <div
        className="container-narrow"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* 404 Number */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(6rem, 18vw, 14rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--accent)",
            marginBottom: "1rem",
            opacity: 0.9,
          }}
        >
          404
        </h1>

        <h2
          className="text-h1 font-display"
          style={{ marginBottom: "1rem" }}
        >
          Page not <span className="accent-heading-italic">found</span>
        </h2>

        <p
          className="text-body-lg"
          style={{
            maxWidth: "460px",
            margin: "0 auto 2.5rem",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            onClick={handleGoHome}
            className="btn-primary"
          >
            <Home size={16} />
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
