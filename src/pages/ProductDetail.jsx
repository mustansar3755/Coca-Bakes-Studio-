import { useState } from "react";
import { useParams, Link, Navigate, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { Minus, Plus, ShoppingBag, ChevronLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getProductById, categories, getProductsByCategory } from "../data/products";
import CocoaImage from "../ui/CocoaImage";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { onAdd } = useOutletContext();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const category = categories.find((c) => c.slug === product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    onAdd?.(product);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-cocoa-700">
        <Link to="/products" className="focus-ring flex items-center gap-1 hover:text-berry-700">
          <ChevronLeft className="h-4 w-4" /> Our Products
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link to={`/products/${category.slug}`} className="focus-ring hover:text-berry-700">
              {category.name}
            </Link>
          </>
        )}
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CocoaImage
            src={product.gallery[activeImg]}
            alt={product.name}
            className="aspect-square rounded-[1.75rem] bg-cocoa-900"
          />
          {product.gallery.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setActiveImg(i)}
                  className={`focus-ring overflow-hidden rounded-xl border-2 transition-colors ${
                    activeImg === i ? "border-berry-700" : "border-transparent"
                  }`}
                >
                  <CocoaImage src={g} alt="" className="h-16 w-16" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {product.badge && (
            <span className="mb-3 inline-block rounded-full bg-berry-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
              {product.badge}
            </span>
          )}
          <h1 className="font-display text-3xl font-semibold text-cocoa-900 md:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            {product.oldPrice && (
              <span className="text-lg text-cocoa-600 line-through">Rs {product.oldPrice.toLocaleString()}</span>
            )}
            <span className="font-display text-2xl font-semibold text-berry-700">Rs {product.price.toLocaleString()}</span>
          </div>

          <p className="mt-6 leading-relaxed text-cocoa-700">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 rounded-full border border-gold-400 px-2 py-1.5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-cocoa-800 hover:bg-cream-100"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-cocoa-800 hover:bg-cream-100"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="focus-ring flex items-center gap-2 rounded-full bg-cocoa-900 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>

            <a
              href={`https://wa.me/923001210019?text=${encodeURIComponent(
                `Hi! I'd like to order ${qty} x ${product.name} (Rs ${(product.price * qty).toLocaleString()})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <FaWhatsapp className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-gold-300/60 pt-6 text-sm">
            <div>
              <dt className="text-cocoa-600">Category</dt>
              <dd className="font-medium text-cocoa-900">{category?.name}</dd>
            </div>
            <div>
              <dt className="text-cocoa-600">Notice needed</dt>
              <dd className="font-medium text-cocoa-900">24–48 hours</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-cocoa-900">You might also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onAdd={onAdd} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
