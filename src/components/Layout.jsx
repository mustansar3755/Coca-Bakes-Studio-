import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import Toast from "../ui/Toast";
import { CartProvider } from "../context/CartContext";
import WhatsAppButton from "./WhatsAppButton";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const location = useLocation();

  const handleAdd = (product) => {
    setToast({ show: true, message: `${product.name} added to cart` });
    window.clearTimeout(handleAdd._t);
    handleAdd._t = window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
  };

  return (
    <CartProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar onOpenCart={() => setCartOpen(true)} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Outlet context={{ onAdd: handleAdd }} />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toast show={toast.show} message={toast.message} />
      <WhatsAppButton />
    </CartProvider>
  );
}
