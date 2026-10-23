import React from "react";
import { siteConfig } from "../config/site";

const socialIcons: Record<string, React.ReactNode> = {
  twitter: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  x: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  dribbble: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.059-2.707-.55-5.228-.216a24.238 24.238 0 0 1-.955-2.029c2.909-1.295 4.093-2.916 4.253-3.069zm-5.748 1.62c.328.696.657 1.417.962 2.15-3.08.877-6.23.948-6.609.954.673-1.803 2.128-3.23 3.968-3.864.55-.17 1.135-.262 1.679-.24zm-8.435 5.77a8.528 8.528 0 0 1 .472-2.146c.465-.008 3.993-.09 7.42-.997.234.526.452 1.05.65 1.57-2.617 1.116-4.992 3.197-6.059 4.39-.739-.816-1.285-1.782-1.483-2.817zm2.84 4.54c.94-1.077 3.09-2.981 5.565-4.043.43 1.157.778 2.378 1.01 3.633a8.51 8.51 0 0 1-5.074 1.768c-.534 0-1.049-.074-1.501-.158v-.001zm8.033 1.353c-.221-1.16-.543-2.288-.94-3.35 2.316-.363 4.364.218 4.628.297a8.544 8.544 0 0 1-3.688 3.053zm3.93-4.664c-.337-.1-2.639-.757-5.263-.332-.12-.27-.245-.54-.373-.807 2.628-.367 5.253.155 5.636.235v.904z" />
    </svg>
  ),
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-primary)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container-main">
        {/* Top section */}
        <div className="footer-grid" style={{ display: "grid", gap: "3rem", marginBottom: "4rem" }}>
          {/* Brand — Logo is now clickable */}
          <div>
            <a
              href="#"
              onClick={handleScrollToTop}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
                textDecoration: "none",
                color: "inherit",
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
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {siteConfig.agency.name}
              </span>
            </a>
            <p
              className="text-body"
              style={{ maxWidth: 280, fontSize: "0.9rem" }}
            >
              Websites and automation systems that help ambitious businesses
              work smarter and grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s",
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
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s|\(|\)/g, "")}`}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                {siteConfig.contact.address}
              </li>
            </ul>
            {/* Social */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.25rem",
              }}
            >
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  className="footer-social-link"
                >
                  {socialIcons[name.toLowerCase()] || (
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase" }}>
                      {name.slice(0, 2)}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "1.5rem" }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            © {currentYear} {siteConfig.agency.name}. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Designed & built with purpose.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
        }
        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--chip-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .footer-social-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--accent-glow);
        }
        :root[data-theme="light"] .footer-social-link:hover,
        html.light .footer-social-link:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
          background: rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
