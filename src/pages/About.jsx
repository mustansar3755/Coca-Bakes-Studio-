import { motion } from "motion/react";
import { Heart, Leaf, Clock3, Sparkles } from "lucide-react";
import CocoaImage from "../ui/CocoaImage";
import SectionHeading from "../ui/SectionHeading";
import DripDivider from "../ui/DripDivider";

const values = [
  { icon: Heart, title: "Made with care", text: "Every order is hand-finished by a real decorator, not a production line." },
  { icon: Leaf, title: "Honest ingredients", text: "Imported cocoa, real butter, and no shortcuts on flavour." },
  { icon: Clock3, title: "Baked to order", text: "Nothing sits in a freezer waiting — we bake in small daily batches." },
  { icon: Sparkles, title: "Designed for you", text: "Custom cakes are sketched and approved with you before we bake." },
];

const timeline = [
  { year: "2018", text: "Started as a home-kitchen bakery in Bahawalpur with a single dream cake recipe." },
  { year: "2020", text: "Opened our first studio kitchen and introduced custom celebration cakes." },
  { year: "2022", text: "Launched cupcakes, coffee and shakes to round out the menu." },
  { year: "2026", text: "4,000+ happy customers and 10,000+ cakes delivered across the city." },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-cocoa-900 py-24 text-cream-50">
        <CocoaImage
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 to-cocoa-900/60" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Who Are We</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Where your sweetest dreams come to life
          </h1>
          <p className="mt-5 leading-relaxed text-cream-100/80">
            Welcome to Cocoa Bake Studio. We specialise in a delightful array of confections — dream cakes,
            cheesecakes, custom cakes, cupcakes and brownies — that are as beautiful as they are delicious.
          </p>
        </div>
      </section>

      <DripDivider color="var(--color-cream-50)" flip />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <CocoaImage
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=80"
              alt="Decorator finishing a custom cake"
              className="aspect-[4/5] rounded-[2rem]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-berry-700">Our Story</p>
            <h2 className="font-display text-3xl font-semibold text-cocoa-900 md:text-4xl">
              From one dream cake to a studio full of them.
            </h2>
            <p className="mt-5 leading-relaxed text-cocoa-700">
              Cocoa Bake Studio began with a single recipe, baked in a home kitchen for friends and neighbours who
              kept asking for more. What started as a hobby became a small studio built around one idea: dessert
              should feel personal.
            </p>
            <p className="mt-4 leading-relaxed text-cocoa-700">
              Whether you're celebrating a birthday, a wedding, or just a Tuesday that deserves cake, our bakers
              treat every order as the centrepiece of someone's day. Each creation is customised to reflect your
              vision, so the experience feels as memorable as the cake itself.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-100/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="What we stand for" title="The values behind every box" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-cream-50 p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-berry-700/10 text-berry-700">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cocoa-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-700">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Milestones" title="Our journey so far" />
        <div className="relative mt-14 space-y-10 border-l border-gold-400/50 pl-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[38px] flex h-5 w-5 items-center justify-center rounded-full bg-berry-700 ring-4 ring-cream-50" />
              <p className="font-display text-xl font-semibold text-berry-700">{t.year}</p>
              <p className="mt-1 text-cocoa-700">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
