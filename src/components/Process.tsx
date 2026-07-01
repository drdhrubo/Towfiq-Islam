import { PhoneCall, PenTool, Video, CheckSquare, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Goal Call',
      description: 'We hop on a call to discuss your creative brief, aesthetic directions, key deadlines, and project scope.',
      icon: PhoneCall
    },
    {
      number: '02',
      title: 'Concept & Storyboard',
      description: 'I draft a outline of the flow, structure, soundscape mood boards, or frame storyboard for your confirmation.',
      icon: PenTool
    },
    {
      number: '03',
      title: 'Filming & Post-Edit',
      description: 'Whether shooting on-set in Dhaka or taking your cloud assets, I perform pristine edits, audio mix, and color grade.',
      icon: Video
    },
    {
      number: '04',
      title: 'Feedback & Delivery',
      description: 'We complete revision passes together, finalize detail parameters, and deliver 4K master outputs ready for upload.',
      icon: CheckSquare
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Onboarding Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            HOW WE WORK TOGETHER
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            A transparent four-step post-production and filmmaking pipeline ensuring full collaboration on every single video asset.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-brand-card border border-brand-border hover:border-brand-gold/30 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Visual Number Indicator */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-display font-extrabold text-brand-border group-hover:text-brand-gold/30 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Detail text details */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-gold transition-colors duration-300 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-xs font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow icon on desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 transform -translate-y-1/2 z-10 text-brand-border group-hover:text-brand-gold/50 transition-colors pointer-events-none">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
