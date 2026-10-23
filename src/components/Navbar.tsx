import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Magnetic } from "./animations";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    lastScrollY.current = latest;

    setIsScrolled(latest > 50);

    if (latest > 300) {
      setHidden(direction === "down");
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
          transition: "padding 0.3s ease",
        }}
      >
        <div className="container-main">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.65rem 1.5rem",
              borderRadius: "100px",
              background: isScrolled
                ? "var(--nav-bg-scrolled)"
                : "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${isScrolled ? "var(--nav-border-scrolled)" : "var(--nav-border)"}`,
              transition: "all 0.3s ease",
            }}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
              aria-label={`${siteConfig.agency.name} — go to top`}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "var(--accent)",
                  color: "var(--accent-text)",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                {siteConfig.agency.name[0]}
              </span>
              <span>{siteConfig.agency.name}</span>
            </a>

            {/* Desktop Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
              className="nav-desktop-links"
            >
              {siteConfig.navigation.map((item) => (
                <Magnetic key={item.label} strength={0.15}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {item.label}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Desktop Actions: Theme Toggle + CTA */}
            <div
              className="nav-desktop-actions"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
              }}
            >
              <ThemeToggle size="md" />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary"
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.8rem" }}
              >
                Start a Project
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile Controls (Theme Toggle + Hamburger) */}
            <div
              className="nav-mobile-controls"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ThemeToggle size="sm" />
              <button
                className="nav-mobile-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                style={{
                  padding: "0.5rem",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "var(--mobile-menu-bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.75rem",
              padding: "2rem",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {siteConfig.navigation.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                delay: siteConfig.navigation.length * 0.05,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1rem",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start a Project
                <ArrowRight size={16} />
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "100px",
                  background: "var(--chip-bg)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Switch Theme</span>
                <ThemeToggle size="sm" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS for nav */}
      <style>{`
        .nav-desktop-links {
          display: flex !important;
        }
        .nav-desktop-actions {
          display: flex !important;
        }
        .nav-mobile-controls {
          display: none !important;
        }
        @media (max-width: 860px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-desktop-actions {
            display: none !important;
          }
          .nav-mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
