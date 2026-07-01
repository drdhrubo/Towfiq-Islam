import { motion } from 'motion/react';
import { Play, Calendar, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onWatchShowreel: () => void;
  onBookCall: () => void;
}

export default function Hero({ onWatchShowreel, onBookCall }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Cinematic Ambient Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-30 scale-105 filter saturate-50 contrast-110"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-filmmaker-with-camera-on-a-stabilizer-34283-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card/80 border border-brand-border/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-brand-text/90 uppercase">FilmsByTowfiq</span>
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base font-mono tracking-widest text-brand-gold uppercase mb-3"
        >
          Towfiq Islam
        </motion.h2>

        {/* Large Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.05]"
        >
          I Turn Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-amber-500">
            Imagination
          </span>{' '}
          Into Visuals
        </motion.h1>

        {/* Bio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl font-light mb-10 leading-relaxed"
        >
          Dhaka-based Filmmaker & Video Editor. Crafting dynamic visual experiences, cinematic commercials, and raw narrative stories that captivate audiences worldwide.
        </motion.p>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-12"
        >
          <button
            id="hero-watch-btn"
            onClick={onWatchShowreel}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-brand-bg font-semibold rounded-lg shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/20 transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-brand-bg group-hover:scale-110 transition-transform duration-300" />
            Watch Showreel
          </button>
          
          <button
            id="hero-book-btn"
            onClick={onBookCall}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-lg border border-brand-border hover:border-brand-gold/50 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-brand-gray" />
            Book a Free Call
          </button>
        </motion.div>

        {/* Quick Meta Stats / Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-6 text-xs font-mono text-brand-gray"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          <div>
            <span>400+ Projects Completed</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase animate-pulse">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-brand-border p-1">
          <div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
}
