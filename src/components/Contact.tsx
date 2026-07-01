import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2, MessageSquare, Flame } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'video-editing',
    budget: '250-500',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Available for Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            LET’S WORK TOGETHER
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            Ready to scale your video assets? Complete the intake brief form below to request a callback or connect directly via social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Direct Communication Channels
              </h3>
              
              <p className="text-brand-gray text-xs md:text-sm font-light leading-relaxed">
                If you hate filling out forms, shoot me an email directly or ping my phone line. I generally respond inside 12 to 24 hours.
              </p>

              {/* Direct Link Grid */}
              <div className="space-y-4">
                
                {/* Email block */}
                <a
                  href="mailto:filmsbytowfiq@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-brand-gray font-mono text-[9px] uppercase block">Email Me Directly</span>
                    <span className="text-white text-sm font-medium">filmsbytowfiq@gmail.com</span>
                  </div>
                </a>

                {/* Phone block */}
                <a
                  href="tel:+8801778250304"
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-brand-gray font-mono text-[9px] uppercase block">Call / Mobile</span>
                    <span className="text-white text-sm font-medium">+88 01778250304</span>
                  </div>
                </a>

                {/* Location block */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-brand-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-brand-gray font-mono text-[9px] uppercase block">Based in Asia</span>
                    <span className="text-white text-sm font-medium">Dhaka, Bangladesh</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social channels and external hire */}
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-wider text-brand-gray uppercase block">
                Social Media & Platforms
              </span>

              {/* Fiverr hire anchor */}
              <a
                href="https://www.fiverr.com/s/wk9By2A"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/30 hover:bg-brand-gold/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-brand-gold animate-bounce" />
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                    Hire Me on Fiverr
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Grid of standard networks */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.facebook.com/towfiq2"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-brand-card border border-brand-border hover:border-brand-gold/40 text-center text-xs font-mono text-brand-gray hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/films.by.towfiq/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-brand-card border border-brand-border hover:border-brand-gold/40 text-center text-xs font-mono text-brand-gray hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/towfiqislam10/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-brand-card border border-brand-border hover:border-brand-gold/40 text-center text-xs font-mono text-brand-gray hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative overflow-hidden h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    
                    {/* Grid Names & Emails */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm focus:border-brand-gold/60 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="your.email@domain.com"
                          className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm focus:border-brand-gold/60 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Dropdowns fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                          Project Category
                        </label>
                        <select
                          name="projectType"
                          value={formState.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm focus:border-brand-gold/60 focus:outline-none transition-colors"
                        >
                          <option value="video-editing">Video Editing</option>
                          <option value="filmmaking">Cinematography / Filmmaking</option>
                          <option value="architecture">Architecture Works</option>
                          <option value="ovc">Online Video Commercial (OVC)</option>
                          <option value="podcast">Podcast Works</option>
                          <option value="event">Event Coverage</option>
                          <option value="wedding">Wedding Videography</option>
                          <option value="photography">Cinematic Photography</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                          Approximate Budget
                        </label>
                        <select
                          name="budget"
                          value={formState.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm focus:border-brand-gold/60 focus:outline-none transition-colors"
                        >
                          <option value="under-250">Under $250</option>
                          <option value="250-500">$250 – $500</option>
                          <option value="500-1000">$500 – $1,000</option>
                          <option value="1000-2500">$1,000 – $2,500</option>
                          <option value="above-2500">$2,500+</option>
                        </select>
                      </div>
                    </div>

                    {/* Large Message field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">
                        Project Brief & Target length *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your target length, reference video links, footage size, and expected deadline..."
                        className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white text-sm focus:border-brand-gold/60 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full py-4 rounded-lg bg-brand-gold hover:bg-yellow-500 text-brand-bg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-brand-gold/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-brand-bg border-t-transparent animate-spin" />
                          <span>Routing Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Request</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-receipt"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-display font-extrabold text-white">
                        Brief Sent Successfully!
                      </h4>
                      <p className="text-xs md:text-sm text-brand-gray font-light max-w-sm mx-auto">
                        Thank you! Your project metadata has been packaged. An auto-copy has been routed to <span className="text-white font-medium">filmsbytowfiq@gmail.com</span>.
                      </p>
                    </div>

                    {/* Receipt breakdown */}
                    <div className="w-full max-w-sm rounded-lg bg-brand-bg border border-brand-border p-4 text-left space-y-2 text-xs font-mono text-brand-gray">
                      <div className="border-b border-brand-border pb-2 mb-2 text-white font-bold flex justify-between">
                        <span>ONBOARDING TICKET</span>
                        <span className="text-brand-gold">#FT-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <div>Name: <span className="text-white">{formState.name}</span></div>
                      <div>Email: <span className="text-white">{formState.email}</span></div>
                      <div>Category: <span className="text-white uppercase">{formState.projectType}</span></div>
                      <div>Budget: <span className="text-white">${formState.budget}</span></div>
                      <div className="border-t border-brand-border/40 pt-2 mt-2 leading-relaxed italic line-clamp-2">
                        "{formState.message}"
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded bg-brand-card border border-brand-border text-white hover:text-brand-gold transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer"
                    >
                      Submit Another Brief
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
