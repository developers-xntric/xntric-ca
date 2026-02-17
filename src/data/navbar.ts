interface Navbar {
    name: string;
    link: string;
    notIsService?: boolean;
}

export const links = [
    "/our-work",
    "/services",
    "/careers",
    "/about",
    "/blog",  // Changed "/Blog" → "/blog"
    '/game-marketing',
    
];

export const titles = [
    "Our Work",
    "Service",
    "Careers",
    "About",
    "Blog",
    "Game Marketing",
    
];

export const services: Navbar[] = [
    {
        name: "Web Development",
        link: "/website-development"
    },
    {
        name: "Branding",
        link: "/branding"
    },
    // {
    //     name: "Web Hosting",
    //     link: "/web-hosting"
    // },
    {
        name: "Mobile App Development",
        link: "/mobile-application"
    },
    {
        name: "App Store Optimization",
        link: "/app-store-optimization"  // Changed "/app_store_optimization" → "/app-store-optimization"
    },
    {
        name: "Digital Marketing",
        link: "/digital-marketing"
    },
    // {
    //     name: "IT Services",
    //     link: "/it-services"
    // },
    {
        name: "UI/UX Design",
        link: "/UI-UX-Design"  // Changed "/UI-UX-Design" → "/ui-ux-design"
    },
    {
        name: "Social Media Marketing",
        link: "/SMM"  // Changed "/SMM" → "/smm"
    },
    {
        name: "Search Engine Optimization",
        link: "/seo"  // Changed "/SMM" → "/smm"
    },
    {
        name: "Production",
        link: "/video-production"  // Changed "/SMM" → "/smm"
    },
    {
        name: "Search Engine Marketing",
        link: "/SEM"  // Changed "/SMM" → "/smm"
    },
    {
        name: "AI",
        link: "/ai"  // Changed "/SMM" → "/smm"
    },
    {
        name: "AI SEO",
        link: "/ai-seo"  // Changed "/SMM" → "/smm"
    },

];
