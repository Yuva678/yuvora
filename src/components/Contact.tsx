import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { Reveal } from "./animations";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: siteConfig.contact.web3formsKey,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          budget: formData.budget || "Not specified",
          message: formData.message,
          from_name: "Yuvora Agency Portfolio",
          subject: `New Inquiry from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormState("success");
        setFormData({ name: "", email: "", company: "", budget: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle = (fieldName: string) => ({
    width: "100%",
    padding: "0.875rem 1rem",
    background: "var(--input-bg)",
    border: `1px solid ${errors[fieldName] ? "rgba(255,80,80,0.5)" : "var(--border-subtle)"}`,
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease, color 0.2s ease",
  });

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "0.8rem",
    fontWeight: 500 as const,
    color: "var(--text-secondary)",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-main">
        <div className="contact-layout" style={{ display: "flex", gap: "4rem" }}>
          {/* Left: Info */}
          <div className="contact-info" style={{ flex: 1 }}>
            <Reveal>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span className="text-label" style={{ color: "var(--text-secondary)" }}>
                  Get in Touch
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-h1 font-display"
                style={{ marginBottom: "1.5rem" }}
              >
                Have a better way to <span className="accent-heading-italic">grow</span> in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-body-lg"
                style={{ marginBottom: "2.5rem", maxWidth: 440 }}
              >
                Let's build the website or workflow that moves your business
                forward. Tell us what you're working on.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <p className="text-label" style={{ marginBottom: "0.35rem" }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      transition: "color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-label" style={{ marginBottom: "0.35rem" }}>
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s|\(|\)/g, "")}`}
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      transition: "color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="text-label" style={{ marginBottom: "0.35rem" }}>
                    Location
                  </p>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap" style={{ flex: 1, maxWidth: 520 }}>
            <Reveal delay={0.15}>
              <div
                className="card"
                style={{
                  padding: "2.5rem 2rem",
                }}
              >
                {formState === "success" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "2rem 0",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(200, 255, 0, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircle size={32} color="var(--accent)" />
                    </div>
                    <h3 className="text-h3">Message sent!</h3>
                    <p className="text-body">
                      Thanks for reaching out! We'll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="btn-secondary"
                      style={{ marginTop: "1rem" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : formState === "error" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "2rem 0",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(255, 80, 80, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AlertCircle size={32} color="#ff5050" />
                    </div>
                    <h3 className="text-h3">Something went wrong</h3>
                    <p className="text-body">
                      We couldn't send your message. Please try again or email
                      us directly at{" "}
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        style={{ color: "var(--accent)", textDecoration: "underline" }}
                      >
                        {siteConfig.contact.email}
                      </a>.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="btn-secondary"
                      style={{ marginTop: "1rem" }}
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div
                      className="contact-form-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--border-strong)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor =
                              errors.name
                                ? "rgba(255,80,80,0.5)"
                                : "var(--border-subtle)")
                          }
                          placeholder="Your name"
                          style={inputStyle("name")}
                        />
                        {errors.name && (
                          <p
                            style={{
                              color: "#ff5050",
                              fontSize: "0.75rem",
                              marginTop: "0.35rem",
                            }}
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--border-strong)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor =
                              errors.email
                                ? "rgba(255,80,80,0.5)"
                                : "var(--border-subtle)")
                          }
                          placeholder="your@email.com"
                          style={inputStyle("email")}
                        />
                        {errors.email && (
                          <p
                            style={{
                              color: "#ff5050",
                              fontSize: "0.75rem",
                              marginTop: "0.35rem",
                            }}
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className="contact-form-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <label htmlFor="company" style={labelStyle}>
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--border-strong)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--border-subtle)")
                          }
                          placeholder="Company name"
                          style={inputStyle("company")}
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" style={labelStyle}>
                          Budget Range
                        </label>
                        <div style={{ position: "relative" }}>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            style={{
                              ...inputStyle("budget"),
                              cursor: "pointer",
                              appearance: "none",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              paddingRight: "2.5rem",
                              color: formData.budget ? "var(--text-primary)" : "var(--text-muted)",
                            }}
                          >
                            <option value="" disabled>Select range</option>
                            <option value="5k-10k">$5k — $10k</option>
                            <option value="10k-25k">$10k — $25k</option>
                            <option value="25k-50k">$25k — $50k</option>
                            <option value="50k+">$50k+</option>
                          </select>
                          {/* Custom dropdown arrow */}
                          <span
                            style={{
                              position: "absolute",
                              right: "1rem",
                              top: "50%",
                              transform: "translateY(-50%)",
                              pointerEvents: "none",
                              color: "var(--text-muted)",
                              fontSize: "0.7rem",
                              lineHeight: 1,
                            }}
                          >
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <label htmlFor="message" style={labelStyle}>
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--border-strong)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            errors.message
                              ? "rgba(255,80,80,0.5)"
                              : "var(--border-subtle)")
                        }
                        placeholder="What are you looking to build? Any timeline or goals in mind?"
                        rows={5}
                        style={{
                          ...inputStyle("message"),
                          resize: "vertical",
                          minHeight: "120px",
                        }}
                      />
                      {errors.message && (
                        <p
                          style={{
                            color: "#ff5050",
                            fontSize: "0.75rem",
                            marginTop: "0.35rem",
                          }}
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={formState === "submitting"}
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        opacity: formState === "submitting" ? 0.7 : 1,
                      }}
                    >
                      {formState === "submitting" ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        select option {
          background: var(--bg-card);
          color: var(--text-primary);
          padding: 0.5rem;
        }
        .contact-layout {
          flex-direction: row;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          .contact-form-wrap {
            max-width: 100% !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
