import { Briefcase, Calendar, Building, ShieldCheck } from 'lucide-react';
import { workExperienceData } from '../data';
import { motion } from 'motion/react';

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-brand-card relative border-t border-brand-border/30">
      <div className="max-w-4xl mx-auto">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Career Milestone Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            WORK EXPERIENCE
          </h2>
          <p className="text-brand-gray max-w-lg mx-auto font-light">
            An overview of my roles in production houses, agency pipelines, and independent freelance fields.
          </p>
        </div>

        {/* Timeline body wrapper */}
        <div className="relative border-l border-brand-border/80 pl-6 sm:pl-8 space-y-12 max-w-3xl mx-auto">
          {workExperienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Pulsing timeline bullet nodes */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-gold flex items-center justify-center z-10 group-hover:bg-brand-gold transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:bg-brand-bg transition-colors duration-300" />
              </div>

              {/* Card wrapper */}
              <div className="p-6 md:p-8 rounded-2xl bg-brand-bg border border-brand-border group-hover:border-brand-gold/35 transition-all duration-300 shadow-xl relative overflow-hidden">
                
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/2 rounded-full blur-2xl pointer-events-none" />

                {/* Date & Position Badge Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                      {exp.role}
                    </h3>
                    
                    {/* Company info row */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-brand-gray mt-1">
                      <Building className="w-3.5 h-3.5 text-brand-gold/75" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-card border border-brand-border text-xs font-mono text-brand-gold w-fit">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description details */}
                <p className="text-brand-text/80 text-sm font-light leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Verification indicator */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Engagement</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
