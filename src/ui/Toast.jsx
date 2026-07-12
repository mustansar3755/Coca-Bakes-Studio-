import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Toast({ message, show }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[80] flex justify-center px-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-2.5 rounded-full bg-cocoa-900 px-5 py-3 text-sm font-medium text-cream-50 shadow-soft"
          >
            <CheckCircle2 className="h-4 w-4 text-gold-400" />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
