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
        link: "/ui-ux-design"
    },
    {
        name: "Social Media Marketing",
        link: "/social-media-marketing"
    },
    {
        name: "Search Engine Optimization",
        link: "/search-engine-optimization"
    },
    {
        name: "Production",
        link: "/video-production"  // Changed "/SMM" → "/smm"
    },
    {
        name: "Search Engine Marketing",
        link: "/ppc"
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
