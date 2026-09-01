import React from 'react';

export default function MarqueeText({
  items = [],
  separator = "•",
  speed = "normal",
  reverse = false,
  outline = false,
  className = ""
}) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  const animationClass = reverse 
    ? (speed === 'fast' ? 'animate-infinite-scroll-fast' : 'animate-infinite-scroll')
    : (speed === 'fast' ? 'animate-infinite-scroll-fast' : 'animate-infinite-scroll');

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap py-3 border-y border-white/10 select-none ${className}`}>
      <div className={animationClass} style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-4 sm:mx-6">
            <span
              className={`font-display text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase transition-colors duration-200 ${
                outline
                  ? 'text-stroke-1 hover:text-white'
                  : 'text-paper hover:text-crimson'
              }`}
            >
              {item}
            </span>
            <span className="ml-8 text-crimson font-mono text-lg font-bold">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
