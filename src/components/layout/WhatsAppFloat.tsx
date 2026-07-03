export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/27697714283?text=Hi%20Virtuo%20Designs%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.4s]" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200">
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.438-2.012A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.485-.29-5.007 1.195 1.235-4.877-.317-.502A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.397-.199-2.35-1.16-2.715-1.292-.365-.132-.63-.198-.896.199-.265.397-1.03 1.292-1.262 1.558-.232.265-.464.298-.862.1-.397-.199-1.676-.618-3.193-1.97-1.18-1.052-1.977-2.351-2.21-2.748-.231-.397-.025-.612.174-.81.178-.178.397-.464.596-.696.198-.232.265-.397.397-.662.133-.265.067-.497-.033-.696-.1-.199-.896-2.16-1.228-2.957-.323-.777-.652-.672-.896-.684l-.763-.013a1.46 1.46 0 0 0-1.062.497c-.365.397-1.394 1.36-1.394 3.317s1.427 3.847 1.626 4.112c.198.265 2.81 4.293 6.808 6.022.952.411 1.695.657 2.274.84.955.304 1.825.261 2.513.158.766-.114 2.35-.96 2.682-1.888.331-.928.331-1.724.232-1.888-.1-.165-.365-.265-.763-.464z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
