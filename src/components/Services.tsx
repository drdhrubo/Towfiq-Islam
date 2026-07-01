import { Video, Camera, Film, Aperture, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data';
import { motion } from 'motion/react';

// Maps string icons to actual Lucide component imports
const iconMap: Record<string, any> = {
  Video: Video,
  Camera: Camera,
  Film: Film,
  Aperture: Aperture,
};

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
              Core Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
              MY VISUAL SERVICES
            </h2>
          </div>
          <p className="text-brand-gray max-w-md font-light leading-relaxed">
            I offer tailored visual creation, spanning on-set camera operation to final post-production edits. Crafting eye-catching content designed to convert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Video;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Floating backdrop glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Descriptions */}
                  <p className="text-brand-text/85 font-light mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-gray">
                        <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Trigger Action */}
                <button
                  id={`service-cta-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm font-medium hover:bg-brand-gold hover:text-brand-bg hover:border-brand-gold transition-all duration-300 cursor-pointer"
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
