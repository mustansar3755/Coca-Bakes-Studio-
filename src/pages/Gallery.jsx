import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import CocoaImage from "../ui/CocoaImage";
import SectionHeading from "../ui/SectionHeading";

const gallery = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80", caption: "Double Chocolate Dream Cake" },
  { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=80", caption: "Unicorn custom cake, in progress" },
  { src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=900&q=80", caption: "Lilac swirl cupcakes" },
  { src: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900&q=80", caption: "Signature cocoa latte" },
  { src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80", caption: "Pistachio fudge brownie" },
  { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&q=80", caption: "Blueberry cheesecake slice" },
  { src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=900&q=80", caption: "Gold number birthday cake" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80", caption: "Behind the scenes at the studio" },
  { src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=900&q=80", caption: "Cookies & cream cupcakes" },
  { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80", caption: "Salted caramel cookie shake" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80", caption: "Standard Dream Cake" },
  { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80", caption: "Fresh cheesecake, plated" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  const go = (dir) => {
    setActive((i) => (i + dir + gallery.length) % gallery.length);
  };

  return (
    <div>
      <section className="bg-cream-100/60 py-16 text-center md:py-20">
        <SectionHeading eyebrow="Gallery" title="A peek inside the studio" subtitle="Everything you see here is our own work — piped, poured and boxed by hand." />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src + i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="focus-ring group block w-full overflow-hidden rounded-2xl"
            >
              <div className="relative">
                <CocoaImage src={g.src} alt={g.caption} className="w-full" imgClassName="transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-left text-xs font-medium text-cream-50">{g.caption}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-5"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="focus-ring absolute right-5 top-5 rounded-full bg-cream-50/10 p-2 text-cream-50 hover:bg-cream-50/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="focus-ring absolute left-4 rounded-full bg-cream-50/10 p-2 text-cream-50 hover:bg-cream-50/20 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-3xl"
            >
              <CocoaImage src={gallery[active].src} alt={gallery[active].caption} className="max-h-[70vh] rounded-2xl" imgClassName="object-contain" />
              <p className="mt-3 text-center text-sm text-cream-100/80">{gallery[active].caption}</p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="focus-ring absolute right-4 rounded-full bg-cream-50/10 p-2 text-cream-50 hover:bg-cream-50/20 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
