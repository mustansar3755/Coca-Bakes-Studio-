import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CocoaImage from "../ui/CocoaImage";

export default function CartDrawer({ open, onClose }) {
  const { items, total, removeItem, setQty } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream-50 shadow-soft"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-gold-300/60 px-6 py-5">
              <h2 className="font-display text-xl font-semibold text-cocoa-900">Your Cart</h2>
              <button onClick={onClose} className="focus-ring rounded-full p-2 hover:bg-cream-100" aria-label="Close cart">
                <X className="h-5 w-5 text-cocoa-900" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-gold-500" strokeWidth={1.3} />
                <p className="text-cocoa-800">Your cart is empty.</p>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="focus-ring mt-2 rounded-full bg-berry-700 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
                >
                  Browse products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3">
                        <CocoaImage src={item.image} alt={item.name} className="h-20 w-20 shrink-0 rounded-xl" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-cocoa-900">{item.name}</p>
                          <p className="text-xs text-cocoa-700">Rs {item.price.toLocaleString()}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-1 rounded-full border border-gold-300 px-1">
                              <button
                                onClick={() => setQty(item.id, item.qty - 1)}
                                className="focus-ring flex h-6 w-6 items-center justify-center rounded-full text-cocoa-800 hover:bg-cream-100"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-5 text-center text-xs font-semibold">{item.qty}</span>
                              <button
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="focus-ring flex h-6 w-6 items-center justify-center rounded-full text-cocoa-800 hover:bg-cream-100"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="focus-ring rounded-full p-1.5 text-berry-700 hover:bg-berry-700/10"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gold-300/60 px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-cocoa-900">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-display text-lg font-semibold">Rs {total.toLocaleString()}</span>
                  </div>
                  <a
                    href={`https://wa.me/923001210019?text=${encodeURIComponent(
                      "Hi Cocoa Bake Studio! I'd like to order:\n" +
                        items.map((i) => `- ${i.name} x${i.qty}`).join("\n") +
                        `\nTotal: Rs ${total.toLocaleString()}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring block w-full rounded-full bg-berry-700 py-3 text-center text-sm font-semibold text-cream-50 transition-transform hover:scale-[1.02]"
                  >
                    Checkout on WhatsApp
                  </a>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
