import { Project, Service, WorkExperience, Testimonial, PricingPackage, FAQItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'video-editing',
    title: 'Professional Video Editing',
    description: 'Cinematic storytelling with tight pacing, sound design, and color grading.',
    longDescription: 'I specialize in high-end post-production, transforming raw footage into compelling stories. Whether it is a fast-paced YouTube video, a multi-camera podcast, or a high-converting advertisement, I apply precise cuts, immersive sound effects, and color grading to captivate your audience.',
    iconName: 'Video',
    features: [
      'Advanced Color Grading & Match',
      'Professional Audio Mixing & Sound Design',
      'Dynamic Motion Graphics & Transitions',
      'Multi-cam & Narrative Editing',
      'Platform Optimization (YT, TikTok, IG)'
    ]
  },
  {
    id: 'filmmaking',
    title: 'Cinematography & Filmmaking',
    description: 'Full-service video production with high-end results and a minimalist aesthetic.',
    longDescription: 'From pre-production scriptwriting to directing and filming on set. Based in Dhaka, Bangladesh, I bring a fresh, modern perspective, focusing on achieving visual excellence with high-end cameras, professional lighting setups, and intentional framing.',
    iconName: 'Camera',
    features: [
      'Pre-production & Script Consulting',
      'Cinematic 4K Camera Packages',
      'Professional Lighting & Set Design',
      'Documentary & Narrative Direction',
      'Commercial & Corporate Shoots'
    ]
  },
  {
    id: 'video-production',
    title: 'End-to-End Video Production',
    description: 'Taking your project from initial idea and storyboard to final delivery.',
    longDescription: 'For brands that need complete video assets without managing multiple freelancers. I oversee the entire production pipeline, ensuring consistent high-quality output on-budget and on-schedule.',
    iconName: 'Film',
    features: [
      'Concept Development & Storyboarding',
      'Talent Sourcing & Location Scouting',
      'Crew & Production Management',
      'Post-production Supervision',
      'Multi-platform Deliverables'
    ]
  },
  {
    id: 'photography',
    title: 'Cinematic Photography',
    description: 'High-contrast, moody portrait, architecture, and event photography.',
    longDescription: 'Photography is where my visual journey started. I capture raw emotions, architectural geometries, and vibrant moments using natural lighting combined with professional grade post-processing.',
    iconName: 'Aperture',
    features: [
      'Architectural & Interior Photography',
      'Cinematic Portraiture & Brand Shoots',
      'Event & Wedding Photojournalism',
      'Professional Photo Retouching',
      'Product & Commercial Photography'
    ]
  }
];

