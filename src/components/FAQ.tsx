import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal } from "./animations";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <div
        style={{
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          id={`faq-btn-${index}`}
          aria-controls={`faq-panel-${index}`}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 0",
            textAlign: "left",
            color: "var(--text-primary)",
            fontSize: "1.05rem",
            fontWeight: 500,
            transition: "color 0.2s ease",
            gap: "1rem",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-primary)")
          }
        >
          <span>{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: isOpen ? "var(--accent-dim)" : "transparent",
              transition: "background 0.3s ease",
            }}
          >
            {isOpen ? (
              <Minus size={14} color="var(--accent)" />
            ) : (
              <Plus size={14} />
            )}
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25 },
              }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="text-body"
                style={{
                  paddingBottom: "1.5rem",
                  maxWidth: "640px",
                  lineHeight: 1.7,
                }}
              >
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
      }}
    >
      <div className="container-main">
        <div
          className="faq-layout"
          style={{
            display: "flex",
            gap: "4rem",
          }}
        >
          {/* Left: Header */}
          <div className="faq-header" style={{ flexShrink: 0 }}>
            <Reveal>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                  FAQ
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-h1 font-display"
                style={{ marginBottom: "1rem" }}
              >
                Common <span className="accent-heading-italic">questions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body" style={{ maxWidth: 320 }}>
                If your question isn't here, reach out — we're happy to talk
                through anything.
              </p>
            </Reveal>
          </div>

          {/* Right: Accordion */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {siteConfig.faq.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-layout {
          flex-direction: row;
        }
        .faq-header {
          width: 320px;
          position: sticky;
          top: 8rem;
          align-self: flex-start;
        }
        @media (max-width: 768px) {
          .faq-layout {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .faq-header {
            width: 100% !important;
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
