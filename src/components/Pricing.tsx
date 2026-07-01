import { useState } from 'react';
import { Check, Flame, MessageSquare, ExternalLink } from 'lucide-react';
import { pricingPackagesData, fiverrPackagesData } from '../data';
import { motion } from 'motion/react';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  const [pricingType, setPricingType] = useState<'direct' | 'fiverr'>('fiverr');

  const activePackages = pricingType === 'direct' ? pricingPackagesData : fiverrPackagesData;
  const fiverrGigUrl = "https://www.fiverr.com/films_by_towfiq/high-quality-video-editing-for-your-content?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=wk9by2a";

  return (
    <section id="pricing-packages" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Budget Estimation
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            TRANSPARENT PRICING & TIERS
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            Clear baseline pricing parameters. Choose between fast escrow orders on Fiverr or direct custom campaign retainers.
          </p>
        </div>

        {/* Pricing Type Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-brand-card/80 p-1.5 rounded-full border border-brand-border/60 flex items-center gap-1">
            <button
              onClick={() => setPricingType('fiverr')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                pricingType === 'fiverr'
                  ? 'bg-brand-gold text-brand-bg shadow-md'
                  : 'text-brand-gray hover:text-white'
              }`}
            >
              Fiverr Gig Packages
            </button>
            <button
              onClick={() => setPricingType('direct')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                pricingType === 'direct'
                  ? 'bg-brand-gold text-brand-bg shadow-md'
                  : 'text-brand-gray hover:text-white'
              }`}
            >
              Direct Retainers
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {activePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                pkg.isPopular
                  ? 'bg-brand-card border-brand-gold/60 shadow-xl shadow-brand-gold/5 lg:scale-105 z-10'
                  : 'bg-brand-card/70 border-brand-border/80 hover:border-brand-gold/30'
              }`}
            >
              
              {/* Popular Indicator Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-gold text-brand-bg text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg">
                  <Flame className="w-3.5 h-3.5 fill-brand-bg" />
                  <span>Most Selected</span>
                </div>
              )}

              {/* Package Meta Header */}
              <div>
                <h3 className="text-xl font-display font-extrabold text-white mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-brand-gray text-xs font-light leading-relaxed mb-6 h-10 overflow-hidden">
                  {pkg.description}
                </p>

                {/* Pricing Number block */}
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-brand-border/60">
                  <span className="text-4xl md:text-5xl font-display font-black text-white">
                    {pkg.price}
                  </span>
                  {pkg.priceUnit && (
                    <span className="text-xs font-mono text-brand-gray uppercase tracking-wider">
                      / {pkg.priceUnit}
                    </span>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-brand-text/90">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Call Action Button / Link */}
              {pricingType === 'fiverr' ? (
                <a
                  id={`pricing-cta-${pkg.id}`}
                  href={fiverrGigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className={`w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-brand-gold text-brand-bg hover:bg-yellow-500 shadow-lg shadow-brand-gold/15'
                      : 'bg-brand-bg hover:bg-brand-border/50 text-white border border-brand-border'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  id={`pricing-cta-${pkg.id}`}
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-brand-gold text-brand-bg hover:bg-yellow-500 shadow-lg shadow-brand-gold/15'
                      : 'bg-brand-bg hover:bg-brand-border/50 text-white border border-brand-border'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              )}

            </motion.div>
          ))}
        </div>

        {/* Dynamic customized quote prompt */}
        <div className="mt-16 p-6 rounded-xl border border-brand-border bg-brand-card/40 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-display font-bold text-sm">Need a fully customized post-production pipeline?</h4>
              <p className="text-brand-gray text-xs font-light mt-0.5">Let me know your target frame length, raw storage sizes, and frequency for a customized retainer rate card.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 rounded bg-transparent hover:bg-brand-gold/10 text-brand-gold border border-brand-gold/40 hover:border-brand-gold font-bold text-xs uppercase tracking-widest transition-all shrink-0"
          >
            Request Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
}
