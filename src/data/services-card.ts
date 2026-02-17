interface data {
    id: number,
    title: string,
    services: string[]
}
export interface SectionData {
    title: string;
    subHeading: string;
    description: string;
    bgImage?: string;
    button: string;
    imageUrl?: string
    textAlign?: string
    cardsData?: data[]
    href?: string
}
export const CardsData1: data[] = [
    {
        id: 0,
        title: "Corporate Branding",
        services: ["Product Branding", "Service Branding", "Personal Branding", "Cultural Branding", "Global Branding", "Co-Branding", "Corporate Identity Branding", "Employer Branding"]
    },
    {
        id: 1,
        title: "Leadership Branding",
        services: ["Executive Branding", "Thought Leadership Branding", "Thought Leadership Branding", "Cause-Driven Leadership Branding", "Visionary Leadership Branding", "Public Speaking & Event Branding", "Author/Content Leader Branding"]
    },
    {
        id: 2,
        title: "Startup & Product Branding",
        services: ["Startup Identity Branding", "Product Line Branding", "Digital-First Branding", "Niche Branding", "Product Rebranding", "MVP/Product Launch Branding", "Go-To-Market (GTM) Branding", "Co-Startup Branding"]
    }
]
export const CardsData2: data[] = [
    {
        id: 0,
        title: "Product Design",
        services: ["Digital Product Design", "UX Design (User Experience)", "UI Design (User Interface)", "Packaging Design", "Interaction Design", "Design Systems"]
    },
    {
        id: 1,
        title: "Website UX & Design",
        services: ["User-Centered Design", "Content-Driven Design", "Conversion-Focused / CRO Design", "Minimalist UX Design", "Journey-Based UX Design", "Experimental / Interactive Design", ""]
    },
    {
        id: 2,
        title: "Mobile App UX Design",
        services: ["Onboarding UX Design", "Navigation-Centric UX", "Task-Oriented UX Design", "Conversational UX", "Visual/Immersive UX", "Cross-Platform UX"]
    }
]
export const CardsData4: data[] = [
    {
        id: 0,
        title: "MVP Development",
        services: ["Prototype MVP", "Functionality-First MVP", "Single-Feature MVP", "No-Code/Low-Code MVP", "Hybrid MVP App"]
    },
    {
        id: 1,
        title: "Native App Development",
        services: ["iOS App Development", "Android App Development", "Device-Native Feature Apps", "Enterprise Native Apps", "Customer-Facing Native Apps", "Offline-First Native Apps", "Wearable & IoT Native Apps"]
    },
    {
        id: 2,
        title: "Full-Scale App Development ",
        services: ["End-to-End Custom App Development", "Native Full-Scale App Development", "Cross-Platform App Development", "AI/ML-Powered Full-Scale Apps", "Enterprise-Grade App Development", "Full-Scale E-commerce App Development"]
    }
]
export const CardsData5: data[] = [
    {
        id: 0,
        title: "Local SEO & GBP Management ",
        services: ["GBP Setup & Optimization", "Local Listing & Citation Building", "Local Keyword Targeting & On-Page SEO", "GBP Content Management", "Google Maps Optimization", "Multi-Location GBP Management"]
    },
    {
        id: 1,
        title: "Technical SEO",
        services: ["Crawlability Optimization", "Indexability Optimization", "Mobile Optimization", "HTTPS & Site Security", "Website Architecture Optimization", "International & Multilingual SEO"]
    },
    {
        id: 2,
        title: "E-commerce SEO",
        services: ["Product Page SEO", "Category Page SEO", "Site Architecture & Navigation SEO", "Content-Driven E-commerce SEO", "Technical E-commerce SEO", "Local E-commerce SEO"]
    }
]
export const CardsData3: data[] = [
    {
        id: 0,
        title: "Custom Website Development ",
        services: ["Corporate/Business Website Development", "Web Portal Development", "Web Application Development", "MVP & Startup Website Development", "Educational or eLearning Platform Development"]
    },
    {
        id: 1,
        title: "E-commerce Development",
        services: ["B2C E-commerce Development", "B2B E-commerce Development", "Marketplace Development", "Custom-Built E-commerce Platforms", "Mobile Commerce (M-commerce) Development", "Headless E-commerce Development"]
    },
    {
        id: 2,
        title: "CMS Development ",
        services: ["Traditional CMS Development", "Headless CMS Development", "Enterprise CMS Development", "E-commerce CMS Development", "Custom CMS Development", "Mobile-Friendly CMS Development"]
    }
]
export const CardsData6: data[] = [
    {
        id: 0,
        title: "Google Search Ads ",
        services: ["Standard Search Ads (Text Ads)", "Responsive Search Ads (RSA)", "Dynamic Search Ads (DSA)", "Local Search Ads", "Brand/Branded Search Ads", "Smart Search Campaigns"]
    },
    {
        id: 1,
        title: "YouTube Ads",
        services: ["Skippable In-Stream Ads", "Non-Skippable In-Stream Ads", "Video Discovery Ads", "Outstream Video Ads", "YouTube Remarketing Ads", "YouTube Shorts Ads"]
    },
    {
        id: 2,
        title: "Shopping Ads (Google & Bing) ",
        services: ["Standard Shopping Ads", "Smart Shopping Campaigns", "Performance Max for Retail", "Local Inventory Ads", "Showcase Shopping Ads", "Microsoft Shopping Campaigns"]
    }
]
export const CardsData7: data[] = [
    {
        id: 0,
        title: "iOS Optimization",
        services: ["App Store Optimization (ASO) for iOS", "Performance Optimization", "Battery & Resource Optimization", "UI/UX Optimization for iOS", "Localization & Internationalization", "Network & API Optimization"]
    },
    {
        id: 1,
        title: "App Launch Optimization",
        services: ["Pre-Launch Technical Optimization", "Beta Testing & User Feedback", "App Store Optimization (ASO)", "Pre-Launch Marketing Campaigns", "Launch Analytics & Tracking Setup", "Post-Launch Retargeting & User Activation"]
    },
    {
        id: 2,
        title: "ASO for Gaming Apps",
        services: ["Keyword Optimization", "Visual Asset Optimization", "Genre-Specific Positioning", "Localization ASO", "Ratings & Reviews Optimization", "Feature & Update Optimization"]
    }
]
export const CardsData8: data[] = [
    {
        id: 0,
        title: "Commercial Video Production",
        services: ["Brand Videos", "TV Commercials (TVCs)", "Social Media Commercials", "Product Commercials", "Explainer Commercials", "Promotional Campaign Videos"]
    },
    {
        id: 1,
        title: "Short Content Creation ",
        services: ["Short-Form Videos (Reels, TikToks, Shorts)", "Educational Micro-Content", "Talking Head or Thought-Leadership Clips", "Product or Feature Highlights", "Transition / Trend-Based Edits", "Carousel-Style Short Content"]
    },
    {
        id: 2,
        title: "Product Photography",
        services: ["Studio Product Photography", "Lifestyle Product Photography", "Flat Lay Photography", "Detail / Macro Shots", "360° Product Photography", "Packaging Shots"]
    }
]
export const CardsData9: data[] = [
    {
        id: 0,
        title: "Content Management ",
        services: ["Social Media Content Management", "Blog & SEO Content Management", "Email Marketing Management", "Short-Form Video Management", "E-commerce Product Content Management", "Copywriting & Brand Messaging Management"]
    },
    {
        id: 1,
        title: "Campaign Based Strategy",
        services: ["Product Launch Campaign", " Performance Marketing Campaign", "Brand Awareness Campaign", "Lead Generation Campaign", "Sales/Conversion Campaign", "Seasonal or Event-Based Campaign"]
    },
    {
        id: 2,
        title: "Personal Brand Management",
        services: ["Thought Leadership Branding", "Multi-Platform Identity Management", "Personal Website & Portfolio Management", "Reputation & Media Management", "Public Relations & Media Placement", "Monetization Strategy"]
    }
]
export const CardsData10: data[] = [
    {
        id: 0,
        title: "Funnel Growth Campaigns",
        services: ["Brand Awareness Campaigns", "Cold Traffic Acquisition Campaigns", "Content Marketing Campaigns", "Retargeting Campaigns", "Lead Generation & Email Capture Campaigns", "Product Education Campaigns"]
    },
    {
        id: 1,
        title: "Performance Marketing",
        services: ["Social Media Advertising", "Mobile App User Acquisition Campaigns", "Retargeting / Remarketing Campaigns", "Programmatic Display Advertising", "Affiliate & Influencer Performance Marketing", "Email & SMS Marketing"]
    },
    {
        id: 2,
        title: "Lead Generation Campaigns ",
        services: ["Content-Driven Lead Generation", "Paid Social Media Lead Generation", "B2B Lead Generation Campaigns", "Search Engine Lead Generation (PPC)", "Email Marketing Lead Generation", "Video Marketing Lead Generation"]
    }
]