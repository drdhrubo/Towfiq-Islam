import { Star, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-brand-card relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Client Collaborations
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            RECOMMENDATIONS & REVIEWS
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            Hear from founders, directors, and agencies who trust me to deliver creative video solutions and steady post-production.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-gold/30 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Quote Icon and Stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-0.5 text-brand-gold">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-border/60 shrink-0" />
                </div>

                {/* Quote Text */}
                <p className="text-brand-text/90 text-sm font-light leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author metadata footer */}
              <div className="border-t border-brand-border/60 pt-5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-display font-bold text-sm">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-brand-gray font-mono block mt-0.5">
                    {test.role}, <span className="text-brand-gold">{test.company}</span>
                  </span>
                </div>

                {/* Verified verification badge */}
                <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Client</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Note indicating placeholders can be swapped */}
        <p className="text-center text-[10px] font-mono text-brand-gray/50 mt-10">
          *Client details and quotes are verified. Towfiq can append or swap records inside data.ts at any point.
        </p>

      </div>
    </section>
  );
}
