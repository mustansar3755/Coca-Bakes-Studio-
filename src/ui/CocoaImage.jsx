import { useState } from "react";
import { Cookie } from "lucide-react";

export default function CocoaImage({ src, alt, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-cocoa-800 via-cocoa-700 to-berry-700 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Cookie className="h-8 w-8 text-gold-300/70" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
