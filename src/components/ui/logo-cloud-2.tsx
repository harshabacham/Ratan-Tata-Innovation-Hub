import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  render?: () => React.ReactNode;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  // Define our custom, beautifully rendered local & corporate partner brand logos
  const brands: Record<string, Logo> = {
    rtih: {
      alt: "RTIH Logo",
      render: () => (
        <svg className="h-5.5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16 L12 6 L20 16 L12 26 Z" fill="url(#rtih-grad)" />
          <path d="M12 6 L12 26" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="32" y="21" fill="#FFFFFF" fontSize="13" fontWeight="950" letterSpacing="0.12em" fontFamily="Inter, sans-serif">RTI HUB</text>
          <defs>
            <linearGradient id="rtih-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    adani: {
      alt: "Adani Group Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" fill="url(#lc-adani-grad1)" />
          <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="url(#lc-adani-grad2)" strokeWidth="3" strokeLinecap="round" />
          <text x="32" y="21" fill="#FFFFFF" fontSize="13" fontWeight="900" letterSpacing="0.1em" fontFamily="Inter, sans-serif">ADANI</text>
          <defs>
            <linearGradient id="lc-adani-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="lc-adani-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    navayuga: {
      alt: "Navayuga Group Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22V10L12 18L20 10V22" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 18V24" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <text x="32" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.12em" fontFamily="Inter, sans-serif">NAVAYUGA</text>
        </svg>
      )
    },
    amararaja: {
      alt: "Amara Raja Group Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="18" height="18" rx="4" fill="#781515" />
          <circle cx="11" cy="16" r="4" fill="#FBBF24" />
          <path d="M9 16H13M11 14V18" stroke="#781515" strokeWidth="1.5" strokeLinecap="round" />
          <text x="30" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.12em" fontFamily="Inter, sans-serif">AMARA RAJA</text>
        </svg>
      )
    },
    iit: {
      alt: "IIT Tirupati Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="11,6 19,20 3,20" fill="none" stroke="#22D3EE" strokeWidth="2" />
          <polygon points="11,10 16,18 6,18" fill="#22D3EE" />
          <text x="28" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.06em" fontFamily="Inter, sans-serif">IIT TIRUPATI</text>
        </svg>
      )
    },
    iiser: {
      alt: "IISER Tirupati Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="16" r="6" stroke="#818CF8" strokeWidth="1.5" fill="none" />
          <ellipse cx="11" cy="16" rx="7" ry="2" stroke="#F43F5E" strokeWidth="1.2" fill="none" transform="rotate(30, 11, 16)" />
          <ellipse cx="11" cy="16" rx="7" ry="2" stroke="#10B981" strokeWidth="1.2" fill="none" transform="rotate(-30, 11, 16)" />
          <text x="26" y="21" fill="#FFFFFF" fontSize="11" fontWeight="900" letterSpacing="0.04em" fontFamily="Inter, sans-serif">IISER TIRUPATI</text>
        </svg>
      )
    },
    unibazar: {
      alt: "Unibazar Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8C4 8 6 18 12 18C18 18 20 8 20 8" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
          <circle cx="9" cy="23" r="2.5" fill="#F97316" />
          <circle cx="15" cy="23" r="2.5" fill="#F97316" />
          <text x="28" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.10em" fontFamily="Inter, sans-serif">UNIBAZAR</text>
        </svg>
      )
    },
    ap: {
      alt: "AP Innovation Logo",
      render: () => (
        <svg className="h-5 w-auto opacity-85 hover:opacity-100 transition-opacity" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16C4 16 12 4 20 16C20 16 12 28 4 16Z" stroke="#06B6D4" strokeWidth="2.5" />
          <circle cx="12" cy="16" r="4.5" fill="#06B6D4" />
          <text x="28" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.08em" fontFamily="Inter, sans-serif">AP INNOVATION</text>
        </svg>
      )
    }
  };

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-white/[0.04] md:grid-cols-4 select-none",
        className
      )}
      {...props}
    >
      {/* Dynamic line connector across screen border top */}
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/[0.04]" />

      {/* Row 1, Col 1: Ratan Tata Innovation Hub */}
      <LogoCard
        className="relative border-r border-b border-white/[0.04] bg-slate-950/20"
        logo={brands.rtih}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-700 pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1, Col 2: Adani Group */}
      <LogoCard
        className="relative border-r border-b border-white/[0.04] bg-slate-950/40"
        logo={brands.adani}
      />

      {/* Row 1, Col 3: Navayuga Group */}
      <LogoCard
        className="relative border-r border-b border-white/[0.04] bg-slate-950/20"
        logo={brands.navayuga}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-700 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12px] -left-[12px] absolute z-10 hidden size-6 text-slate-700 pointer-events-none md:block"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1, Col 4: Amara Raja */}
      <LogoCard
        className="relative border-b border-white/[0.04] bg-slate-950/40"
        logo={brands.amararaja}
      />

      {/* Row 2, Col 1: IIT Tirupati */}
      <LogoCard
        className="relative border-r border-white/[0.04] bg-slate-950/40"
        logo={brands.iit}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] md:-left-[12px] absolute z-10 size-6 text-slate-700 pointer-events-none md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 2, Col 2: IISER Tirupati */}
      <LogoCard
        className="relative border-r border-white/[0.04] bg-slate-950/20"
        logo={brands.iiser}
      />

      {/* Row 2, Col 3: Unibazar Technologies */}
      <LogoCard
        className="relative border-r border-white/[0.04] bg-slate-950/40"
        logo={brands.unibazar}
      />

      {/* Row 2, Col 4: AP State Innovation */}
      <LogoCard
        className="relative bg-slate-950/20"
        logo={brands.ap}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/[0.04]" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-6 min-h-[92px] transition-colors duration-500 hover:bg-slate-900/10",
        className
      )}
      {...props}
    >
      {logo.render ? (
        logo.render()
      ) : (
        <img
          alt={logo.alt}
          className="pointer-events-none h-4 select-none md:h-5"
          height={logo.height || "auto"}
          src={logo.src}
          width={logo.width || "auto"}
        />
      )}
      {children}
    </div>
  );
}
