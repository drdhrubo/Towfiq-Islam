import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, Calendar, Clock, Briefcase, Film, ArrowUpRight, X } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // List of unique categories with human labels
  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'ovc', label: 'OVC Works' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'podcast', label: 'Podcasts' },
    { id: 'event', label: 'Events' },
    { id: 'wedding', label: 'Weddings' },
  ];

  // Filter projects based on choice
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-card relative border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-3">
            Filmmaking & Editing Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4 animate-fade-in">
            EXPLORE PORTFOLIO
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-light">
            Sift through my active categories. Click on any video thumbnail to open the cinema player and view project specifications.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-brand-gold text-brand-bg shadow-lg shadow-brand-gold/10'
                  : 'bg-brand-bg hover:bg-brand-border/40 text-brand-gray hover:text-white border border-brand-border/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-brand-bg rounded-xl border border-brand-border/80 overflow-hidden hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Visual Thumbnail & Hover Trigger */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-60"
                  />
                  
                  {/* Floating category Pill */}
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-brand-gold border border-brand-border/50">
                    {project.categoryLabel}
                  </span>

                  {/* Play Action Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 rounded-full bg-brand-gold text-brand-bg flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-brand-bg translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Info Metadata Box */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-brand-gray mb-2.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {project.duration || '0:00'}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {project.year || '2024'}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-gold transition-colors duration-300 mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-brand-gray text-xs font-light leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Trigger Action */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-between text-xs font-mono tracking-widest text-brand-gold uppercase hover:text-white transition-colors duration-300 mt-2 cursor-pointer pt-3 border-t border-brand-border/30"
                  >
                    <span>View Project Case</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-brand-border rounded-xl">
            <Film className="w-12 h-12 text-brand-gray mx-auto mb-4" />
            <p className="text-brand-gray font-light">No projects available under this filter currently.</p>
          </div>
        )}

      </div>

      {/* Cinematic Theater Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-5xl my-8 bg-brand-bg border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-brand-card border border-brand-border text-white hover:text-brand-gold transition-colors cursor-pointer"
                id="close-portfolio-lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Grid content split between video and details */}
              <div className="grid grid-cols-1 lg:grid-cols-5">
                
                {/* Left side: Premium player box */}
                <div className="lg:col-span-3 bg-black flex items-center justify-center aspect-video lg:aspect-auto lg:h-[450px]">
                  {selectedProject.videoUrl ? (
                    <video
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.embedId}?autoplay=1`}
                      title={selectedProject.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Right side: Case details */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-brand-border h-full max-h-[450px] overflow-y-auto">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-brand-card border border-brand-border text-[10px] font-mono uppercase tracking-widest text-brand-gold inline-block mb-4">
                      {selectedProject.categoryLabel}
                    </span>

                    <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="text-brand-text/80 text-sm font-light leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata list */}
                    <div className="space-y-3.5 border-t border-brand-border/60 pt-5">
                      <div className="flex items-center gap-3 text-xs">
                        <Briefcase className="w-4 h-4 text-brand-gold shrink-0" />
                        <div>
                          <span className="text-brand-gray font-mono block text-[10px] uppercase">My Role</span>
                          <span className="text-white font-medium">{selectedProject.role || 'Lead Producer'}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs">
                        <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                        <div>
                          <span className="text-brand-gray font-mono block text-[10px] uppercase">Duration</span>
                          <span className="text-white font-medium">{selectedProject.duration || 'N/A'}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                        <div>
                          <span className="text-brand-gray font-mono block text-[10px] uppercase">Year Completed</span>
                          <span className="text-white font-medium">{selectedProject.year || '2024'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action contact indicator */}
                  <div className="mt-8 pt-4 border-t border-brand-border/40 text-center">
                    <p className="text-xs text-brand-gray font-light mb-3">Love this cinematic style for your brand?</p>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded bg-brand-gold text-brand-bg font-semibold text-xs uppercase tracking-wider hover:bg-yellow-500 transition-colors"
                    >
                      Book Similar Style
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
