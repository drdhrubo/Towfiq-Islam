import { MapPin, User, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/30">
      {/* Subtle glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Illustration/Graphic representing on-set filming */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border bg-brand-card flex flex-col justify-between p-6 shadow-2xl">
              
              {/* Camera framing outline */}
              <div className="absolute inset-4 border border-white/5 pointer-events-none rounded" />
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/40" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/40" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/40" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/40" />

              {/* Minimalist Graphic background representing cinematic light beam */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1542204172-e7052809a860?auto=format&fit=crop&w=800&q=80"
                  alt="Towfiq Islam filmmaking on-set"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter saturate-0 opacity-50 contrast-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Top Row: Camera HUD */}
              <div className="relative z-10 flex justify-between text-[10px] font-mono text-white/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                  <span>PLAYBACK</span>
                </div>
                <span>4K @ 23.98fps</span>
              </div>

              {/* Bottom Row: Name banner */}
              <div className="relative z-10 bg-brand-bg/85 border border-brand-border p-4 rounded-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase block mb-1">
                  Director / Editor
                </span>
                <h4 className="text-lg font-display font-extrabold text-white">
                  TOWFIQ ISLAM
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-brand-gray mt-1.5 font-mono">
                  <MapPin className="w-3 h-3 text-brand-gold" />
                  <span>Dhaka, BD (Asia)</span>
                </div>
              </div>

            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-bg p-4 rounded-xl shadow-xl flex items-center gap-3">
              <Award className="w-8 h-8 shrink-0" />
              <div>
                <div className="text-xl font-bold font-display leading-none">400+</div>
                <div className="text-[10px] font-mono tracking-wide uppercase mt-0.5 leading-none text-brand-bg/80">
                  Global Deliverables
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio / Personal Intro */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
              Who is FilmsByTowfiq
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
              THE VISIONARY BEHIND THE LENS
            </h2>
            
            <div className="space-y-4 text-brand-text/90 font-light leading-relaxed">
              <p>
                Hi, I’m <strong className="text-white font-medium">Towfiq Islam</strong>, a passionate professional filmmaker, storyteller, and video producer based in Dhaka, Bangladesh. I am 23 years old.
              </p>
              <p>
                My professional career spans over 6 years, during which I have completed <strong className="text-brand-gold font-medium">400+ finished edits and videos</strong> across multiple industries. My core expertise is video production—taking ideas from initial concept blueprints, capturing them through cinematic lens work on set, and weaving them together in the editing studio.
              </p>
              <p>
                Whether managing dynamic set cameras for architecture showcases, editing multi-mic narrative podcasts, or fine-tuning traditional wedding highlights, my ultimate focus is on achieving <strong className="text-white font-medium">high-end visual results with a fresh, clean, minimalist appearance</strong>.
              </p>
            </div>

            {/* Platform Credibility Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-gold mb-1.5">
                  <User className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider uppercase font-semibold text-white">Active Positions</span>
                </div>
                <p className="text-xs text-brand-gray leading-relaxed font-light">
                  Head of Production at <span className="text-white">Passive Journal</span> & Executive Producer at <span className="text-white">Lumas Creative</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-gold mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider uppercase font-semibold text-white">Visual Standard</span>
                </div>
                <p className="text-xs text-brand-gray leading-relaxed font-light">
                  Premium cinematic soundscapes, Hollywood LUT matches, and dynamic multi-angle continuity editing.
                </p>
              </div>
            </div>

            {/* Call to action anchor linking to contact */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-brand-gold text-brand-bg font-semibold text-xs tracking-widest uppercase hover:bg-yellow-500 transition-colors"
              >
                Let’s Work Together
              </a>
              <a
                href="https://www.fiverr.com/s/wk9By2A"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono tracking-widest text-brand-gray hover:text-white uppercase transition-colors"
              >
                Find Me on Fiverr →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
