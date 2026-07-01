import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, X, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // High quality cinematic stock video
  const showreelVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-forest-road-view-from-above-41982-large.mp4';

  return (
    <section id="showreel" className="py-24 px-6 bg-gradient-to-b from-brand-bg to-brand-card relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Proof of Work
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            FEATURED SHOWREEL
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            A curated compilation of cinematography and editing. Raw emotions, precise pacing, and meticulous color choices.
          </p>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative group rounded-2xl border border-brand-border bg-black overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
          
          {/* Custom Film-Camera HUD Overlay on Idle */}
          <div className="absolute inset-x-0 top-0 p-4 z-10 flex justify-between text-[10px] font-mono text-white/50 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>REC [RAW]</span>
            </div>
            <div>24 FPS · 4K UHD</div>
            <div>TC 00:14:32:08</div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex justify-between text-[10px] font-mono text-white/50 pointer-events-none">
            <div>ISO 400 · f/2.8</div>
            <div>BATTERY 92%</div>
          </div>

          {/* Actual Video loop for background preview */}
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src={showreelVideoUrl} type="video/mp4" />
          </video>

          {/* Dark Overlay when not fully expanded */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Centered Large Play Button Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-brand-gold text-brand-bg cursor-pointer shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50 transition-all duration-300"
              id="showreel-play-trigger"
            >
              <Play className="w-8 h-8 fill-brand-bg translate-x-0.5" />
            </motion.button>
            <span className="text-xs font-mono tracking-widest text-white/90 font-medium uppercase drop-shadow">
              Play Full Reel
            </span>
          </div>

          {/* Quick Player controls on thumbnail */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-brand-bg/80 border border-brand-border/50 text-white hover:text-brand-gold transition-colors backdrop-blur cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsPlaying(true)}
              className="p-2 rounded-full bg-brand-bg/80 border border-brand-border/50 text-white hover:text-brand-gold transition-colors backdrop-blur cursor-pointer"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Stats Badge */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-center border-t border-brand-border/40 pt-10">
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">400+</div>
            <div className="text-xs font-mono text-brand-gray mt-1">Projects Finished</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-brand-gold">6+</div>
            <div className="text-xs font-mono text-brand-gray mt-1">Years of Craft</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">100%</div>
            <div className="text-xs font-mono text-brand-gray mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-brand-gold">24/7</div>
            <div className="text-xs font-mono text-brand-gray mt-1">Post-Production</div>
          </div>
        </div>

      </div>

      {/* Full-Screen Cinema Lightbox Overlay */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            {/* Close Button Trigger */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-brand-card border border-brand-border text-white hover:text-brand-gold hover:border-brand-gold transition-all duration-300 cursor-pointer"
              id="close-showreel-lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-brand-border bg-brand-bg shadow-2xl"
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                title="Towfiq Islam - Cinematic Showreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
