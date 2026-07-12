import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Star, Quote } from "lucide-react";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import CocoaImage from "../ui/CocoaImage";
import DripDivider from "../ui/DripDivider";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  { value: "4K+", label: "Happy Customers" },
  { value: "8+", label: "Years of Experience" },
  { value: "10K+", label: "Cakes Delivered" },
];

const reviews = [
  { name: "Zeeshan Maqsood", rating: 5, text: "Great taste and beautiful presentation. Really happy with the cake." },
  {
    name: "Muhammad Abdullah",
    rating: 5,
    text: "I ordered a customized cake and I'm really impressed! The design came out beautifully, just like I imagined.",
  },
  { name: "Ahsan Shahzad", rating: 4, text: "Solid flavour, delivered right on time. Will order again for the next event." },
];

export default function Home() {
  const { onAdd } = useOutletContext();
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-cocoa-900">
        <CocoaImage
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80"
          alt="Layered chocolate dream cake"
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400"
          >
            Bahawalpur's Dream Cake Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-cream-50 md:text-6xl"
          >
            Premium desserts, drinks &amp; custom cakes, baked with intention.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 font-script text-3xl text-gold-300"
          >
            The secret ingredient is always love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="focus-ring group flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-cocoa-900 transition-transform hover:scale-105"
            >
              Order Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="focus-ring rounded-full border border-cream-100/40 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-50/70"
          aria-hidden="true"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </section>

      <DripDivider color="var(--color-cream-50)" />

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Menu" title="What are you in the mood for?" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/products/${c.slug}`} className="focus-ring group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <CocoaImage
                    src={c.image}
                    alt={c.name}
                    className="aspect-square"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg font-semibold text-cream-50">{c.name}</p>
                    <p className="text-xs text-cream-100/75">{c.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="bg-cream-100/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="Fresh Today" title="Latest Promotions" />
            <Link
              to="/products"
              className="focus-ring flex items-center gap-1.5 text-sm font-semibold text-berry-700 hover:underline"
            >
              View all products <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-berry-700">Who are we?</p>
            <h2 className="font-display text-3xl font-semibold text-cocoa-900 md:text-4xl">
              Every cake tells a story — let us help you tell yours.
            </h2>
            <p className="mt-5 leading-relaxed text-cocoa-700">
              Cocoa Bake Studio started in a home kitchen in Bahawalpur in 2018, driven by one belief: dessert
              should feel like a celebration, not an afterthought. Today our small team of bakers and decorators
              still hand-finish every dream cake, custom order and cupcake that leaves our studio — recipe-tested,
              never rushed, and always dressed for the occasion.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gold-300/60 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-berry-700">{s.value}</p>
                  <p className="text-xs text-cocoa-700">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-cocoa-900 px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <CocoaImage
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80"
              alt="Baker decorating cookies by hand"
              className="aspect-[4/5] rounded-[2rem]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream-50 p-4 shadow-soft md:block">
              <p className="font-script text-2xl text-berry-700">Made fresh, always.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <DripDivider color="var(--color-cocoa-900)" />

      {/* REVIEWS */}
      <section className="bg-cocoa-900 py-16 text-cream-50 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-3 font-display text-2xl font-semibold">Excellent — 365 Google reviews</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-cream-100/10 bg-cream-50/5 p-6"
              >
                <Quote className="h-5 w-5 text-gold-400" />
                <p className="mt-3 text-sm leading-relaxed text-cream-100/85">{r.text}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-cream-50">{r.name}</p>
                  <div className="flex gap-0.5 text-gold-400">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-gold-300/25 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-5 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-4xl font-bold text-berry-700 md:text-5xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cocoa-800 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
