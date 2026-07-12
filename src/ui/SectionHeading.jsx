import { motion } from "motion/react";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-berry-700">
          {isCenter && <span className="h-px w-8 bg-gold-500" />}
          {eyebrow}
          {isCenter && <span className="h-px w-8 bg-gold-500" />}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-cocoa-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-cocoa-700">{subtitle}</p>}
    </motion.div>
  );
}
