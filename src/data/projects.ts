import { Project, ServiceItem } from '../types';

export const FUNNEL_PROJECTS: Project[] = [
  {
    id: 'acne-trigger-tracker',
    title: 'Acne Trigger Tracker Opt-in',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_1.jpg',
    fullImage: '/assets/projects/funnel_full_1.png',
    tagline: 'High-converting skincare lead magnet and daily habit tracking funnel',
    description: 'Engineered an empathetic skincare opt-in landing page for "Skincare with Purpose" offering a 28-page Acne Trigger Tracker. Features direct lead capture, automated PDF fulfillment, personalized email nurture sequences, and skin type segmentation.',
    clientType: 'Licensed Esthetician & Acne Specialist',
    deliverables: ['Custom lead magnet opt-in page', '28-page tracker PDF system', 'Automated email nurture sequence (7 emails)', 'Skin type segmentation flow'],
    toolsUsed: ['Figma', 'Systeme.io', 'Make.com', 'ConvertKit'],
    timeframe: '4 days',
    metrics: [
      { label: 'Opt-in Conversion', value: '43.6%' },
      { label: 'Leads Generated (Month 1)', value: '4,120' },
      { label: 'Email Open Rate', value: '61.2%' }
    ]
  },
  {
    id: 'six-figure-email-system',
    title: 'Six Figure Email System',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_2.jpg',
    fullImage: '/assets/projects/funnel_full_2.jpg',
    tagline: 'Dark luxury direct-response sales letter for executive email architecture',
    description: 'Designed and built a high-ticket copywriting framework sales letter. Structured with high-retention video embed, modular breakdown cards, dynamic social proof ticker, and custom checkout flow with order bump.',
    clientType: 'B2B Copywriter & Consultant',
    deliverables: ['Long-form VSL sales page', 'Dynamic order bump checkout', 'Stripe & PayPal payment hooks', 'Follow-up abandon cart sequence'],
    toolsUsed: ['Framer', 'Stripe', 'GoHighLevel', 'Claude 3.5 Sonnet'],
    timeframe: '5 days',
    metrics: [
      { label: 'Front-end Conversion', value: '6.8%' },
      { label: 'Average Order Value', value: '$297' },
      { label: 'Checkout Completion', value: '74%' }
    ]
  },
  {
    id: 'social-voice-academy',
    title: 'Social Voice Academy',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_3.jpg',
    fullImage: '/assets/projects/funnel_full_3.jpg',
    tagline: 'Creator curriculum masterclass enrollment funnel with curriculum syllabus',
    description: 'A contemporary lilac and clean white course funnel for a personal branding creator. Features interactive module accordion previews, student video testimonials, and an urgent countdown mechanism for live cohort drops.',
    clientType: 'Content Creator & Brand Strategist',
    deliverables: ['Live webinar registration page', 'Course syllabus walkthrough', 'Video testimonial carousel', 'Automated calendar sync'],
    toolsUsed: ['Webflow', 'Zapier', 'Kajabi', 'Figma'],
    timeframe: '6 days',
    metrics: [
      { label: 'Webinar Show-up Rate', value: '49%' },
      { label: 'Cohort Enrollments', value: '185' },
      { label: 'Total Sales', value: '$92,000' }
    ]
  },
  {
    id: 'couples-communication-webinar',
    title: 'Couples Communication Webinar',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_4.jpg',
    fullImage: '/assets/projects/funnel_full_4.jpg',
    tagline: 'Empathetic relationship workshop registration funnel with SMS reminders',
    description: 'Created a soothing, high-trust registration experience for marriage and relationship therapists. Designed with empathetic typography, warm earthy tones, and zero-friction 1-tap registration with instant calendar and WhatsApp/SMS confirmation.',
    clientType: 'Licensed Marriage & Family Therapists',
    deliverables: ['Warm editorial opt-in page', 'SMS reminder webhook', 'Thank you / workbook prep page', 'Post-event replay page'],
    toolsUsed: ['ClickFunnels', 'Twilio', 'Zapier', 'Canva'],
    timeframe: '3 days',
    metrics: [
      { label: 'Attendee Registration', value: '2,150' },
      { label: 'SMS Show-up Rate', value: '64%' },
      { label: 'Consult Booking Rate', value: '19.4%' }
    ]
  },
  {
    id: 'katie-floyd-3x-profit',
    title: 'Katie Floyd 3x Profit',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_5.jpg',
    fullImage: '/assets/projects/funnel_full_5.jpg',
    tagline: 'High-energy business mastermind accelerator sales page and application flow',
    description: 'Turnkey application funnel for business growth consultants. Guides prospective clients through an interactive 4-step qualification quiz before allowing high-tier VIP consultation bookings, filtering out unqualified leads.',
    clientType: 'Executive Business Strategist',
    deliverables: ['Interactive qualification quiz', 'Private application portal', 'Integrated booking scheduler', 'Automated CRM lead scoring'],
    toolsUsed: ['Framer', 'Typeform', 'Calendly', 'GoHighLevel'],
    timeframe: '5 days',
    metrics: [
      { label: 'Qualified Lead Rate', value: '82%' },
      { label: 'VIP Package Closes', value: '14' },
      { label: 'Client Revenue Generated', value: '$140k' }
    ]
  },
  {
    id: 'travel-preset-product',
    title: 'Travel Preset Product',
    category: 'Funnels',
    image: '/assets/projects/funnel_thumb_6.jpg',
    fullImage: '/assets/projects/funnel_full_6.jpg',
    tagline: 'Cinematic photography preset e-commerce download funnel with interactive sliders',
    description: 'Dark cinematic digital storefront built to showcase travel photography LUTs and Lightroom presets. Features interactive before-and-after image comparison sliders, instant ZIP delivery upon payment, and mobile-optimized one-click Apple Pay.',
    clientType: 'Commercial Travel Photographer & Filmmaker',
    deliverables: ['Interactive before/after slider page', 'Tiered pack selector', 'Instant digital license delivery', 'Shopify & Stripe setup'],
    toolsUsed: ['Webflow', 'Shopify Buy Button', 'Stripe', 'Figma'],
    timeframe: '4 days',
    metrics: [
      { label: 'Preset Packs Sold', value: '1,420+' },
      { label: 'Bundle Upsell Rate', value: '38%' },
      { label: 'Customer Rating', value: '4.95 / 5' }
    ]
  }
];

