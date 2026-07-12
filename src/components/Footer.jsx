import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { categories } from "../data/products";
import CocoaSeal from "../ui/CocoaSeal";

const socials = [
  { icon: FaWhatsapp, href: "https://wa.me/923001210019", label: "WhatsApp" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cocoa-900 text-cream-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-berry-700/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <CocoaSeal className="h-12 w-12" />
              <span className="font-display text-xl font-semibold text-cream-50">Cocoa Bake Studio</span>
            </div>
            <p className="mt-4 max-w-xs font-script text-2xl text-gold-300">The secret ingredient is always love.</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Hand-finished dream cakes, custom celebration cakes, cupcakes and cocoa drinks, baked fresh in
              Bahawalpur since 2018.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              <li><Link className="focus-ring transition-colors hover:text-gold-300" to="/">Home</Link></li>
              <li><Link className="focus-ring transition-colors hover:text-gold-300" to="/products">Our Products</Link></li>
              <li><Link className="focus-ring transition-colors hover:text-gold-300" to="/gallery">Gallery</Link></li>
              <li><Link className="focus-ring transition-colors hover:text-gold-300" to="/about">About Us</Link></li>
              <li><Link className="focus-ring transition-colors hover:text-gold-300" to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">Categories</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link className="focus-ring transition-colors hover:text-gold-300" to={`/products/${c.slug}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">Visit or say hello</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> +92 300 1210019
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> hello@cocoabakestudio.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Bahawalpur, Punjab, Pakistan
              </li>
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full border border-gold-400/30 bg-cream-50/5 p-1.5 pl-4"
            >
              <input
                type="email"
                required
                placeholder="Your email for sweet updates"
                className="focus-ring w-full bg-transparent text-sm text-cream-50 placeholder:text-cream-100/50"
              />
              <button
                type="submit"
                className="focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-cocoa-900 transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors hover:bg-gold-500 hover:text-cocoa-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-6 text-xs text-cream-100/60 md:flex-row">
          <p>© {new Date().getFullYear()} Cocoa Bake Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/" className="focus-ring hover:text-gold-300">Privacy Policy</Link>
            <span>Design demo by your web team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
