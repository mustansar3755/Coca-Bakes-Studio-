import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import CocoaImage from "../ui/CocoaImage";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index = 0, onAdd }) {
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 1);
    onAdd?.(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: "easeOut" }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="focus-ring block">
        <div className="relative overflow-hidden rounded-2xl bg-cocoa-900">
          <CocoaImage
            src={product.image}
            alt={product.name}
            className="aspect-[4/5]"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-berry-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <button
            onClick={handleAdd}
            className="focus-ring absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-gold-500 text-cocoa-900 opacity-0 shadow-soft transition-all duration-300 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="mt-3">
          <h3 className="font-display text-[15px] font-medium leading-snug text-cocoa-900 group-hover:text-berry-700">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            {product.oldPrice && (
              <span className="text-xs text-cocoa-600 line-through">Rs {product.oldPrice.toLocaleString()}</span>
            )}
            <span className="font-semibold text-berry-700">Rs {product.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