export const WEBSITE_PROJECTS: Project[] = [
  {
    id: 'health-menopause-coach',
    title: 'Health Menopause Coach Website',
    category: 'Websites',
    image: '/assets/projects/website_thumb_1.jpg',
    fullImage: '/assets/projects/website_full_1.jpg',
    tagline: 'Empathetic practice platform with evidence-based wellness resources and intake',
    description: 'Complete multi-page coaching brand for "Second Spring". Built with comforting typography, holistic service breakdowns, client triumph stories, and an integrated HIPAA-compliant intake questionnaire for private consultations.',
    clientType: 'Certified Midlife & Menopause Wellness Coach',
    deliverables: ['Multi-page bespoke website', 'Evidence-based resource hub', 'Client success audio/video gallery', 'Intake form integration'],
    toolsUsed: ['Framer', 'Make.com', 'Airtable', 'Figma'],
    timeframe: '7 days',
    metrics: [
      { label: 'Client Inquiries', value: '+180%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Average Session Time', value: '4m 12s' }
    ]
  },
  {
    id: 'new-manager-leadership-coach',
    title: 'New Manager Leadership Coach Website',
    category: 'Websites',
    image: '/assets/projects/website_thumb_2.jpg',
    fullImage: '/assets/projects/website_full_2.jpg',
    tagline: 'Corporate executive coaching portal with team workshops and leadership diagnostics',
    description: 'Sleek corporate presence for leadership development advisory. Includes corporate package calculators, downloadable 90-day onboarding guides for team leads, and a streamlined B2B consultation booking workflow.',
    clientType: 'Executive Leadership Advisory',
    deliverables: ['Corporate leadership portal', 'Interactive assessment tool', 'Downloadable Whitepaper system', 'Direct B2B calendar sync'],
    toolsUsed: ['Webflow', 'HubSpot', 'Zapier', 'Figma'],
    timeframe: '6 days',
    metrics: [
      { label: 'Enterprise RFPs', value: '12 this quarter' },
      { label: 'Assessment Completions', value: '620+' },
      { label: 'Contract Conversion', value: '33%' }
    ]
  },
  {
    id: 'health-sleep-coach',
    title: 'Health Sleep Coach Website',
    category: 'Websites',
    image: '/assets/projects/website_thumb_3.jpg',
    fullImage: '/assets/projects/website_full_3.jpg',
    tagline: 'Restorative sleep clinic website with diagnostic quiz and therapy booking',
    description: 'Dark, tranquil aesthetic for "The Night Practice". Offers a 2-minute diagnostic sleep quiz that delivers tailored protocol recommendations and immediately guides visitors into scheduling their clinical intake consultation.',
    clientType: 'Clinical Sleep Specialist & Behavioral Therapist',
    deliverables: ['Serene dark mode practice website', 'Sleep score quiz algorithm', 'Service tier comparison', 'Automated onboarding forms'],
    toolsUsed: ['Framer', 'Typeform', 'Zapier', 'Stripe'],
    timeframe: '5 days',
    metrics: [
      { label: 'Sleep Quiz Takers', value: '3,400+' },
      { label: 'Program Bookings', value: '64 / mo' },
      { label: 'Mobile Conversion', value: '5.2%' }
    ]
  },
  {
    id: 'viral-content-accelerator',
    title: 'Viral Content Accelerator',
    category: 'Websites',
    image: '/assets/projects/website_thumb_4.jpg',
    fullImage: '/assets/projects/website_full_4.jpg',
    tagline: 'Vibrant agency portfolio showcasing short-form video systems and creator metrics',
    description: 'High-energy agency showcase featuring 3D mockups, animated case study carousels, and client growth metrics. Built to turn incoming TikTok and YouTube creators into retainer production clients.',
    clientType: 'Short-Form Video Production Agency',
    deliverables: ['Dynamic agency showcase site', 'Video reel masonry grid', 'Client view count counters', 'Application booking funnel'],
    toolsUsed: ['Next.js', 'Vercel', 'Tailwind CSS', 'Framer Motion'],
    timeframe: '5 days',
    metrics: [
      { label: 'Total Client Views', value: '185M+' },
      { label: 'Retainer Closes', value: '8 new accounts' },
      { label: 'Bounce Rate', value: '< 24%' }
    ]
  },
  {
    id: 'impact-team-vip',
    title: 'Impact Team VIP',
    category: 'Websites',
    image: '/assets/projects/website_thumb_5.jpg',
    fullImage: '/assets/projects/website_full_5.jpg',
    tagline: 'High-performance sales training membership site with tiered team masterminds',
    description: 'Designed an authoritative membership hub for high-ticket closing teams. Features member testimonials, video masterclass curriculum outline, and an exclusive application portal with role verification.',
    clientType: 'High-Ticket Sales Training Academy',
    deliverables: ['Membership landing portal', 'Interactive curriculum map', 'Video testimonial reel', 'VIP application pipeline'],
    toolsUsed: ['WordPress', 'Elementor', 'ActiveCampaign', 'Vimeo'],
    timeframe: '6 days',
    metrics: [
      { label: 'Member Retention', value: '94%' },
      { label: 'Monthly Inbound Leads', value: '450+' },
      { label: 'Gross Community Volume', value: '$2.4M' }
    ]
  },
  {
    id: 'auto-detailing-website',
    title: 'Auto Detailing Website',
    category: 'Websites',
    image: '/assets/projects/website_thumb_6.jpg',
    fullImage: '/assets/projects/website_full_6.jpg',
    tagline: 'Ultra-slick dark mode automotive styling studio website with custom booking engine',
    description: 'Luxury automotive studio site featuring deep carbon textures, high-contrast vehicle gallery, ceramic coating package selectors, and an instant date-picker scheduling engine.',
    clientType: 'Luxury Auto Styling & Ceramic Coating Studio',
    deliverables: ['Dark mode luxury automotive site', 'Vehicle package selector', 'Date & bay booking system', 'Google Maps integration'],
    toolsUsed: ['Webflow', 'Make.com', 'Square Appointments', 'Figma'],
    timeframe: '5 days',
    metrics: [
      { label: 'Online Bookings', value: '+240%' },
      { label: 'Average Ticket Size', value: '$1,850' },
      { label: 'Customer Reviews', value: '5.0 Stars (88)' }
    ]
  }
];