export const projectsData: Project[] = [
  // OVC Works
  {
    id: 'ovc-1',
    title: 'Chronos - Luxury Timepiece Commercial',
    category: 'ovc',
    categoryLabel: 'OVC Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-holding-a-gold-pocket-watch-41584-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A dark, moody, commercial film created for a luxury timepiece brand. Focuses on macro details, metal textures, and high-contrast dramatic studio lighting.',
    duration: '0:45',
    year: '2024',
    role: 'Director, Video Editor & Colorist'
  },
  {
    id: 'ovc-2',
    title: 'Pulse - Urban Athleisure Launch',
    category: 'ovc',
    categoryLabel: 'OVC Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-runner-doing-warm-up-exercises-before-running-43306-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'Dynamic, fast-paced sports apparel commercial featuring rhythmic cuts, glitch effects, and high-energy electronic sound design.',
    duration: '1:00',
    year: '2023',
    role: 'Co-Director & Lead Editor'
  },
  // Architecture Works
  {
    id: 'arch-1',
    title: 'Concrete Minimalist Villa Tour',
    category: 'architecture',
    categoryLabel: 'Architecture Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-minimalist-living-room-41983-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'An elegant interior and architectural cinematic walkthrough of a brutalist-minimalist home, focusing on symmetry, natural light play, and raw concrete textures.',
    duration: '2:15',
    year: '2024',
    role: 'Cinematographer & Colorist'
  },
  {
    id: 'arch-2',
    title: 'The Glass Pavilion at Dusk',
    category: 'architecture',
    categoryLabel: 'Architecture Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-view-of-a-luxury-pool-surrounded-by-trees-at-dusk-42171-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A visual exploration of glass structures transitioning from late afternoon into twilight, captured with slow, sweeping slider movements.',
    duration: '1:45',
    year: '2023',
    role: 'Director of Photography'
  },
  // EdTech Works
  {
    id: 'edtech-1',
    title: 'Passive Journal Academy - Course Trailer',
    category: 'edtech',
    categoryLabel: 'EdTech Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-typing-on-laptop-with-glowing-screens-43093-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'An inspiring promotional video produced for Passive Journal’s primary course catalog. Features neat graphical callouts, clean on-screen text, and upbeat, professional background music.',
    duration: '1:30',
    year: '2023',
    role: 'Head of Production & Editor'
  },
  {
    id: 'edtech-2',
    title: 'Learn Code: Visual Syntax Promo',
    category: 'edtech',
    categoryLabel: 'EdTech Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-lines-of-code-on-a-computer-monitor-40545-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A marketing asset combining screencasts, sleek mockups, and dynamic zooming animations to pitch an interactive coding curriculum.',
    duration: '1:10',
    year: '2024',
    role: 'Video Editor & Graphic Overlay Designer'
  },
  // Podcast Works
  {
    id: 'podcast-1',
    title: 'The Creative Minds Podcast - Ep. 42 Highlight',
    category: 'podcast',
    categoryLabel: 'Podcast Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-broadcaster-speaking-into-a-microphone-in-a-studio-41712-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'Multi-camera setup with auto-switching editing, active waveforms, customized soundbite captions, and an optimized cinematic visual style for social channels.',
    duration: '3:00',
    year: '2024',
    role: 'Lead Video Editor & Audio Mixer'
  },
  {
    id: 'podcast-2',
    title: 'Tech & Culture Roundtable',
    category: 'podcast',
    categoryLabel: 'Podcast Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-recording-audio-in-a-sound-proof-booth-41711-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A multicam discussion format editing project focusing on dynamic conversational pacing, multi-mic leveling, and color-graded dual feeds.',
    duration: '5:00',
    year: '2023',
    role: 'Lead Editor'
  },
  // Event Works
  {
    id: 'event-1',
    title: 'Dhaka Creative Summit 2024 - Aftermovie',
    category: 'event',
    categoryLabel: 'Event Coverage Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-music-festival-dancing-with-lights-42416-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A vibrant aftermovie summarizing the energy of Dhaka’s biggest creative conference. Staggered speeds, speed-ramping transitions, and soundbite overlays.',
    duration: '2:30',
    year: '2024',
    role: 'Lead Cinematographer & Editor'
  },
  {
    id: 'event-2',
    title: 'Lumas Creative Gallery Opening',
    category: 'event',
    categoryLabel: 'Event Coverage Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-toasting-with-wine-glasses-at-a-dinner-42176-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'Sophisticated event teaser capturing high-end networking, art exhibits, and dynamic crowd interactions under warm galleries lighting.',
    duration: '1:15',
    year: '2024',
    role: 'Executive Producer & Editor'
  },
  // Wedding Works
  {
    id: 'wedding-1',
    title: 'Adnan & Farhana - Cinematic Wedding Highlight',
    category: 'wedding',
    categoryLabel: 'Wedding Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-and-walking-42354-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A beautiful emotional wedding film integrating cultural traditional vibes, Slow-Mo portrait sequences, and an elegant romantic color palette.',
    duration: '4:00',
    year: '2023',
    role: 'Cinematographer & Editor'
  },
  {
    id: 'wedding-2',
    title: 'Elegance in Dhaka - Traditional Vivah',
    category: 'wedding',
    categoryLabel: 'Wedding Works',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-couple-walking-at-the-beach-at-sunset-42360-large.mp4',
    embedId: 'dQw4w9WgXcQ',
    description: 'A grand scale traditional wedding teaser combining rich ethnic attire close-ups, high-energy dance highlights, and cinematic slow motion shots.',
    duration: '1:30',
    year: '2024',
    role: 'Lead Cinematographer & Post-Producer'
  }
];

