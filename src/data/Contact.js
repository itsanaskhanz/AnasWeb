import { Github, Linkedin, Twitter } from "lucide-react";

export const contactData = {
  heading: "Let’s build your next big thing",
  subheading: "Send a note with your goals. I’ll respond with a crisp plan, timeline, and quote.",
  benefits: [
    "7‑day design & prototype",
    "Transparent pricing, no surprises",
    "Post‑launch support & docs",
  ],
  socialLinks: [
    { icon: Github, label: "Github", href: "https://github.com/itsanaskhanz" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/itsanaskhanz/" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/itsanaskhanz" },
  ],
  fields: [
    { id: "name", label: "Your name", placeholder: "Anas Khan" },
    { id: "email", type: "email", label: "Email", placeholder: "you@example.com" },
    { id: "company", label: "Company (optional)", placeholder: "Your company" },
    { id: "message", label: "Project details", textarea: true, placeholder: "Tell me about your goals…" },
  ],
  button: { text: "Send Message", sendingText: "Sending…" },
  footer: {
    copyrightText: "© 2025 Anas Khan",
    backToTopText: "Back to top",
    backToTopHref: "#home",
  },
};
