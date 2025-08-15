import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fade } from "../utils/animation";
import { Field } from "../components/Contact";
import { contactData } from "../data/Contact";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const apiUrl = import.meta.env.VITE_MAIL_API_URL

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   const formData = {
    name: formRef.current.name.value,
    email: formRef.current.email.value,
    company: formRef.current.company?.value || "",
    message: formRef.current.message.value,
  };


    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const { heading, subheading, benefits, socialLinks, fields, button, footer } = contactData;

  return (
    <section id="contact" className="relative pb-28 pt-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-8 md:grid-cols-2">

          <motion.div {...fade(0)}>
            <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-lg text-white/70">{subheading}</p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((s, idx) => (
                <a key={idx} href={s.href} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            {...fade(0.05, 10)}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.filter(f => !f.textarea).map((f) => (
                <Field key={f.id} {...f} />
              ))}
            </div>
            {fields.filter(f => f.textarea).map((f) => (
              <div key={f.id} className="mt-4">
                <Field {...f} />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-white/90 disabled:opacity-60"
            >
              {isSubmitting ? button.sendingText : button.text}
              <ArrowRight className="h-4 w-4" />
            </button>

            {status === "sent" && (
              <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                Message sent. I’ll reply shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                Failed to send message. Try again later.
              </div>
            )}
          </motion.form>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <div className="mx-auto inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
            <span>{footer.copyrightText.replace("{year}", new Date().getFullYear())}</span>
            <span className="text-white/40">•</span>
            <a href={footer.backToTopHref} className="hover:text-white">{footer.backToTopText}</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