export const workExperienceData: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Executive Producer',
    company: 'Lumas Creative',
    period: '2024 – Present',
    description: 'Overseeing high-end visual productions, commercial campaigns, and event coverages. Managing visual standards and client relations.',
    isCurrent: true
  },
  {
    id: 'exp-2',
    role: 'Head of Production',
    company: 'Passive Journal',
    period: '2023 – Present',
    description: 'Directing video content strategy, educational materials, and course productions. Scaling video workflows and leading a team of editors.',
    isCurrent: true
  },
  {
    id: 'exp-3',
    role: 'Freelance Video Editor & Producer',
    company: 'Fiverr & Upwork Platforms',
    period: '2022 – Present',
    description: 'Delivering stellar post-production services to international clients. Retained high ratings across 400+ finished projects globally.',
    isCurrent: true
  },
  {
    id: 'exp-4',
    role: 'Freelance Cinematographer & Editor',
    company: 'Dhaka & Regional Asia Markets',
    period: '2020 – Present',
    description: 'Capturing architectural spaces, OVC campaigns, local weddings, and event coverage with high-end camera packages and cinematic aesthetics.',
    isCurrent: true
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Khalid Farhan',
    role: 'Founder',
    company: 'Passive Journal',
    rating: 5,
    quote: 'Towfiq is a creative powerhouse. As Head of Production, he elevated our video standards to a whole new level. His work has a clean, premium visual aesthetic that matches our branding perfectly.',
    isPlaceholder: false
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'Aura Homes London',
    rating: 5,
    quote: 'We hired Towfiq to edit our architectural walkthrough series. The storytelling, smooth transitions, and incredible color grading blew us away. His communication was swift and on point.',
    isPlaceholder: false
  },
  {
    id: 'test-3',
    name: 'Rahat Ahmed',
    role: 'Executive Director',
    company: 'Lumas Creative Studio',
    rating: 5,
    quote: 'Collaborating with Towfiq on set is always seamless. He brings unmatched enthusiasm, a cinematic eye, and executes edits under tight schedules with perfect visual flow.',
    isPlaceholder: false
  }
];