export const VIDEO_PROJECTS: Project[] = [
  {
    id: 'cliffhanger-story-advertisement',
    title: 'Cliffhanger Story Advertisement',
    category: 'UGC Video',
    image: '/assets/projects/video_1.jpg',
    tagline: 'High-retention UGC hook video engineered for paid Meta & TikTok campaigns',
    description: 'Scripted, generated, and edited an emotional cliffhanger UGC ad concept. Uses dynamic kinetic subtitles ("broken after buying"), pattern interruption in the first 1.8 seconds, and a seamless transition to the problem-solving product.',
    clientType: 'D2C Consumer Tech Brand',
    deliverables: ['AI generated UGC script & 3 hook variations', 'Photorealistic presenter synthesis', 'Kinetic subtitle styling & sound effects', '9:16 vertical export for Meta & TikTok'],
    toolsUsed: ['Midjourney', 'ElevenLabs', 'Runway', 'CapCut Pro'],
    timeframe: '2 days',
    videoMeta: {
      duration: '0:28',
      seconds: 28,
      caption: 'broken after buying',
      audioTrackName: 'Suspense Cinematic Pulse'
    },
    metrics: [
      { label: '3-Second Hook Retention', value: '71.4%' },
      { label: 'Click-Through Rate (CTR)', value: '4.2%' },
      { label: 'Return on Ad Spend (ROAS)', value: '3.8x' }
    ]
  },
  {
    id: 'hydration-product-ugc',
    title: 'Hydration Product UGC',
    category: 'UGC Video',
    image: '/assets/projects/video_2.jpg',
    tagline: 'Lifestyle wellness product test with emotional hook and microscopic B-roll',
    description: 'Conceptualized a high-engagement wellness testimonial featuring an AI-crafted presenter and cinematic water droplet macro B-roll. Designed around the emotional trigger: "And suddenly you remember...".',
    clientType: 'Clean Hydration & Electrolyte Brand',
    deliverables: ['UGC script with sensory sensory words', 'AI voiceover with natural breaths', 'B-roll compositing and color grade', '5 variation cuts for split-testing'],
    toolsUsed: ['Kling AI', 'ElevenLabs', 'Premiere Pro', 'Figma'],
    timeframe: '2 days',
    videoMeta: {
      duration: '0:38',
      seconds: 38,
      caption: 'And suddenly you remember...',
      audioTrackName: 'Ethereal Ambient Rise'
    },
    metrics: [
      { label: 'Watch-Through Rate', value: '44.8%' },
      { label: 'Cost Per Acquisition (CPA)', value: '-35%' },
      { label: 'Ad Spend Scaled', value: '$45,000' }
    ]
  },
  {
    id: 'smart-glasses-demonstration',
    title: 'Smart Glasses Demonstration',
    category: 'UGC Video',
    image: '/assets/projects/video_3.jpg',
    tagline: 'Futuristic product demo showcasing augmented reality POV and day-in-the-life testing',
    description: 'Dynamic tech hardware product showcase with glowing augmented reality HUD overlay graphics, head-tracking sound design, and an authoritative reviewer tone that breaks down everyday utility.',
    clientType: 'Wearable Technology Startup',
    deliverables: ['Hardware review script with feature callouts', 'Custom animated AR HUD graphics', 'Binaural directional sound design', 'Multi-ratio deliverables (9:16 & 1:1)'],
    toolsUsed: ['Midjourney', 'After Effects', 'ElevenLabs', 'CapCut'],
    timeframe: '3 days',
    videoMeta: {
      duration: '0:37',
      seconds: 37,
      caption: 'anyone',
      audioTrackName: 'Cyber Future Bass'
    },
    metrics: [
      { label: 'Average Watch Time', value: '26s / 37s' },
      { label: 'Shares / Saves', value: '4,200+' },
      { label: 'Pre-Orders Generated', value: '310 units' }
    ]
  }
];

