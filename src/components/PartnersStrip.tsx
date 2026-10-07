import { useState } from "react";

const partners = [
  { file: "mjpsecurity.png", name: "MJP Security" },
  { file: "campusmarketplace logo.png", name: "Campus Marketplace" },
  { file: "umninilogo.png", name: "Umnini Community Trust" },
  { file: "siphulathuthu engineering and construction logo.png", name: "Siphulathuthu Engineering and Construction" },
  { file: "pasa logo.png", name: "Population Association of Southern Africa" },
  { file: "ikamva lam logo.png", name: "iKamva Lam" },
  { file: "siyabuildanow logo.png", name: "Siya Builda Now Construction & Projects" },
];

function PartnerLogo({ file, name, duplicate }: { file: string; name: string; duplicate: boolean }) {
  const [missing, setMissing] = useState(false);
  return <li className="partner-logo-card">
    {missing ? <span className="text-center text-sm text-gray-600 px-4">{name}<br /><span className="text-xs">Logo pending</span></span> : <img src={`/images/partners/${encodeURIComponent(file)}`} alt={duplicate ? "" : name} width={220} height={140} loading="lazy" decoding="async" className="h-full w-full object-contain p-5" onError={() => setMissing(true)} />}
  </li>;
}

export function PartnersStrip() {
  return <section aria-labelledby="partners-heading" className="py-14 border-y border-border overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between gap-4 mb-8">
      <h2 id="partners-heading" className="text-sm font-bold tracking-widest uppercase">Official partners</h2>

    </div>
    <div className="partners-window focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]" tabIndex={0} aria-label="Official partner logos. Focus this strip to pause movement.">
      <div className="partners-track">
        {[false, true].map(duplicate => <ul key={String(duplicate)} className={`partners-group${duplicate ? " partners-duplicate" : ""}`} aria-hidden={duplicate || undefined}>
          {partners.map(partner => <PartnerLogo key={partner.file} {...partner} duplicate={duplicate} />)}
        </ul>)}
      </div>
    </div>
  </section>;
}
