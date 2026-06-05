import React from 'react';
import { LogoCloud } from './ui/logo-cloud-3';
import { Building2 } from 'lucide-react';

const logos = [
  {
    src: "https://rtih.co.in/assets/rtih-logo.svg",
    alt: "Ratan Tata Innovation Hub",
  },
  {
    src: "https://www.adani.com/-/media/project/adaniv1/media-kit/news-media-kit-page/3-4.jpg",
    alt: "Adani Group",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/C4E0BAQGL6dAdgK-92Q/company-logo_200_200/company-logo_200_200/0/1631350384927?e=1782345600&v=beta&t=VktB-JT1hd_2AATkQ7SJFnmpmpHZtQZEcTBPFmgx7V0",
    alt: "Navayuga Group",
  },
  {
    src: "https://www.amararaja.com/wp-content/themes/amarraja/assets/logo.svg",
    alt: "Amara Raja Group",
  },
  {
    src: "https://www.iittp.ac.in/assets/img/logo/logo.svg",
    alt: "IIT Tirupati",
  },
  {
    src: "https://www.iisertirupati.ac.in/wp-content/uploads/2023/01/tirupati-logo-icon.png",
    alt: "IISER Tirupati",
  },
];

export default function PartnersSection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center space-y-3 pb-2">
        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl font-sans uppercase">
          Corporate &amp; Knowledge Partners
        </h3>
        <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
          Pioneering collaborations driving commercial deployments and scientific validation.
        </p>
      </div>

      <div className="py-4">
        <LogoCloud logos={logos} />
      </div>
    </div>
  );
}
