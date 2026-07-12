import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ShoppingBag } from "lucide-react";
import { categories } from "../data/products";
import { useCart } from "../context/CartContext";
import CocoaSeal from "../ui/CocoaSeal";

const navLink = ({ isActive }) =>
  `relative py-2 text-sm tracking-wide transition-colors focus-ring ${
    isActive ? "text-berry-700" : "text-cocoa-900 hover:text-berry-700"
  }`;

export default function Navbar({ onOpenCart }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gold-300/60 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3 focus-ring" onClick={() => setOpen(false)}>
          <CocoaSeal className="h-11 w-11" />
          <span className="font-display text-lg font-semibold tracking-tight text-cocoa-900">
            Cocoa Bake Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLink} end>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="focus-ring flex items-center gap-1 py-2 text-sm tracking-wide text-cocoa-900 transition-colors hover:text-berry-700"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
            >
              Our Products
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-1 w-64 -translate-x-1/2 rounded-2xl border border-gold-300/60 bg-cream-50 p-2 shadow-soft"
                >
                  <Link
                    to="/products"
                    className="focus-ring block rounded-xl px-3 py-2 text-sm font-semibold text-berry-700 hover:bg-cream-100"
                  >
                    All Products
                  </Link>
                  <div className="my-1 h-px bg-gold-300/60" />
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/products/${c.slug}`}
                      className="focus-ring block rounded-xl px-3 py-2 text-sm text-cocoa-900 hover:bg-cream-100 hover:text-berry-700"
                    >
                      {c.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/gallery" className={navLink}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCart}
            className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full text-cocoa-900 transition-colors hover:bg-cream-100"
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-berry-700 px-1 text-[10px] font-bold text-cream-50">
                {count}
              </span>
            )}
          </button>
          <button
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-cocoa-900 hover:bg-cream-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold-300/60 bg-cream-50 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <Link to="/" className="focus-ring rounded-lg px-2 py-2.5 text-cocoa-900" onClick={() => setOpen(false)}>
                Home
              </Link>
              <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-widest text-gold-500">Our Products</p>
              <Link to="/products" className="focus-ring rounded-lg px-2 py-2.5 text-berry-700" onClick={() => setOpen(false)}>
                All Products
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className="focus-ring rounded-lg px-2 py-2.5 pl-4 text-cocoa-900"
                  onClick={() => setOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
              <div className="my-1 h-px bg-gold-300/60" />
              <Link to="/gallery" className="focus-ring rounded-lg px-2 py-2.5 text-cocoa-900" onClick={() => setOpen(false)}>
                Gallery
              </Link>
              <Link to="/about" className="focus-ring rounded-lg px-2 py-2.5 text-cocoa-900" onClick={() => setOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="focus-ring rounded-lg px-2 py-2.5 text-cocoa-900" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
