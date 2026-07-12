import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";

const socials = [
  { icon: FaWhatsapp, href: "https://wa.me/923001210019", label: "WhatsApp" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="bg-cream-100/60 py-16 text-center md:py-20">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's plan something sweet"
          subtitle="Questions about an order, a custom cake, or a bulk event? Reach out — we usually reply within a few hours."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <InfoRow icon={Phone} title="Call or WhatsApp" text="+92 300 1210019" />
            <InfoRow icon={Mail} title="Email" text="hello@cocoabakestudio.com" />
            <InfoRow icon={MapPin} title="Studio" text="Bahawalpur, Punjab, Pakistan" />
            <InfoRow icon={Clock} title="Hours" text="Daily, 11:00 AM – 10:00 PM" />

            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-cocoa-900 text-gold-300 transition-transform hover:scale-110"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-gold-300/60">
              <iframe
                title="Cocoa Bake Studio location"
                className="h-56 w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=Bahawalpur%2C%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[2rem] bg-cream-100/60 p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-berry-700" />
                <p className="font-display text-xl font-semibold text-cocoa-900">Message sent!</p>
                <p className="max-w-xs text-sm text-cocoa-700">
                  Thanks, {form.name.split(" ")[0] || "friend"} — we'll get back to you shortly. For anything urgent,
                  message us on WhatsApp.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="focus-ring mt-2 text-sm font-semibold text-berry-700 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="focus-ring w-full rounded-xl border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-cocoa-900 placeholder:text-cocoa-600/50"
                      placeholder="Amna Malik"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input
                      className="focus-ring w-full rounded-xl border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-cocoa-900 placeholder:text-cocoa-600/50"
                      placeholder="+92 3xx xxxxxxx"
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="focus-ring w-full rounded-xl border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-cocoa-900 placeholder:text-cocoa-600/50"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Tell us about your order">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="focus-ring w-full resize-none rounded-xl border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-cocoa-900 placeholder:text-cocoa-600/50"
                    placeholder="Occasion, flavour, size, date needed..."
                  />
                </Field>
                <button
                  type="submit"
                  className="focus-ring flex items-center gap-2 rounded-full bg-berry-700 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-berry-700/10 text-berry-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-cocoa-600">{title}</p>
        <p className="font-medium text-cocoa-900">{text}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-cocoa-600">{label}</span>
      {children}
    </label>
  );
}