export const pricingPackagesData: PricingPackage[] = [
  {
    id: 'price-1',
    name: 'Standard Edit',
    price: '$250',
    priceUnit: 'per video',
    description: 'Perfect for professional YouTubers, content creators, and corporate communications.',
    features: [
      'Up to 10 minutes finished video length',
      'Professional color grading & light adjustments',
      'Sound design, background music & audio balancing',
      'Engaging subtitles, dynamic lower-thirds',
      'Up to 3 revision cycles included',
      '4-5 Business Days Delivery turnaround'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'price-2',
    name: 'Cinematic Commercial',
    price: '$590',
    priceUnit: 'per project',
    description: 'For high-impact Online Video Commercials (OVC), real estate trailers, or promo films.',
    features: [
      'Up to 2 minutes finished high-end video',
      'Stellar cinematic sound effects & SFX layers',
      'Advanced color grading (Hollywood Look LUTs)',
      'Motion graphics, speed ramping, complex VFX',
      'Premium royalty-free soundtrack licensing',
      'Unlimited revisions until perfect',
      '7-10 Business Days Delivery'
    ],
    isPopular: true,
    ctaText: 'Request Commercial'
  },
  {
    id: 'price-3',
    name: 'Monthly Content Retainer',
    price: '$1,450',
    priceUnit: 'per month',
    description: 'Dedicated editing bandwidth for podcasts, brands, or active multi-platform creators.',
    features: [
      'Up to 12 social shorts/reels per month',
      'Up to 2 full-length podcast or YT edits',
      'Constant 48-hour turnarounds on urgent drafts',
      'Dedicated Slack/WhatsApp communication channel',
      'Custom asset bank creation (titles, themes)',
      'Regular creative strategy consultation syncs'
    ],
    ctaText: 'Book Retention Partnership'
  }
];

export const fiverrPackagesData: PricingPackage[] = [
  {
    id: 'fiverr-1',
    name: 'Social Shorts (Silver)',
    price: '$35',
    priceUnit: 'per video',
    description: 'Perfect for TikTok, Reels, Shorts, and engaging viral-style short content.',
    features: [
      'Up to 60 seconds finished video length',
      'Modern dynamic subtitles & caption overlays',
      'Color correction & light adjustments',
      'Royalty-free background track & sound effects',
      'Up to 2 revision cycles included',
      '2 Days Delivery turnaround'
    ],
    ctaText: 'Order on Fiverr'
  },
  {
    id: 'fiverr-2',
    name: 'YouTube & Vlog (Gold)',
    price: '$95',
    priceUnit: 'per video',
    description: 'Engaging storytelling edit for standard YouTube uploads, tutorials, and travel vlogs.',
    features: [
      'Up to 5 minutes finished video length',
      'Detailed pacing cuts, transition inserts & B-rolls',
      'Cinematic color grading & audio enhancing',
      'Dynamic lower-thirds, text Callouts & zooms',
      'Up to 3 revision cycles included',
      '4 Days Delivery turnaround'
    ],
    isPopular: true,
    ctaText: 'Order on Fiverr'
  },
  {
    id: 'fiverr-3',
    name: 'Cinematic Narrative (Platinum)',
    price: '$195',
    priceUnit: 'per video',
    description: 'High-end edit for documentary style videos, talking heads, and professional corporate content.',
    features: [
      'Up to 10 minutes finished high-quality video',
      'Hollywood look color grading & advanced matching',
      'Full cinematic sound design & custom SFX layers',
      'Speed ramping, zoom matching, customized graphics',
      'Up to 5 revision cycles included',
      '5 Days Delivery turnaround'
    ],
    ctaText: 'Order on Fiverr'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What video editing software and equipment do you use?',
    answer: 'I primarily edit on Adobe Premiere Pro and DaVinci Resolve for expert-level color grading. For cinematography on-set, I shoot using cinematic cameras (Sony/FX series, mirrorless rigs), dynamic DJI gimbals, advanced lighting structures, and professional audio capture sets.'
  },
  {
    id: 'faq-2',
    question: 'How do we share heavy video assets for editing?',
    answer: 'We can transfer heavy video raw assets using Google Drive, Dropbox, Frame.io, or WeTransfer. I highly recommend organizing your assets into clear folders (A-Roll, B-Roll, Audio, References) to speed up our post-production process.'
  },
  {
    id: 'faq-3',
    question: 'What is your typical turnaround time?',
    answer: 'For small edits or social shorts, turnaround takes 2 to 3 days. Standard length projects take 4 to 5 days, and custom cinematic advertisements or heavy real estate walkthroughs require 7 to 10 days of detailed post-production. Urgent 24/48h turnarounds can be arranged for a fee.'
  },
  {
    id: 'faq-4',
    question: 'What is your revision policy if I need changes?',
    answer: 'Every project includes revision rounds to ensure absolute satisfaction (usually 3 rounds, but unlimited for commercial packages). Revisions must be provided with specific timestamps so I can accurately modify the cuts, text overlays, or audio balance in one go.'
  },
  {
    id: 'faq-5',
    question: 'Can you work on projects outside of Bangladesh?',
    answer: 'Absolutely! More than 80% of my freelance clients are located internationally (US, UK, Europe, Australia). I manage remote projects seamlessly through Upwork, Fiverr, or direct email, keeping communications structured across different time zones.'
  }
];
