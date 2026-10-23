import LogoLoop, { type LogoItem } from "./LogoLoop";
import { BorderBeam } from "./BorderBeam";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiN8N,
} from "react-icons/si";

const OpenAiIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

const techRow1: LogoItem[] = [
  { node: <SiReact size={24} />, title: "React" },
  { node: <SiNextdotjs size={24} />, title: "Next.js" },
  { node: <SiTypescript size={24} />, title: "TypeScript" },
  { node: <SiTailwindcss size={24} />, title: "Tailwind CSS" },
  { node: <SiFigma size={24} />, title: "Figma" },
  { node: <SiVercel size={24} />, title: "Vercel" },
  { node: <SiNodedotjs size={24} />, title: "Node.js" },
  { node: <SiPython size={24} />, title: "Python" },
  { node: <SiPostgresql size={24} />, title: "PostgreSQL" },
  { node: <SiFirebase size={24} />, title: "Firebase" },
  { node: <SiN8N size={24} />, title: "n8n" },
  { node: <OpenAiIcon />, title: "OpenAI API" },
];

const techRow2: LogoItem[] = [
  { node: <OpenAiIcon />, title: "OpenAI API" },
  { node: <SiN8N size={24} />, title: "n8n" },
  { node: <SiFirebase size={24} />, title: "Firebase" },
  { node: <SiPostgresql size={24} />, title: "PostgreSQL" },
  { node: <SiPython size={24} />, title: "Python" },
  { node: <SiNodedotjs size={24} />, title: "Node.js" },
  { node: <SiVercel size={24} />, title: "Vercel" },
  { node: <SiFigma size={24} />, title: "Figma" },
  { node: <SiTailwindcss size={24} />, title: "Tailwind CSS" },
  { node: <SiTypescript size={24} />, title: "TypeScript" },
  { node: <SiNextdotjs size={24} />, title: "Next.js" },
  { node: <SiReact size={24} />, title: "React" },
];

const renderTechCard = (item: LogoItem, key: React.Key) => {
  const index = typeof key === "string" ? parseInt(key.split("-")[1] || "0", 10) : 0;
  const iconNode = "node" in item ? item.node : <img src={item.src} alt={item.alt || ""} width={24} height={24} />;

  return (
    <div className="card tech-marquee-card group" key={key}>
      {/* Animated glowing border beam on hover */}
      <BorderBeam
        duration={3}
        delay={index * -0.25}
        borderWidth={1.5}
        size={95}
        hoverOnly={true}
      />
      
      {/* Icon Chip */}
      <div className="tech-icon-chip">
        {iconNode}
      </div>

      {/* Title */}
      <span className="tech-card-label">
        {item.title}
      </span>
    </div>
  );
};

export function Technologies() {
  return (
    <section
      id="technologies"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient accent glow in center background */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse 65% 50% at 50% 50%, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Header (contained in main grid width) */}
      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="text-label" style={{ color: "var(--text-secondary)" }}>
              Technology
            </span>
          </div>
          <h2
            className="text-h1 font-display"
            style={{ marginBottom: "1rem" }}
          >
            Tools we <span className="accent-heading-italic">actually use</span>
          </h2>
          <p
            className="text-body-lg"
            style={{ maxWidth: 520, margin: "0 auto" }}
          >
            Modern, proven technologies — selected for reliability, performance,
            and developer experience.
          </p>
        </div>
      </div>

      {/* Full-bleed dual stream marquee */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <LogoLoop
          logos={techRow1}
          speed={48}
          direction="left"
          logoHeight={112}
          gap={18}
          hoverSpeed={0}
          fadeOut
          fadeOutWidth={0.16}
          renderItem={renderTechCard}
          className="tech-logoloop"
          ariaLabel="Technology stack row 1"
        />

        <LogoLoop
          logos={techRow2}
          speed={42}
          direction="right"
          logoHeight={112}
          gap={18}
          hoverSpeed={0}
          fadeOut
          fadeOutWidth={0.16}
          renderItem={renderTechCard}
          className="tech-logoloop"
          ariaLabel="Technology stack row 2"
        />
      </div>

      <style>{`
        .tech-logoloop {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .tech-logoloop .logoloop__content {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          display: block !important;
        }
        .tech-logoloop .logoloop__item {
          line-height: normal;
        }
        .tech-marquee-card {
          width: 154px;
          height: 108px;
          padding: 1.15rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          text-align: center;
          cursor: default;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--card-shadow);
          transition: all 0.35s var(--ease-out-expo);
        }
        .tech-marquee-card:hover {
          border-color: var(--border-medium);
          background: var(--bg-elevated);
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.32);
        }
        .tech-icon-chip {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--chip-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .tech-marquee-card:hover .tech-icon-chip {
          background: var(--chip-hover-bg);
          color: var(--accent);
          border-color: var(--accent-dim);
          transform: scale(1.05);
        }
        .tech-card-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .tech-marquee-card:hover .tech-card-label {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
