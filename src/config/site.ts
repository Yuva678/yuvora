// ─── Site Configuration ───
// Central configuration file for all editable content.
// Replace placeholder values with real agency details.

export const siteConfig = {
  agency: {
    name: "Yuvora",
    tagline: "Where Digital Meets Intelligence",
    description:
      "We build high-performing websites and intelligent automation systems that help ambitious businesses work smarter and grow.",
    yearFounded: 2024,
  },

  contact: {
    email: "yuvadito@gmail.com",
    phone: "+91 7483341946",
    address: "Remote-first · Worldwide",
    calendlyUrl: "#contact",
  },

  social: {
    twitter: "https://twitter.com/yuvora",
    linkedin: "https://linkedin.com/company/yuvora",
    github: "https://github.com/yuvora",
    dribbble: "https://dribbble.com/yuvora",
  },

  navigation: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: ["Build Smarter.", "Automate Better.", "Grow Faster."],
    subheadline:
      "We design high-performing websites and intelligent automation systems that help ambitious businesses work smarter and scale.",
    cta: { label: "Start a Project", href: "#contact" },
    ctaSecondary: { label: "Explore Our Work", href: "#work" },
  },

  services: [
    {
      id: "web",
      title: "Website Design & Development",
      description:
        "Beautiful, fast, conversion-focused websites built with modern technology. From brand-new builds to complete redesigns.",
      features: [
        "Business & agency websites",
        "Landing pages & microsites",
        "Responsive frontend development",
        "Website redesigns & migrations",
        "Custom web applications",
      ],
      icon: "Monitor",
    },
    {
      id: "automation",
      title: "AI Automation",
      description:
        "Intelligent workflows that eliminate repetitive tasks and let your team focus on what matters. Practical AI, not hype.",
      features: [
        "Lead capture & qualification",
        "CRM integrations & sync",
        "Automated email follow-ups",
        "AI document & data processing",
        "Repetitive workflow automation",
      ],
      icon: "Zap",
    },
    {
      id: "integrations",
      title: "Business Integrations",
      description:
        "Connect your tools, unify your data, and build systems that actually talk to each other. No more manual copy-paste.",
      features: [
        "Website-to-CRM connections",
        "API integrations & middleware",
        "Forms, notifications & reporting",
        "Connected business tool ecosystems",
        "Custom automation pipelines",
      ],
      icon: "Link",
    },
  ],

  projects: [
    {
      id: "meridian-digital",
      title: "Meridian Digital",
      category: "Website & Lead Generation",
      description:
        "A high-converting business website with integrated lead capture, automated qualification, and CRM pipeline management.",
      tags: ["React", "Node.js", "HubSpot API", "n8n"],
      color: "#1a1a2e",
      image: "/projects/meridian-digital.jpg",
      isConcept: true,
    },
    {
      id: "pulse-analytics",
      title: "Pulse Analytics",
      category: "Custom Web Application",
      description:
        "A real-time business intelligence dashboard aggregating data from multiple sources with AI-powered insight generation.",
      tags: ["TypeScript", "Python", "PostgreSQL", "OpenAI"],
      color: "#0a192f",
      image: "/projects/pulse-analytics.jpg",
      isConcept: true,
    },
    {
      id: "flowstate-crm",
      title: "FlowState CRM",
      category: "AI-Powered Lead Workflow",
      description:
        "An automated lead qualification and nurture system that scores prospects, triggers personalized follow-ups, and syncs with CRM.",
      tags: ["n8n", "Zapier", "GPT-4", "Salesforce"],
      color: "#1a0a2e",
      image: "/projects/flowstate-crm.jpg",
      isConcept: true,
    },
    {
      id: "atlas-group",
      title: "Atlas Group",
      category: "CRM & Follow-up Automation",
      description:
        "End-to-end client communication automation — from first touch to signed contract — reducing response time by design.",
      tags: ["React", "Firebase", "SendGrid", "n8n"],
      color: "#0f2027",
      image: "/projects/atlas-group.jpg",
      isConcept: true,
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "We learn your business, goals, audience, and pain points. Every great project starts with understanding.",
    },
    {
      step: "02",
      title: "Strategize",
      description:
        "We define the experience architecture, automation plan, and technical approach before touching any code.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Design, develop, integrate, and test — iterating with you at every stage until it's right.",
    },
    {
      step: "04",
      title: "Launch & Improve",
      description:
        "Deploy, measure real performance, and continuously improve. A launch is a beginning, not an end.",
    },
  ],

  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "n8n",
    "PostgreSQL",
    "Firebase",
    "Vercel",
    "Figma",
    "OpenAI API",
  ],

  benefits: [
    {
      title: "Clear Communication",
      description: "No jargon, no vanishing acts. You'll always know where things stand.",
    },
    {
      title: "Purposeful Design",
      description: "Every pixel serves a goal. Beautiful interfaces that convert and perform.",
    },
    {
      title: "Practical Automation",
      description: "Automation that solves real problems — not buzzwords dressed as features.",
    },
    {
      title: "Responsive Development",
      description: "Fast iteration cycles with transparent progress and open collaboration.",
    },
    {
      title: "Maintainable Solutions",
      description: "Clean code, clear documentation, and systems you can actually manage.",
    },
    {
      title: "Long-term Partnership",
      description: "We don't disappear after launch. Your growth is our success metric.",
    },
  ],

  faq: [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in three areas: custom website design and development, AI-powered business automation, and system integrations. Most clients engage us for a combination — like building a website with integrated lead capture and automated follow-up workflows.",
    },
    {
      question: "Can you build a website and automate our lead process together?",
      answer:
        "Absolutely — that's our sweet spot. We design the website, build the forms and tracking, connect everything to your CRM, and set up automated qualification and follow-up sequences. One team, one cohesive system.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "A brief overview of your business, what you're trying to achieve, and any existing tools you use. We'll schedule a discovery call to dig deeper and define the scope together.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on scope. A focused landing page might take 2–3 weeks. A full website with automation integrations typically runs 6–10 weeks. We'll give you a realistic timeline after scoping.",
    },
    {
      question: "Can you integrate with our existing CRM or tools?",
      answer:
        "Most likely, yes. We work with HubSpot, Salesforce, Pipedrive, Notion, Airtable, and many other tools. If it has an API, we can probably connect it.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We offer ongoing support and improvement packages. We'll monitor performance, fix issues, and help you iterate based on real data. We don't build and vanish.",
    },
  ],
} as const;
