import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <Cookie className="h-14 w-14 text-gold-500" strokeWidth={1.2} />
      <h1 className="mt-6 font-display text-4xl font-semibold text-cocoa-900">This page crumbled away</h1>
      <p className="mt-3 max-w-sm text-cocoa-700">
        We couldn't find what you're looking for. Let's get you back to something delicious.
      </p>
      <Link
        to="/"
        className="focus-ring mt-8 rounded-full bg-berry-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
