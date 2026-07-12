import { useState, useMemo } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import CocoaImage from "../ui/CocoaImage";

export default function Products() {
  const { categorySlug } = useParams();
  const { onAdd } = useOutletContext();
  const [active, setActive] = useState(categorySlug || "all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const activeCategory = categories.find((c) => c.slug === (categorySlug || active));

  return (
    <div>
      <section className="relative overflow-hidden bg-cocoa-900 py-20 text-cream-50">
        <CocoaImage
          src={activeCategory?.image || categories[0].image}
          alt=""
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/70 to-cocoa-900/40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Our Products</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {activeCategory ? activeCategory.name : "Everything from the studio"}
          </h1>
          <p className="mt-3 max-w-xl text-cream-100/75">
            {activeCategory ? activeCategory.tagline : "Dream cakes, custom cakes, cupcakes and cocoa drinks — pick your craving."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-wrap gap-2.5">
          <FilterPill label="All" active={active === "all" && !categorySlug} to="/products" onClick={() => setActive("all")} />
          {categories.map((c) => (
            <FilterPill
              key={c.slug}
              label={c.name}
              active={(categorySlug || active) === c.slug}
              to={`/products/${c.slug}`}
              onClick={() => setActive(c.slug)}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-cocoa-700">No products in this category yet — check back soon.</p>
        ) : (
          <motion.div
            layout
            className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-4"
          >
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onAdd={onAdd} />
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}

function FilterPill({ label, active, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-berry-700 bg-berry-700 text-cream-50"
          : "border-gold-300 text-cocoa-800 hover:border-berry-700 hover:text-berry-700"
      }`}
    >
      {label}
    </Link>
  );
}
