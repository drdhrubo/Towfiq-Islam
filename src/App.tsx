import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Menu, X, ArrowUp, Mail, Phone, ExternalLink, ShieldAlert } from 'lucide-react';

// Import our modular custom components
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Timeline from './components/Timeline';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Preloader Countdown simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll handler to target IDs
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Callback to handle Hero/Services/Pricing CTA selection and scroll to Contact
  const handleSelectService = (serviceId: string) => {
    scrollToSection('contact');
    
    // Auto-select corresponding option in the dropdown
    const selectElement = document.querySelector('select[name="projectType"]') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = serviceId;
      // Trigger native change event so React state updates
      const event = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(event);
    }
  };

  const handleSelectPackage = (packageName: string) => {
    scrollToSection('contact');
    
    // Auto-update message or focus field
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = `Hi Towfiq, I am interested in the "${packageName}" package. Let’s discuss how we can schedule this!`;
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
      textarea.focus();
    }
  };

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen relative font-sans">
      
      {/* 1. CINEMATIC PRELOADER COUNTDOWN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <Film className="w-16 h-16 text-brand-gold animate-spin mx-auto mb-2" style={{ animationDuration: '4s' }} />
              <div className="font-display font-black text-2xl tracking-widest text-white uppercase">
                FILMS BY TOWFIQ
              </div>
              <div className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                ACHIEVING HIGH-END VISUAL RESULTS
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. STICKY GLASS HEADER NAVIGATION */}
      <header className="fixed top-0 inset-x-0 z-40 bg-brand-bg/80 border-b border-brand-border/40 backdrop-blur-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer text-left group"
          >
            <div className="w-8 h-8 rounded bg-brand-gold flex items-center justify-center text-brand-bg group-hover:rotate-12 transition-transform duration-300">
              <Film className="w-4 h-4 fill-brand-bg" />
            </div>
            <div>
              <span className="font-display font-black tracking-wider text-white text-sm block leading-none">
                FilmsByTowfiq
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brand-gray uppercase leading-none block mt-1">
                Portfolio Website
              </span>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest uppercase text-brand-gray font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-brand-gold transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-brand-gold transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-brand-gold transition-colors cursor-pointer">Portfolio</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-brand-gold transition-colors cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('pricing-packages')} className="hover:text-brand-gold transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-brand-gold transition-colors cursor-pointer">FAQs</button>
          </nav>

          {/* Hire Direct CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded bg-brand-gold hover:bg-yellow-500 text-brand-bg font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-brand-gold/5"
            >
              Get In Touch
            </button>
          </div>

          {/* Responsive Mobile Drawer menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-gray hover:text-white transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* 3. MOBILE MENU BACKDROP */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[69px] inset-x-0 z-30 bg-brand-card border-b border-brand-border p-6 shadow-2xl flex flex-col gap-4 text-center font-mono text-sm uppercase tracking-widest text-brand-gray"
          >
            <button onClick={() => scrollToSection('about')} className="py-2 hover:text-brand-gold transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="py-2 hover:text-brand-gold transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="py-2 hover:text-brand-gold transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('experience')} className="py-2 hover:text-brand-gold transition-colors">Experience</button>
            <button onClick={() => scrollToSection('pricing-packages')} className="py-2 hover:text-brand-gold transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="py-2 hover:text-brand-gold transition-colors">FAQs</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full py-3 rounded bg-brand-gold text-brand-bg font-bold text-xs"
            >
              Get In Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN BODY CONTAINER */}
      <main className="pt-[69px] pb-24 md:pb-0">
        
        {/* Core Sections */}
        <Hero
          onWatchShowreel={() => scrollToSection('showreel')}
          onBookCall={() => scrollToSection('contact')}
        />
        
        <Showreel />
        
        <Services onSelectService={handleSelectService} />
        
        <Portfolio />
        
        <About />
        
        <Timeline />
        
        <Process />
        
        <Testimonials />
        
        <Pricing onSelectPackage={handleSelectPackage} />
        
        <FAQ />
        
        <Contact />

      </main>

      {/* 5. FOOTER BLOCK */}
      <footer className="bg-brand-card border-t border-brand-border/40 py-12 px-6 text-center text-brand-gray">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex justify-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-border/50 flex items-center justify-center text-brand-gold">
              <Film className="w-4 h-4" />
            </div>
            <span className="font-display font-extrabold text-white text-lg tracking-wider">
              FilmsByTowfiq
            </span>
          </div>

          <p className="text-xs font-light max-w-md mx-auto leading-relaxed">
            I turn your imagination into visuals. Professional video editing, high-end cinematography, and storytelling based in Dhaka, Bangladesh.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest">
            <a href="mailto:filmsbytowfiq@gmail.com" className="hover:text-brand-gold transition-colors">filmsbytowfiq@gmail.com</a>
            <span>·</span>
            <a href="tel:+8801778250304" className="hover:text-brand-gold transition-colors">+88 01778250304</a>
            <span>·</span>
            <a href="https://www.fiverr.com/s/wk9By2A" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-1">
              Fiverr Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono">
            <div>
              &copy; {new Date().getFullYear()} FilmsByTowfiq. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-brand-gray/60">
              <span>Crafted for Towfiq Islam</span>
              <span>·</span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 6. RESPONSIVE MOBILE CTA OVERLAY BOTTOM BAR */}
      <MobileBottomBar />

      {/* 7. SCROLL BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSection('hero')}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 p-3 rounded-full bg-brand-gold hover:bg-yellow-500 text-brand-bg shadow-xl cursor-pointer transition-all active:scale-95 hover:shadow-brand-gold/25"
            id="back-to-top-trigger"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
