import React from 'react';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={36} reverse duration={25} durationOnHover={50}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center gap-4 bg-neutral-950/80 hover:bg-neutral-900/60 border border-neutral-800 hover:border-white pl-3 pr-6 py-3 rounded-full transition-all duration-300 select-none shrink-0 shadow-sm"
          >
            {/* Expanded Premium Circle Logo Container */}
            <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center p-2.5 overflow-hidden border border-neutral-800 shrink-0">
              <img
                alt={logo.alt}
                className="max-w-full max-h-full object-contain pointer-events-none transition-all duration-300"
                loading="lazy"
                src={logo.src}
              />
            </div>
            {/* Enriched Bold Brand Name Typography */}
            <span className="text-sm md:text-base font-extrabold text-white tracking-wide whitespace-nowrap uppercase font-sans">
              {logo.alt}
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