export const ALL_PROJECTS = [...FUNNEL_PROJECTS, ...WEBSITE_PROJECTS, ...VIDEO_PROJECTS];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sales-funnel',
    title: 'Sales Funnel',
    category: 'Funnels',
    description: 'Landing pages, lead magnets and follow-up sequences engineered to turn clicks into booked calls.',
    iconName: 'funnel',
    deliverables: [
      'High-converting landing page copy and layout',
      'Lead magnet PDF or video delivery portal',
      'Automated email nurture sequences (5–7 emails)',
      'Calendar booking & CRM tag integration',
      'Stripe / PayPal one-click checkout'
    ]
  },
  {
    id: 'website',
    title: 'Website',
    category: 'Websites',
    description: 'Fast, professional websites that make your business look as good as it actually is. Live in days, not months.',
    iconName: 'website',
    deliverables: [
      'Bespoke, brand-aligned responsive design',
      'Blazing fast sub-second loading speed',
      'SEO structural foundations & clean schema',
      'Modular CMS for effortless self-updating',
      'Mobile-first responsive architecture'
    ]
  },
  {
    id: 'aigc-video',
    title: 'AIGC Video',
    category: 'UGC Video',
    description: 'Short-form video with an AI presenter, so you can post weekly and run video ads without booking a shoot or getting on camera.',
    iconName: 'video',
    deliverables: [
      'Data-driven hook testing and scripting',
      'Photorealistic AI presenter avatars with voice match',
      'Cinematic B-roll generation & sound design',
      'Kinetic subtitle styling and pacing',
      'Ready-to-run batch deliverables for Meta & TikTok'
    ]
  }
];

export const TOOLS_LIST = [
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'Webflow', icon: 'webflow' },
  { name: 'Framer', icon: 'framer' },
  { name: 'Elementor', icon: 'elementor' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Figma', icon: 'figma' },
  { name: 'GoHighLevel', icon: 'gohighlevel' },
  { name: 'ClickFunnels', icon: 'clickfunnels' },
  { name: 'Systeme.io', icon: 'systeme' },
  { name: 'Make / Zapier', icon: 'automation' },
  { name: 'Midjourney', icon: 'midjourney' },
  { name: 'ElevenLabs', icon: 'elevenlabs' }
];
