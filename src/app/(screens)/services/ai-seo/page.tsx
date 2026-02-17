import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import DigitalProducts from "@/components/service-inner/digital-production";
import ServiceInnerHero from "@/components/service-inner/hero";
import NewGreen from "@/components/service-inner/new-green";
import ServicesOffer, {
  Service,
} from "@/components/service-inner/service-offer";
import ScrollCardsSection from "@/components/services/form-market";
import NewFaqs from "@/components/services/new-faqs";
import NewOurProcess from "@/components/services/new-our-process";
import TechStackCarousel from "@/components/services/techstacks";
import { Awwards } from "@/data/awwards";
import { steps3 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI SEO & AEO: Smarter Answers, Faster Search Results",
  description:
    "Achieve smarter, faster search results with our AI SEO and Answer Engine Optimization (AEO) services. Boost organic traffic and dominate visibility for AI and voice search.",
    alternates: {
    canonical: "https://xntric.ae/ai-seo", 
  },
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "Do you provide end-to-end branding solutions in the Dubai?",
    answer:
      "Yes, we handle everything from brand strategy, logo design, and visual identity to marketing collateral and digital presence for UAE businesses.",
  },
  {
    question: "How much does branding cost in Dubai?",
    answer: `Depending on scope, complete brand identity projects can range from AED 15,000 to over AED 100,000 for large-scale corporate rebrands.`,
  },
  {
    question: "How much does an agency charge for branding?",
    answer: `Agency fees vary based on complexity, deliverables, and industry, typically falling between AED 10,000 and AED 50,000.`,
  },
  {
    question: "How much does a marketing agency cost in Dubai?",
    answer:
      "Monthly retainers start around AED 8,000 for focused campaigns and scale with multi-channel strategies.",
  },
  {
    question: "What are the branding agencies in GCC?",
    answer:
      "The GCC hosts numerous agencies, but Xntric distinguishes itself with research-led creative execution and region-specific expertise.",
  },
  {
    question: "How to choose a branding agency in Dubai?",
    answer:
      "Select a partner with a proven track record, an understanding of local market dynamics, and the ability to deliver measurable growth, all of which define Xntric.",
  },
  {
    question:
      "How do you ensure our brand stands out in Dubai’s competitive market?",
    answer:
      "We combine market research, competitor analysis, and creative storytelling to craft distinctive brands that resonate and differentiate in Dubai’s vibrant business landscape.",
  },
  
 
  
];
const cards = [
  {
    id: "01",
    title: "95%",
    description:
      "Identify 95% of Answer Engine Barriers Limiting Your AI Search Reach.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "2X",
    description:
      "Leverage User Behavior Data to Uncover Critical AI Answer Insights",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "RANKINGS ",
    description:
      "Enhance visibility with optimized answers tailored for AI and voice search",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "300% ",
    description:
      "Boost organic traffic by up to 300% through strategic Answer Engine Optimization",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Corporate Branding",
    description:
      "We define corporate identities to reflect values and leadership. From multinational enterprises to regional leaders, we create brand systems that build credibility.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Startup & Product Branding",
    description:
      "For businesses ready to make a bold market entry, we deliver full-spectrum brand creation, from logo design to positioning and launch campaigns.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Personal Branding",
    description:
      "For executives, founders, and thought leaders, we craft powerful personal brands that communicate authority, authenticity",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Event & Campaign Branding",
    description:
      "Whether it’s a landmark event or a high-stakes product launch, our branding captures attention and amplifies impact.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Brand Systems & Guidelines",
    description:
      "We design comprehensive brand manuals and digital asset libraries, giving your teams the tools to maintain visual harmony and brand integrity as you scale.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Xntric",
      url: "https://xntric.ae",
      logo: "https://xntric.ae/HomePage/X-Logo.png",
      image: "https://xntric.ae/HomePage/X-Logo.png",
      description:
        "XNTRIC specializes in performance-focused digital marketing for Dubai businesses. From SEO and paid media to social campaigns and conversion optimization, we design bilingual, culturally relevant campaigns that deliver measurable leads and revenue. Our in-house team blends creative storytelling, branding and technical delivery to launch and scale campaigns across the UAE and GCC. Request a free audit and discover how we can accelerate growth for your Dubai business.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Costra Business park - G47",
        addressLocality: "Dubai Silicon Oasis, Dubai",
        addressRegion: "Dubai production city - Dubai",
        postalCode: "00000",
        addressCountry: "Dubai - UAE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "00971 054 308 9222",
        contactType: "Customer Service",
        areaServed: "UAE",
        availableLanguage: "English",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "30",
        bestRating: "5",
        worstRating: "2",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      additionalType: "https://schema.org/TechnologyBusiness",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ...[
          {
            question:
              "Do you provide end-to-end branding solutions in the Dubai?",
            answer:
              "Yes, we handle everything from brand strategy, logo design, and visual identity to marketing collateral and digital presence for UAE businesses.",
          },
          {
            question: "How much does branding cost in Dubai?",
            answer: `Depending on scope, complete brand identity projects can range from AED 15,000 to over AED 100,000 for large-scale corporate rebrands.`,
          },
          {
            question: "How much does an agency charge for branding?",
            answer: `Agency fees vary based on complexity, deliverables, and industry, typically falling between AED 10,000 and AED 50,000.`,
          },
          {
            question: "How much does a marketing agency cost in Dubai?",
            answer:
              "Monthly retainers start around AED 8,000 for focused campaigns and scale with multi-channel strategies.",
          },
          {
            question: "What are the branding agencies in GCC?",
            answer:
              "The GCC hosts numerous agencies, but Xntric distinguishes itself with research-led creative execution and region-specific expertise.",
          },
          {
            question: "How to choose a branding agency in Dubai?",
            answer:
              "Select a partner with a proven track record, an understanding of local market dynamics, and the ability to deliver measurable growth, all of which define Xntric.",
          },
          {
            question:
              "How do you ensure our brand stands out in Dubai’s competitive market?",
            answer:
              "We combine market research, competitor analysis, and creative storytelling to craft distinctive brands that resonate and differentiate in Dubai’s vibrant business landscape.",
          },
          {
            question: "Do you work exclusively with UAE-based companies?",
            answer:
              "Yes, our expertise is tailored to the UAE market, understanding local business culture, consumer behavior, and industry regulations.",
          },
          {
            question: "Do you help with UAE branding or bilingual identity?",
            answer:
              "Yes, we create bilingual brand identities and marketing assets to ensure effective communication with UAE and international audiences.",
          },
        ].map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      ],
    },
  ],
};

// const cardSets: CardSet[] = [
//   {
//     id: 1,
//     cards: {
//       strategy: {
//         title: "Strategic Brilliance",
//         description:
//           "Positioning that ensures you’re seen, remembered, and preferred.",
//       },
//       media: {
//         type: "video",
//         src: "/HomePage/video1.webm",
//       },
//       results: {
//         title: "Results That Speak",
//         description:
//           "We dive deep into data, audience insights, and market trends to shape smart digital strategies. Every move is purposeful built to drive growth and measurable results.",

//         imageSrc: "/HomePage/image1.png",
//       },
//     },
//   },
//   {
//     id: 2,
//     cards: {
//       strategy: {
//         title: "Design Excellence",
//         description:
//           "Distinctive visuals with a clear narrative and enduring appeal.",
//       },
//       media: {
//         type: "video",
//         src: "/HomePage/video2.mp4",
//       },
//       results: {
//         title: "Creative Solutions ",
//         description:
//           "See how our design forward approach has transformed brands and created memorable digital experiences that resonate with target audiences.",

//         imageSrc: "/HomePage/image2.png",
//       },
//     },
//   },
//   {
//     id: 3,
//     cards: {
//       strategy: {
//         title: "Consistency at Scale",
//         description:
//           "Cohesive identity across all digital and physical touchpoints.",
//       },
//       media: {
//         type: "video",
//         src: "/HomePage/video3.mp4",
//       },
//       results: {
//         title: "Technical Excellence ",
//         description:
//           "Discover how our technical expertise has helped businesses overcome challenges and achieve their digital transformation goals.",
//         imageSrc: "/HomePage/image5.png",
//       },
//     },
//   },
//   {
//     id: 4,
//     cards: {
//       strategy: {
//         title: "Results You Can Measure",
//         description: "Increased recall, trust, engagement, and market share.",
//       },
//       media: {
//         type: "video",
//         src: "/HomePage/video4.webm",
//       },
//       results: {
//         title: "Growth Stories ",
//         description:
//           "Explore how our marketing campaigns have helped businesses grow their audience, increase engagement, and drive measurable results.",
//         imageSrc: "/HomePage/image4.png",
//       },
//     },
//   },
// ];

const technologies = [
  {
    name: "ChatGPT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M66.4472 28.7279C67.2546 26.3659 67.5345 23.8595 67.2677 21.3807C67.0009 18.9019 66.1937 16.5094 64.9016 14.3674C60.9662 7.69924 53.06 4.26624 45.3381 5.88064C43.6278 4.01227 41.5359 2.52234 39.2001 1.50886C36.8643 0.495389 34.3375 -0.0186641 31.7859 0.000517709C23.8926 -0.0154349 16.8886 4.93306 14.4601 12.2457C11.9639 12.7388 9.60252 13.7498 7.53253 15.2119C5.46254 16.674 3.7313 18.5536 2.45364 20.7261C0.522447 23.9621 -0.302912 27.7251 0.0994375 31.4594C0.501787 35.1937 2.11052 38.7014 4.68808 41.4645C3.87971 43.8267 3.59901 46.3336 3.86525 48.813C4.1315 51.2924 4.93839 53.6855 6.23052 55.8282C10.1659 62.4964 18.0721 65.9262 25.794 64.315C27.5037 66.183 29.5951 67.6725 31.9304 68.6855C34.2657 69.6985 36.792 70.2119 39.3429 70.1919C47.2427 70.2111 54.25 65.2594 56.6784 57.9403C59.1763 57.4474 61.5394 56.4357 63.6106 54.9725C65.6818 53.5093 67.4137 51.628 68.6914 49.4535C70.6189 46.2177 71.4416 42.4564 71.0381 38.7243C70.6347 34.9921 69.0264 31.4866 66.4505 28.7248L66.4472 28.7279ZM39.3462 65.604C36.192 65.6114 33.1337 64.5353 30.6962 62.5602C30.8061 62.5028 30.9969 62.4007 31.123 62.3241L45.4804 54.2521C45.8387 54.0548 46.1369 53.7663 46.3439 53.4168C46.5509 53.0672 46.6591 52.6693 46.6574 52.2644V32.5598L52.7269 35.9704C52.7916 36.0023 52.8336 36.0629 52.8433 36.1299V52.4494C52.8336 59.7047 46.7964 65.588 39.3462 65.604ZM10.3178 53.5374C8.73538 50.8815 8.16442 47.7559 8.70749 44.722C8.81096 44.7858 8.99851 44.8975 9.13109 44.9709L23.4884 53.0429C24.216 53.4576 25.1182 53.4576 25.849 53.0429L43.3753 43.1906V50.0119C43.3767 50.0469 43.3695 50.0817 43.3543 50.1134C43.3391 50.1451 43.3163 50.1726 43.288 50.1937L28.7754 58.3487C22.3114 61.9731 14.0559 59.8164 10.3211 53.531L10.3178 53.5374ZM6.53772 23.0233C8.12637 20.3496 10.6153 18.3106 13.5709 17.2612L13.5644 17.743V33.887C13.5624 34.2924 13.6706 34.6908 13.8776 35.0409C14.0846 35.3911 14.3829 35.6801 14.7414 35.8779L32.2677 45.727L26.2014 49.1409C26.1714 49.1599 26.1371 49.1713 26.1016 49.174C26.0661 49.1768 26.0304 49.1709 25.9977 49.1568L11.4819 40.9923C5.03085 37.3551 2.81904 29.3214 6.53449 23.0297L6.53772 23.0233ZM56.3906 34.3177L38.8643 24.4654L44.9306 21.0579C44.9604 21.0384 44.9945 21.0265 45.0301 21.0231C45.0656 21.0198 45.1014 21.0252 45.1344 21.0388L59.6501 29.1969C66.1109 32.8341 68.326 40.8806 64.5944 47.1691C63.0043 49.8411 60.5176 51.8805 57.5644 52.9344V36.3086C57.5665 35.9041 57.4587 35.5064 57.2523 35.1568C57.0459 34.8073 56.7483 34.5186 56.3906 34.3209V34.3177ZM62.4278 25.4704C62.2866 25.3857 62.1443 25.3027 62.001 25.2216L47.6437 17.1496C47.2851 16.946 46.8787 16.8389 46.465 16.8389C46.0513 16.8389 45.6449 16.946 45.2863 17.1496L27.7601 27.0019V20.1805C27.7586 20.1455 27.7658 20.1107 27.781 20.079C27.7962 20.0474 27.819 20.0198 27.8474 19.9987L42.3567 11.8469C48.8239 8.21929 57.0859 10.3793 60.811 16.6742C62.3858 19.3319 62.9614 22.4458 62.4278 25.4704ZM24.4617 37.6263L18.3922 34.2188C18.3605 34.2035 18.3333 34.1806 18.3129 34.1522C18.2926 34.1237 18.2798 34.0907 18.2758 34.0561V17.7366C18.279 10.4718 24.3324 4.58529 31.7956 4.59167C34.9516 4.59167 38.0042 5.67007 40.4327 7.63543C40.3227 7.69286 40.1352 7.79495 40.009 7.86834L25.6517 15.9403C25.2928 16.1372 24.994 16.4255 24.7864 16.7751C24.5788 17.1247 24.47 17.5229 24.4714 17.928L24.4617 37.6231V37.6263ZM27.7601 30.7093L35.566 26.3223L43.372 30.7093V39.4832L35.566 43.8701L27.7568 39.4832V30.7093H27.7601Z"
          fill="#74AA9C"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
      >
        <path
          d="M40.8731 79.1623C39.4138 69.5297 34.9102 60.6169 28.0212 53.728C21.1322 46.839 12.2195 42.3354 2.58691 40.8761C12.2195 39.4167 21.1322 34.9131 28.0212 28.0241C34.9102 21.1352 39.4138 12.2224 40.8731 2.58984C42.3329 12.2222 46.8367 21.1347 53.7256 28.0236C60.6145 34.9125 69.527 39.4162 79.1593 40.8761C69.527 42.3359 60.6145 46.8396 53.7256 53.7285C46.8367 60.6174 42.3329 69.5299 40.8731 79.1623Z"
          fill="url(#paint0_linear_2798_12213)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2798_12213"
            x1="2.58675"
            y1="7659.83"
            x2="5265.41"
            y2="2330.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1C7DFF" />
            <stop offset="0.52021" stop-color="#1C69FF" />
            <stop offset="1" stop-color="#F0DCD6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Perplexity",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="65"
        viewBox="0 0 56 65"
        fill="none"
      >
        <path
          d="M48.653 0V19.439H55.8772V47.1007H48.0677V64.1553L29.3435 47.5979V64.0243H26.4405V47.5792L7.69509 64.1553V46.8734H0V19.2145H7.6738V0L26.4405 17.3593V0.507896H29.3408V17.8566L48.653 0ZM29.3435 24.1758V43.7405L45.1647 57.7317V38.6001L29.3435 24.1758ZM26.4193 23.962L10.598 38.3916V57.7317L26.4193 43.7405V23.9647V23.962ZM48.0677 44.2244H52.9742V22.318H31.8234L48.0677 37.1272V44.2244ZM24.1682 22.0908H2.90029V43.9972H7.68976V37.1112L24.1655 22.0881L24.1682 22.0908ZM10.5767 6.61869V19.2092H24.1868L10.5767 6.61869ZM45.7501 6.61869L32.14 19.2092H45.7501V6.61869Z"
          fill="#22B8CD"
        />
      </svg>
    ),
  },
  {
    name: "Grok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="58"
        viewBox="0 0 54 58"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9462 20.451L38.7926 57.8605H26.8597L0.013366 20.451H11.9462ZM11.9356 41.2282L17.9047 49.5496L11.9409 57.8605H0L11.9356 41.2282ZM53.4627 4.16069V57.8605H43.6817V17.7895L53.4627 4.16069ZM53.4627 0L26.8597 37.0702L20.8906 28.7514L41.5218 0H53.4627Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Claude",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="72"
        viewBox="0 0 73 72"
        fill="none"
      >
        <path
          d="M17.3546 45.9264L29.5648 39.0789L29.7717 38.4839L29.5648 38.1528H28.9724L26.9287 38.0286L19.9493 37.8398L13.8985 37.5888L8.03656 37.2732L6.55943 36.9602L5.17285 35.1364L5.31513 34.2259L6.55685 33.3955L8.33146 33.5507L12.2636 33.8171L18.1565 34.2259L22.4301 34.4768L28.7654 35.1364H29.7717L29.914 34.7303L29.5674 34.4768L29.3009 34.2259L23.201 30.0972L16.5992 25.7305L13.1431 23.216L11.2702 21.9458L10.3286 20.7507L9.91982 18.1431L11.6168 16.2753L13.8959 16.4305L14.478 16.5883L16.7881 18.3629L21.7239 22.1812L28.1679 26.923L29.1121 27.7094L29.4872 27.443L29.5363 27.2541L29.1121 26.5453L25.6068 20.2178L21.8662 13.7764L20.2002 11.1067L19.7604 9.50538C19.5929 8.89036 19.5025 8.25687 19.4914 7.61952L21.4264 4.99899L22.4948 4.65234L25.0713 4.99899L26.1578 5.94062L27.7617 9.59851L30.3538 15.3647L34.3764 23.203L35.5561 25.5261L36.1847 27.6784L36.4201 28.3381H36.8288V27.9604L37.1599 23.5471L37.773 18.1275L38.368 11.1558L38.575 9.18978L39.5477 6.83569L41.4801 5.56293L42.9908 6.28727L44.2325 8.0593L44.0592 9.20789L43.3194 13.9962L41.8733 21.506L40.9317 26.5298H41.4801L42.1087 25.9038L44.6568 22.5253L48.9304 17.1859L50.8188 15.0646L53.0177 12.7261L54.4327 11.6111H57.105L59.071 14.5317L58.1915 17.5481L55.439 21.0326L53.16 23.9869L49.8901 28.3846L47.8465 31.9028L48.0353 32.1874L48.5216 32.1356L55.9098 30.568L59.9014 29.8436L64.6639 29.0288L66.8188 30.0325L67.0542 31.0543L66.2057 33.1419L61.1121 34.3992L55.1389 35.5943L46.2426 37.6975L46.1339 37.7751L46.2607 37.9329L50.2678 38.3106L51.9803 38.4037H56.1763L63.9888 38.9858L66.0324 40.3361L67.2586 41.9866L67.0542 43.2412L63.9111 44.8451L59.6686 43.8388L49.7634 41.4847L46.3693 40.6336H45.8985V40.9182L48.726 43.681L53.9153 48.3633L60.4059 54.3908L60.7344 55.886L59.9014 57.0631L59.0219 56.9363L53.3178 52.6498L51.1163 50.7174L46.1339 46.5266H45.8028V46.9664L46.9514 48.6453L53.0177 57.7538L53.3333 60.5476L52.8935 61.4608L51.3207 62.0118L49.5926 61.6962L46.0382 56.7164L42.3777 51.1106L39.4209 46.0842L39.0587 46.2912L37.3152 65.0566L36.4977 66.0138L34.6118 66.7381L33.0416 65.5455L32.2086 63.6131L33.0416 59.7948L34.0479 54.8176L34.8628 50.8597L35.6026 45.9445L36.0424 44.3096L36.0114 44.201L35.6492 44.2475L31.9396 49.336L26.3001 56.9544L21.8351 61.7273L20.7641 62.1515L18.9093 61.1944L19.0826 59.4818L20.12 57.9581L26.2975 50.1043L30.0227 45.2357L32.4285 42.4263L32.413 42.0176H32.2707L15.8619 52.6653L12.9387 53.043L11.6789 51.8634L11.8367 49.9335L12.4343 49.3049L17.3701 45.9109L17.3546 45.9264Z"
          fill="#D97757"
        />
      </svg>
    ),
  },
  {
    name: "Nova Pro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="42"
        viewBox="0 0 70 42"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5371 15.056C19.5371 15.9111 19.6295 16.6015 19.7913 17.107C19.9762 17.6154 20.2073 18.1701 20.5308 18.7709C20.6463 18.9529 20.6926 19.1378 20.6926 19.2996C20.6926 19.5307 20.5539 19.7618 20.2535 19.9929L18.8005 20.9606C18.6248 21.0872 18.4159 21.1595 18.1996 21.1686C17.9685 21.1686 17.7374 21.053 17.5092 20.845C17.1989 20.5112 16.9213 20.1485 16.6801 19.7618C16.4219 19.3187 16.1829 18.8648 15.9637 18.4012C14.1669 20.5215 11.9051 21.5817 9.18389 21.5817C7.24845 21.5817 5.70298 21.0299 4.57349 19.9235C3.44689 18.8143 2.86914 17.341 2.86914 15.4951C2.86914 13.5366 3.56243 11.942 4.96635 10.7461C6.37316 9.54723 8.23928 8.94638 10.6138 8.94638C11.3995 8.94638 12.2055 9.01571 13.0577 9.13126C13.9127 9.24681 14.7909 9.43168 15.7095 9.63967V7.95555C15.7095 6.20209 15.3427 4.98016 14.6262 4.26665C13.8896 3.55024 12.6446 3.20648 10.8709 3.20648C10.0621 3.20648 9.23011 3.29603 8.37794 3.50402C7.52576 3.71201 6.69381 3.96622 5.88786 4.28976C5.62474 4.40659 5.3546 4.50693 5.07901 4.59018C4.96021 4.62848 4.83684 4.65082 4.71215 4.65662C4.38861 4.65662 4.22684 4.42553 4.22684 3.94311V2.81362C4.22684 2.44386 4.27306 2.16654 4.38861 2.00477C4.56311 1.79505 4.78487 1.62972 5.03568 1.52236C5.95953 1.06366 6.93388 0.714635 7.93885 0.482416C9.11462 0.181409 10.3246 0.0347776 11.5382 0.046219C14.2825 0.046219 16.2873 0.670184 17.5785 1.91522C18.8496 3.15738 19.4909 5.04949 19.4909 7.58579V15.056H19.5371ZM10.1776 18.5629C10.9373 18.5629 11.7202 18.4243 12.5521 18.147C13.3978 17.8547 14.1525 17.3469 14.7418 16.6737C15.1142 16.2479 15.3832 15.7417 15.5275 15.1947C15.6633 14.6429 15.7586 13.9728 15.7586 13.1899V12.2222C15.0588 12.0516 14.3499 11.9204 13.6354 11.8293C12.9168 11.738 12.1932 11.6917 11.4689 11.6907C9.9234 11.6907 8.79391 11.9911 8.03129 12.6151C7.27156 13.2361 6.90469 14.1114 6.90469 15.264C6.90469 16.3473 7.17912 17.1561 7.75686 17.7079C8.30861 18.2856 9.11456 18.5629 10.1776 18.5629ZM28.6943 21.053C28.2784 21.053 28.001 20.9837 27.8162 20.8219C27.6313 20.6833 27.4695 20.3597 27.3309 19.9235L21.9145 2.09721C21.8091 1.79831 21.7393 1.48805 21.7065 1.17282C21.7065 0.803066 21.8914 0.595077 22.2583 0.595077H24.5201C24.9563 0.595077 25.2568 0.667295 25.4156 0.826174C25.6034 0.964833 25.7421 1.28837 25.8778 1.72746L29.7545 16.9915L33.351 1.72746C33.4665 1.26526 33.6052 0.964833 33.7872 0.826174C34.0643 0.65621 34.387 0.575535 34.7115 0.595077H36.5546C36.9936 0.595077 37.2941 0.667295 37.4789 0.826174C37.6609 0.964833 37.8256 1.28837 37.9151 1.72746L41.5578 17.1764L45.5471 1.72746C45.6858 1.26526 45.8476 0.964833 46.0093 0.826174C46.2769 0.656289 46.5914 0.575398 46.9077 0.595077H49.0541C49.4209 0.595077 49.6318 0.782845 49.6318 1.17282C49.6318 1.28837 49.6058 1.40392 49.5827 1.54258C49.5465 1.73969 49.4924 1.93308 49.4209 2.12032L43.8659 19.9438C43.7273 20.4059 43.5655 20.7035 43.3806 20.8421C43.1203 21.0091 42.8141 21.09 42.5053 21.0732H40.5208C40.0875 21.0732 39.7841 21.0039 39.5964 20.8421C39.4144 20.6804 39.2526 20.38 39.1631 19.9178L35.5897 5.0466L32.0366 19.8946C31.921 20.3568 31.7853 20.6573 31.6033 20.819C31.4155 20.9808 31.092 21.0501 30.6789 21.0501L28.6972 21.053H28.6943ZM58.3211 21.6741C57.1223 21.6741 55.9234 21.5354 54.7708 21.261C53.6182 20.9837 52.7198 20.6833 52.119 20.3366C51.7492 20.1315 51.4979 19.9004 51.4055 19.6924C51.3154 19.4885 51.2682 19.2683 51.2668 19.0454V17.8696C51.2668 17.3872 51.4517 17.1561 51.7955 17.1561C51.9341 17.1561 52.0728 17.1792 52.2114 17.2255C52.3501 17.2717 52.5581 17.3641 52.7892 17.4566C53.572 17.8032 54.4242 18.0776 55.3255 18.2625C56.2499 18.4474 57.1454 18.5398 58.0698 18.5398C59.5199 18.5398 60.6523 18.2856 61.4351 17.7772C61.8104 17.5505 62.119 17.2285 62.3295 16.8439C62.5401 16.4593 62.6451 16.0259 62.6339 15.5876C62.6424 15.2907 62.5919 14.9951 62.4852 14.7179C62.3786 14.4407 62.2181 14.1874 62.0129 13.9728C61.5969 13.5366 60.8112 13.1437 59.6817 12.7739L56.3394 11.734C54.6553 11.2054 53.4103 10.4225 52.6505 9.38546C51.9069 8.42838 51.5007 7.25229 51.495 6.04032C51.495 5.0726 51.7059 4.22043 52.119 3.48091C52.535 2.74429 53.0867 2.09721 53.78 1.59169C54.4733 1.06016 55.2533 0.667296 56.1777 0.392867C57.102 0.115549 58.0698 0 59.0837 0C59.5892 0 60.1236 0.02311 60.6292 0.0924394C61.1578 0.161769 61.6402 0.254207 62.1255 0.346647C62.5877 0.462196 63.0268 0.577745 63.4399 0.713516C63.8559 0.852174 64.1794 0.990832 64.4105 1.12949C64.6827 1.26653 64.9199 1.46418 65.1038 1.70724C65.2527 1.93156 65.3247 2.19819 65.3089 2.46697V3.55024C65.3089 4.03555 65.124 4.28976 64.7774 4.28976C64.4705 4.25457 64.1733 4.1604 63.9021 4.01244C62.5091 3.39706 60.9993 3.09057 59.4766 3.11404C58.1622 3.11404 57.1223 3.31914 56.4087 3.75823C55.6923 4.19732 55.3255 4.86461 55.3255 5.80922C55.3255 6.4563 55.5566 7.01093 56.0188 7.44713C56.481 7.88622 57.3302 8.3253 58.5522 8.71817L61.828 9.75233C63.4861 10.2839 64.6878 11.0234 65.4013 11.968C66.1149 12.9126 66.4615 13.9959 66.4615 15.1947C66.4615 16.1855 66.2535 17.0868 65.8635 17.8696C65.4535 18.659 64.8793 19.3515 64.1794 19.9004C63.463 20.4782 62.6108 20.8913 61.62 21.1917C60.5801 21.5123 59.4997 21.6741 58.3211 21.6741Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.09228 27.3718C10.8677 33.0424 22.931 36.48 35.4017 36.48C43.8194 36.48 53.0633 34.7265 61.5735 31.13C62.8445 30.5523 63.9249 31.9591 62.6799 32.8835C55.0941 38.4876 44.0707 41.4601 34.5957 41.4601C21.3134 41.4601 9.34826 36.5493 0.306552 28.3858C-0.406963 27.7416 0.237222 26.8634 1.09228 27.3718ZM69.0668 26.7941C69.8959 27.834 68.8357 34.9576 64.7771 38.3692C64.156 38.9007 63.5552 38.6234 63.8325 37.933L64.338 36.6648C65.3288 34.1228 66.6548 30.3154 65.8401 29.2841C64.8695 28.042 59.4272 28.6862 56.9602 28.9866C56.2236 29.079 56.108 28.432 56.7782 27.9467C61.1113 24.9048 68.2378 25.7801 69.0668 26.7941Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: "Deepseek",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M62.4609 3.82079C61.7883 3.49942 61.5275 4.11003 61.1376 4.42069C61.003 4.52246 60.8905 4.65369 60.7779 4.76885C59.7977 5.79725 58.6556 6.46678 57.1675 6.38643C54.982 6.2686 53.1205 6.94081 51.4732 8.57714C51.1245 6.55783 49.9604 5.35536 48.1922 4.58138C47.2642 4.17966 46.3252 3.77794 45.68 2.90487C45.227 2.28622 45.1035 1.59259 44.8756 0.912347C44.7328 0.502594 44.5873 0.082128 44.1068 0.00981859C43.5797 -0.0705252 43.3765 0.357975 43.1706 0.719522C42.3469 2.19249 42.0284 3.82079 42.0559 5.46516C42.13 9.16633 43.7252 12.1123 46.8936 14.2119C47.256 14.4529 47.3493 14.694 47.234 15.0448C47.0171 15.7679 46.7618 16.4669 46.5339 17.1873C46.3911 17.6506 46.177 17.7524 45.6718 17.5489C43.9632 16.8317 42.4114 15.8017 41.1004 14.5145C38.8491 12.3801 36.8091 10.0233 34.2667 8.1781C33.678 7.75148 33.0736 7.34592 32.4546 6.96223C29.8628 4.493 32.7978 2.46566 33.476 2.22731C34.1871 1.97824 33.7231 1.11321 31.4251 1.12392C29.1325 1.13463 27.0322 1.88718 24.358 2.8888C23.9654 3.04146 23.4629 3.29856 23.1334 3.23696C20.6325 2.77902 18.075 2.69235 15.5474 2.97986C10.589 3.52352 6.62436 5.81867 3.71406 9.74212C0.213459 14.4556 -0.607466 19.8092 0.400157 25.3984C1.4572 31.2823 4.524 36.1618 9.24088 39.9728C14.128 43.9204 19.7564 45.8566 26.1783 45.4844C30.077 45.2674 34.4232 44.7532 39.3186 40.6932C40.5541 41.2931 41.85 41.5315 44.0052 41.7136C45.6608 41.8662 47.256 41.6332 48.4915 41.3842C50.4244 40.9824 50.2898 39.231 49.5897 38.9042C43.9201 36.3172 45.1639 37.3697 44.0327 36.5207C46.9155 33.1784 51.259 29.7075 52.9558 18.4675C53.0903 17.573 52.975 17.0132 52.9558 16.2875C52.9476 15.8509 53.0491 15.6768 53.5598 15.626C54.985 15.4808 56.3673 15.0651 57.6287 14.4021C61.3023 12.4363 62.7547 9.20918 63.1062 5.33661C63.1583 4.74742 63.0952 4.13145 62.4582 3.82347M30.4669 38.6659C24.9702 34.4344 22.307 33.0418 21.2061 33.1007C20.1765 33.157 20.3604 34.3112 20.5883 35.0638C20.8244 35.8056 21.1319 36.3172 21.5657 36.9679C21.865 37.4018 22.0709 38.0445 21.2692 38.5213C19.4983 39.6005 16.4205 38.1624 16.2723 38.0928C12.6948 36.0306 9.69939 33.2989 7.58805 29.571C5.55359 25.9769 4.37025 22.1258 4.17531 18.0149C4.1204 17.0186 4.42241 16.6678 5.42729 16.4883C6.75438 16.2408 8.11409 16.2074 9.45229 16.3892C15.0615 17.1927 19.836 19.6512 23.8391 23.5398C26.1234 25.76 27.8531 28.406 29.6322 30.993C31.5266 33.7435 33.5639 36.36 36.1584 38.5025C37.0727 39.2551 37.8058 39.8282 38.5031 40.2513C36.3945 40.479 32.8747 40.5298 30.4669 38.6659ZM33.1026 22.0642C33.1026 21.8554 33.1876 21.6551 33.339 21.5074C33.4904 21.3598 33.6957 21.2768 33.9098 21.2768C34.1239 21.2768 34.3292 21.3598 34.4806 21.5074C34.632 21.6551 34.717 21.8554 34.717 22.0642C34.7177 22.1685 34.6972 22.2719 34.6566 22.3684C34.616 22.4649 34.5562 22.5526 34.4806 22.6263C34.405 22.7001 34.3151 22.7584 34.2162 22.798C34.1172 22.8376 34.0112 22.8576 33.9043 22.8569C33.7977 22.858 33.6919 22.8382 33.5932 22.7986C33.4946 22.7591 33.4051 22.7006 33.33 22.6267C33.255 22.5527 33.196 22.4648 33.1564 22.3682C33.1169 22.2716 33.0976 22.1682 33.0999 22.0642M41.2816 26.1805C40.7545 26.3893 40.2301 26.5715 39.7277 26.5929C38.971 26.616 38.2294 26.3843 37.6273 25.9367C36.908 25.3476 36.3918 25.0181 36.1721 23.9817C36.0998 23.4776 36.1147 22.9652 36.2161 22.4659C36.4028 21.6223 36.1941 21.084 35.5901 20.5912C35.0959 20.1895 34.4699 20.0824 33.778 20.0824C33.5404 20.0723 33.3096 20.0021 33.1081 19.8788C32.8198 19.7369 32.5837 19.3861 32.8088 18.9549C32.9521 18.7536 33.123 18.5725 33.3168 18.4166C34.2502 17.8943 35.332 18.0684 36.3314 18.4567C37.2566 18.829 37.9568 19.5092 38.9644 20.4707C39.994 21.633 40.1779 21.9571 40.7655 22.8274C41.2267 23.513 41.6523 24.2147 41.9406 25.0181C42.1135 25.5163 41.8857 25.9287 41.2816 26.1805Z"
          fill="#4D6BFE"
        />
      </svg>
    ),
  },
  {
    name: "Qwen",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M64.5405 39.9798L56.0213 25.1895L60.5176 17.63C60.8769 16.999 60.8769 16.2189 60.5176 15.5879L56.0213 8.0284C55.7934 7.62084 55.3596 7.36667 54.8819 7.36667H38.2729L34.4428 0.661729C34.2149 0.254174 33.7811 0 33.3034 0H24.4336C23.9559 0 23.5221 0.254174 23.2942 0.661729L14.775 15.4477H5.90517C5.4275 15.4477 4.99365 15.7018 4.76577 16.1094L0.269512 23.6689C-0.0898374 24.2999 -0.0898374 25.08 0.269512 25.711L7.87721 39.4321L4.04707 46.137C3.68772 46.768 3.68772 47.5481 4.04707 48.1792L8.54332 55.7386C8.7712 56.1462 9.20505 56.4004 9.68272 56.4004H26.2917L30.1218 63.1053C30.3497 63.5129 30.7836 63.767 31.2612 63.767H40.131C40.6087 63.767 41.0426 63.5129 41.2704 63.1053L49.7897 48.3194H57.3974C57.875 48.3194 58.3089 48.0652 58.5368 47.6577L63.033 40.0982C63.3924 39.4671 63.3924 38.6871 63.033 38.056L64.5405 39.9798Z"
          fill="url(#paint0_radial_2825_10963)"
        />
        <path
          d="M40.1314 63.7655H31.2616L26.292 55.7371H9.68307L14.7753 47.7087H23.2945L4.76611 16.5504H14.7753L24.4339 0.660156L28.9302 8.68855L24.4339 16.5504H58.7387L54.2424 24.1099L62.7616 38.8958H54.2424L49.79 31.034L32.2695 63.7655H40.1314Z"
          fill="white"
        />
        <path
          d="M43.9612 27.3086H21.2959L32.2692 45.837L43.9612 27.3086Z"
          fill="url(#paint1_radial_2825_10963)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1453) rotate(90) scale(43.8231 43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1477) rotate(90) scale(43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M66.4472 28.7279C67.2546 26.3659 67.5345 23.8595 67.2677 21.3807C67.0009 18.9019 66.1937 16.5094 64.9016 14.3674C60.9662 7.69924 53.06 4.26624 45.3381 5.88064C43.6278 4.01227 41.5359 2.52234 39.2001 1.50886C36.8643 0.495389 34.3375 -0.0186641 31.7859 0.000517709C23.8926 -0.0154349 16.8886 4.93306 14.4601 12.2457C11.9639 12.7388 9.60252 13.7498 7.53253 15.2119C5.46254 16.674 3.7313 18.5536 2.45364 20.7261C0.522447 23.9621 -0.302912 27.7251 0.0994375 31.4594C0.501787 35.1937 2.11052 38.7014 4.68808 41.4645C3.87971 43.8267 3.59901 46.3336 3.86525 48.813C4.1315 51.2924 4.93839 53.6855 6.23052 55.8282C10.1659 62.4964 18.0721 65.9262 25.794 64.315C27.5037 66.183 29.5951 67.6725 31.9304 68.6855C34.2657 69.6985 36.792 70.2119 39.3429 70.1919C47.2427 70.2111 54.25 65.2594 56.6784 57.9403C59.1763 57.4474 61.5394 56.4357 63.6106 54.9725C65.6818 53.5093 67.4137 51.628 68.6914 49.4535C70.6189 46.2177 71.4416 42.4564 71.0381 38.7243C70.6347 34.9921 69.0264 31.4866 66.4505 28.7248L66.4472 28.7279ZM39.3462 65.604C36.192 65.6114 33.1337 64.5353 30.6962 62.5602C30.8061 62.5028 30.9969 62.4007 31.123 62.3241L45.4804 54.2521C45.8387 54.0548 46.1369 53.7663 46.3439 53.4168C46.5509 53.0672 46.6591 52.6693 46.6574 52.2644V32.5598L52.7269 35.9704C52.7916 36.0023 52.8336 36.0629 52.8433 36.1299V52.4494C52.8336 59.7047 46.7964 65.588 39.3462 65.604ZM10.3178 53.5374C8.73538 50.8815 8.16442 47.7559 8.70749 44.722C8.81096 44.7858 8.99851 44.8975 9.13109 44.9709L23.4884 53.0429C24.216 53.4576 25.1182 53.4576 25.849 53.0429L43.3753 43.1906V50.0119C43.3767 50.0469 43.3695 50.0817 43.3543 50.1134C43.3391 50.1451 43.3163 50.1726 43.288 50.1937L28.7754 58.3487C22.3114 61.9731 14.0559 59.8164 10.3211 53.531L10.3178 53.5374ZM6.53772 23.0233C8.12637 20.3496 10.6153 18.3106 13.5709 17.2612L13.5644 17.743V33.887C13.5624 34.2924 13.6706 34.6908 13.8776 35.0409C14.0846 35.3911 14.3829 35.6801 14.7414 35.8779L32.2677 45.727L26.2014 49.1409C26.1714 49.1599 26.1371 49.1713 26.1016 49.174C26.0661 49.1768 26.0304 49.1709 25.9977 49.1568L11.4819 40.9923C5.03085 37.3551 2.81904 29.3214 6.53449 23.0297L6.53772 23.0233ZM56.3906 34.3177L38.8643 24.4654L44.9306 21.0579C44.9604 21.0384 44.9945 21.0265 45.0301 21.0231C45.0656 21.0198 45.1014 21.0252 45.1344 21.0388L59.6501 29.1969C66.1109 32.8341 68.326 40.8806 64.5944 47.1691C63.0043 49.8411 60.5176 51.8805 57.5644 52.9344V36.3086C57.5665 35.9041 57.4587 35.5064 57.2523 35.1568C57.0459 34.8073 56.7483 34.5186 56.3906 34.3209V34.3177ZM62.4278 25.4704C62.2866 25.3857 62.1443 25.3027 62.001 25.2216L47.6437 17.1496C47.2851 16.946 46.8787 16.8389 46.465 16.8389C46.0513 16.8389 45.6449 16.946 45.2863 17.1496L27.7601 27.0019V20.1805C27.7586 20.1455 27.7658 20.1107 27.781 20.079C27.7962 20.0474 27.819 20.0198 27.8474 19.9987L42.3567 11.8469C48.8239 8.21929 57.0859 10.3793 60.811 16.6742C62.3858 19.3319 62.9614 22.4458 62.4278 25.4704ZM24.4617 37.6263L18.3922 34.2188C18.3605 34.2035 18.3333 34.1806 18.3129 34.1522C18.2926 34.1237 18.2798 34.0907 18.2758 34.0561V17.7366C18.279 10.4718 24.3324 4.58529 31.7956 4.59167C34.9516 4.59167 38.0042 5.67007 40.4327 7.63543C40.3227 7.69286 40.1352 7.79495 40.009 7.86834L25.6517 15.9403C25.2928 16.1372 24.994 16.4255 24.7864 16.7751C24.5788 17.1247 24.47 17.5229 24.4714 17.928L24.4617 37.6231V37.6263ZM27.7601 30.7093L35.566 26.3223L43.372 30.7093V39.4832L35.566 43.8701L27.7568 39.4832V30.7093H27.7601Z"
          fill="#74AA9C"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
      >
        <path
          d="M40.8731 79.1623C39.4138 69.5297 34.9102 60.6169 28.0212 53.728C21.1322 46.839 12.2195 42.3354 2.58691 40.8761C12.2195 39.4167 21.1322 34.9131 28.0212 28.0241C34.9102 21.1352 39.4138 12.2224 40.8731 2.58984C42.3329 12.2222 46.8367 21.1347 53.7256 28.0236C60.6145 34.9125 69.527 39.4162 79.1593 40.8761C69.527 42.3359 60.6145 46.8396 53.7256 53.7285C46.8367 60.6174 42.3329 69.5299 40.8731 79.1623Z"
          fill="url(#paint0_linear_2798_12213)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2798_12213"
            x1="2.58675"
            y1="7659.83"
            x2="5265.41"
            y2="2330.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1C7DFF" />
            <stop offset="0.52021" stop-color="#1C69FF" />
            <stop offset="1" stop-color="#F0DCD6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Perplexity",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="65"
        viewBox="0 0 56 65"
        fill="none"
      >
        <path
          d="M48.653 0V19.439H55.8772V47.1007H48.0677V64.1553L29.3435 47.5979V64.0243H26.4405V47.5792L7.69509 64.1553V46.8734H0V19.2145H7.6738V0L26.4405 17.3593V0.507896H29.3408V17.8566L48.653 0ZM29.3435 24.1758V43.7405L45.1647 57.7317V38.6001L29.3435 24.1758ZM26.4193 23.962L10.598 38.3916V57.7317L26.4193 43.7405V23.9647V23.962ZM48.0677 44.2244H52.9742V22.318H31.8234L48.0677 37.1272V44.2244ZM24.1682 22.0908H2.90029V43.9972H7.68976V37.1112L24.1655 22.0881L24.1682 22.0908ZM10.5767 6.61869V19.2092H24.1868L10.5767 6.61869ZM45.7501 6.61869L32.14 19.2092H45.7501V6.61869Z"
          fill="#22B8CD"
        />
      </svg>
    ),
  },
  {
    name: "Grok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="58"
        viewBox="0 0 54 58"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9462 20.451L38.7926 57.8605H26.8597L0.013366 20.451H11.9462ZM11.9356 41.2282L17.9047 49.5496L11.9409 57.8605H0L11.9356 41.2282ZM53.4627 4.16069V57.8605H43.6817V17.7895L53.4627 4.16069ZM53.4627 0L26.8597 37.0702L20.8906 28.7514L41.5218 0H53.4627Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Claude",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="72"
        viewBox="0 0 73 72"
        fill="none"
      >
        <path
          d="M17.3546 45.9264L29.5648 39.0789L29.7717 38.4839L29.5648 38.1528H28.9724L26.9287 38.0286L19.9493 37.8398L13.8985 37.5888L8.03656 37.2732L6.55943 36.9602L5.17285 35.1364L5.31513 34.2259L6.55685 33.3955L8.33146 33.5507L12.2636 33.8171L18.1565 34.2259L22.4301 34.4768L28.7654 35.1364H29.7717L29.914 34.7303L29.5674 34.4768L29.3009 34.2259L23.201 30.0972L16.5992 25.7305L13.1431 23.216L11.2702 21.9458L10.3286 20.7507L9.91982 18.1431L11.6168 16.2753L13.8959 16.4305L14.478 16.5883L16.7881 18.3629L21.7239 22.1812L28.1679 26.923L29.1121 27.7094L29.4872 27.443L29.5363 27.2541L29.1121 26.5453L25.6068 20.2178L21.8662 13.7764L20.2002 11.1067L19.7604 9.50538C19.5929 8.89036 19.5025 8.25687 19.4914 7.61952L21.4264 4.99899L22.4948 4.65234L25.0713 4.99899L26.1578 5.94062L27.7617 9.59851L30.3538 15.3647L34.3764 23.203L35.5561 25.5261L36.1847 27.6784L36.4201 28.3381H36.8288V27.9604L37.1599 23.5471L37.773 18.1275L38.368 11.1558L38.575 9.18978L39.5477 6.83569L41.4801 5.56293L42.9908 6.28727L44.2325 8.0593L44.0592 9.20789L43.3194 13.9962L41.8733 21.506L40.9317 26.5298H41.4801L42.1087 25.9038L44.6568 22.5253L48.9304 17.1859L50.8188 15.0646L53.0177 12.7261L54.4327 11.6111H57.105L59.071 14.5317L58.1915 17.5481L55.439 21.0326L53.16 23.9869L49.8901 28.3846L47.8465 31.9028L48.0353 32.1874L48.5216 32.1356L55.9098 30.568L59.9014 29.8436L64.6639 29.0288L66.8188 30.0325L67.0542 31.0543L66.2057 33.1419L61.1121 34.3992L55.1389 35.5943L46.2426 37.6975L46.1339 37.7751L46.2607 37.9329L50.2678 38.3106L51.9803 38.4037H56.1763L63.9888 38.9858L66.0324 40.3361L67.2586 41.9866L67.0542 43.2412L63.9111 44.8451L59.6686 43.8388L49.7634 41.4847L46.3693 40.6336H45.8985V40.9182L48.726 43.681L53.9153 48.3633L60.4059 54.3908L60.7344 55.886L59.9014 57.0631L59.0219 56.9363L53.3178 52.6498L51.1163 50.7174L46.1339 46.5266H45.8028V46.9664L46.9514 48.6453L53.0177 57.7538L53.3333 60.5476L52.8935 61.4608L51.3207 62.0118L49.5926 61.6962L46.0382 56.7164L42.3777 51.1106L39.4209 46.0842L39.0587 46.2912L37.3152 65.0566L36.4977 66.0138L34.6118 66.7381L33.0416 65.5455L32.2086 63.6131L33.0416 59.7948L34.0479 54.8176L34.8628 50.8597L35.6026 45.9445L36.0424 44.3096L36.0114 44.201L35.6492 44.2475L31.9396 49.336L26.3001 56.9544L21.8351 61.7273L20.7641 62.1515L18.9093 61.1944L19.0826 59.4818L20.12 57.9581L26.2975 50.1043L30.0227 45.2357L32.4285 42.4263L32.413 42.0176H32.2707L15.8619 52.6653L12.9387 53.043L11.6789 51.8634L11.8367 49.9335L12.4343 49.3049L17.3701 45.9109L17.3546 45.9264Z"
          fill="#D97757"
        />
      </svg>
    ),
  },
  {
    name: "Nova Pro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="42"
        viewBox="0 0 70 42"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5371 15.056C19.5371 15.9111 19.6295 16.6015 19.7913 17.107C19.9762 17.6154 20.2073 18.1701 20.5308 18.7709C20.6463 18.9529 20.6926 19.1378 20.6926 19.2996C20.6926 19.5307 20.5539 19.7618 20.2535 19.9929L18.8005 20.9606C18.6248 21.0872 18.4159 21.1595 18.1996 21.1686C17.9685 21.1686 17.7374 21.053 17.5092 20.845C17.1989 20.5112 16.9213 20.1485 16.6801 19.7618C16.4219 19.3187 16.1829 18.8648 15.9637 18.4012C14.1669 20.5215 11.9051 21.5817 9.18389 21.5817C7.24845 21.5817 5.70298 21.0299 4.57349 19.9235C3.44689 18.8143 2.86914 17.341 2.86914 15.4951C2.86914 13.5366 3.56243 11.942 4.96635 10.7461C6.37316 9.54723 8.23928 8.94638 10.6138 8.94638C11.3995 8.94638 12.2055 9.01571 13.0577 9.13126C13.9127 9.24681 14.7909 9.43168 15.7095 9.63967V7.95555C15.7095 6.20209 15.3427 4.98016 14.6262 4.26665C13.8896 3.55024 12.6446 3.20648 10.8709 3.20648C10.0621 3.20648 9.23011 3.29603 8.37794 3.50402C7.52576 3.71201 6.69381 3.96622 5.88786 4.28976C5.62474 4.40659 5.3546 4.50693 5.07901 4.59018C4.96021 4.62848 4.83684 4.65082 4.71215 4.65662C4.38861 4.65662 4.22684 4.42553 4.22684 3.94311V2.81362C4.22684 2.44386 4.27306 2.16654 4.38861 2.00477C4.56311 1.79505 4.78487 1.62972 5.03568 1.52236C5.95953 1.06366 6.93388 0.714635 7.93885 0.482416C9.11462 0.181409 10.3246 0.0347776 11.5382 0.046219C14.2825 0.046219 16.2873 0.670184 17.5785 1.91522C18.8496 3.15738 19.4909 5.04949 19.4909 7.58579V15.056H19.5371ZM10.1776 18.5629C10.9373 18.5629 11.7202 18.4243 12.5521 18.147C13.3978 17.8547 14.1525 17.3469 14.7418 16.6737C15.1142 16.2479 15.3832 15.7417 15.5275 15.1947C15.6633 14.6429 15.7586 13.9728 15.7586 13.1899V12.2222C15.0588 12.0516 14.3499 11.9204 13.6354 11.8293C12.9168 11.738 12.1932 11.6917 11.4689 11.6907C9.9234 11.6907 8.79391 11.9911 8.03129 12.6151C7.27156 13.2361 6.90469 14.1114 6.90469 15.264C6.90469 16.3473 7.17912 17.1561 7.75686 17.7079C8.30861 18.2856 9.11456 18.5629 10.1776 18.5629ZM28.6943 21.053C28.2784 21.053 28.001 20.9837 27.8162 20.8219C27.6313 20.6833 27.4695 20.3597 27.3309 19.9235L21.9145 2.09721C21.8091 1.79831 21.7393 1.48805 21.7065 1.17282C21.7065 0.803066 21.8914 0.595077 22.2583 0.595077H24.5201C24.9563 0.595077 25.2568 0.667295 25.4156 0.826174C25.6034 0.964833 25.7421 1.28837 25.8778 1.72746L29.7545 16.9915L33.351 1.72746C33.4665 1.26526 33.6052 0.964833 33.7872 0.826174C34.0643 0.65621 34.387 0.575535 34.7115 0.595077H36.5546C36.9936 0.595077 37.2941 0.667295 37.4789 0.826174C37.6609 0.964833 37.8256 1.28837 37.9151 1.72746L41.5578 17.1764L45.5471 1.72746C45.6858 1.26526 45.8476 0.964833 46.0093 0.826174C46.2769 0.656289 46.5914 0.575398 46.9077 0.595077H49.0541C49.4209 0.595077 49.6318 0.782845 49.6318 1.17282C49.6318 1.28837 49.6058 1.40392 49.5827 1.54258C49.5465 1.73969 49.4924 1.93308 49.4209 2.12032L43.8659 19.9438C43.7273 20.4059 43.5655 20.7035 43.3806 20.8421C43.1203 21.0091 42.8141 21.09 42.5053 21.0732H40.5208C40.0875 21.0732 39.7841 21.0039 39.5964 20.8421C39.4144 20.6804 39.2526 20.38 39.1631 19.9178L35.5897 5.0466L32.0366 19.8946C31.921 20.3568 31.7853 20.6573 31.6033 20.819C31.4155 20.9808 31.092 21.0501 30.6789 21.0501L28.6972 21.053H28.6943ZM58.3211 21.6741C57.1223 21.6741 55.9234 21.5354 54.7708 21.261C53.6182 20.9837 52.7198 20.6833 52.119 20.3366C51.7492 20.1315 51.4979 19.9004 51.4055 19.6924C51.3154 19.4885 51.2682 19.2683 51.2668 19.0454V17.8696C51.2668 17.3872 51.4517 17.1561 51.7955 17.1561C51.9341 17.1561 52.0728 17.1792 52.2114 17.2255C52.3501 17.2717 52.5581 17.3641 52.7892 17.4566C53.572 17.8032 54.4242 18.0776 55.3255 18.2625C56.2499 18.4474 57.1454 18.5398 58.0698 18.5398C59.5199 18.5398 60.6523 18.2856 61.4351 17.7772C61.8104 17.5505 62.119 17.2285 62.3295 16.8439C62.5401 16.4593 62.6451 16.0259 62.6339 15.5876C62.6424 15.2907 62.5919 14.9951 62.4852 14.7179C62.3786 14.4407 62.2181 14.1874 62.0129 13.9728C61.5969 13.5366 60.8112 13.1437 59.6817 12.7739L56.3394 11.734C54.6553 11.2054 53.4103 10.4225 52.6505 9.38546C51.9069 8.42838 51.5007 7.25229 51.495 6.04032C51.495 5.0726 51.7059 4.22043 52.119 3.48091C52.535 2.74429 53.0867 2.09721 53.78 1.59169C54.4733 1.06016 55.2533 0.667296 56.1777 0.392867C57.102 0.115549 58.0698 0 59.0837 0C59.5892 0 60.1236 0.02311 60.6292 0.0924394C61.1578 0.161769 61.6402 0.254207 62.1255 0.346647C62.5877 0.462196 63.0268 0.577745 63.4399 0.713516C63.8559 0.852174 64.1794 0.990832 64.4105 1.12949C64.6827 1.26653 64.9199 1.46418 65.1038 1.70724C65.2527 1.93156 65.3247 2.19819 65.3089 2.46697V3.55024C65.3089 4.03555 65.124 4.28976 64.7774 4.28976C64.4705 4.25457 64.1733 4.1604 63.9021 4.01244C62.5091 3.39706 60.9993 3.09057 59.4766 3.11404C58.1622 3.11404 57.1223 3.31914 56.4087 3.75823C55.6923 4.19732 55.3255 4.86461 55.3255 5.80922C55.3255 6.4563 55.5566 7.01093 56.0188 7.44713C56.481 7.88622 57.3302 8.3253 58.5522 8.71817L61.828 9.75233C63.4861 10.2839 64.6878 11.0234 65.4013 11.968C66.1149 12.9126 66.4615 13.9959 66.4615 15.1947C66.4615 16.1855 66.2535 17.0868 65.8635 17.8696C65.4535 18.659 64.8793 19.3515 64.1794 19.9004C63.463 20.4782 62.6108 20.8913 61.62 21.1917C60.5801 21.5123 59.4997 21.6741 58.3211 21.6741Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.09228 27.3718C10.8677 33.0424 22.931 36.48 35.4017 36.48C43.8194 36.48 53.0633 34.7265 61.5735 31.13C62.8445 30.5523 63.9249 31.9591 62.6799 32.8835C55.0941 38.4876 44.0707 41.4601 34.5957 41.4601C21.3134 41.4601 9.34826 36.5493 0.306552 28.3858C-0.406963 27.7416 0.237222 26.8634 1.09228 27.3718ZM69.0668 26.7941C69.8959 27.834 68.8357 34.9576 64.7771 38.3692C64.156 38.9007 63.5552 38.6234 63.8325 37.933L64.338 36.6648C65.3288 34.1228 66.6548 30.3154 65.8401 29.2841C64.8695 28.042 59.4272 28.6862 56.9602 28.9866C56.2236 29.079 56.108 28.432 56.7782 27.9467C61.1113 24.9048 68.2378 25.7801 69.0668 26.7941Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: "Deepseek",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M62.4609 3.82079C61.7883 3.49942 61.5275 4.11003 61.1376 4.42069C61.003 4.52246 60.8905 4.65369 60.7779 4.76885C59.7977 5.79725 58.6556 6.46678 57.1675 6.38643C54.982 6.2686 53.1205 6.94081 51.4732 8.57714C51.1245 6.55783 49.9604 5.35536 48.1922 4.58138C47.2642 4.17966 46.3252 3.77794 45.68 2.90487C45.227 2.28622 45.1035 1.59259 44.8756 0.912347C44.7328 0.502594 44.5873 0.082128 44.1068 0.00981859C43.5797 -0.0705252 43.3765 0.357975 43.1706 0.719522C42.3469 2.19249 42.0284 3.82079 42.0559 5.46516C42.13 9.16633 43.7252 12.1123 46.8936 14.2119C47.256 14.4529 47.3493 14.694 47.234 15.0448C47.0171 15.7679 46.7618 16.4669 46.5339 17.1873C46.3911 17.6506 46.177 17.7524 45.6718 17.5489C43.9632 16.8317 42.4114 15.8017 41.1004 14.5145C38.8491 12.3801 36.8091 10.0233 34.2667 8.1781C33.678 7.75148 33.0736 7.34592 32.4546 6.96223C29.8628 4.493 32.7978 2.46566 33.476 2.22731C34.1871 1.97824 33.7231 1.11321 31.4251 1.12392C29.1325 1.13463 27.0322 1.88718 24.358 2.8888C23.9654 3.04146 23.4629 3.29856 23.1334 3.23696C20.6325 2.77902 18.075 2.69235 15.5474 2.97986C10.589 3.52352 6.62436 5.81867 3.71406 9.74212C0.213459 14.4556 -0.607466 19.8092 0.400157 25.3984C1.4572 31.2823 4.524 36.1618 9.24088 39.9728C14.128 43.9204 19.7564 45.8566 26.1783 45.4844C30.077 45.2674 34.4232 44.7532 39.3186 40.6932C40.5541 41.2931 41.85 41.5315 44.0052 41.7136C45.6608 41.8662 47.256 41.6332 48.4915 41.3842C50.4244 40.9824 50.2898 39.231 49.5897 38.9042C43.9201 36.3172 45.1639 37.3697 44.0327 36.5207C46.9155 33.1784 51.259 29.7075 52.9558 18.4675C53.0903 17.573 52.975 17.0132 52.9558 16.2875C52.9476 15.8509 53.0491 15.6768 53.5598 15.626C54.985 15.4808 56.3673 15.0651 57.6287 14.4021C61.3023 12.4363 62.7547 9.20918 63.1062 5.33661C63.1583 4.74742 63.0952 4.13145 62.4582 3.82347M30.4669 38.6659C24.9702 34.4344 22.307 33.0418 21.2061 33.1007C20.1765 33.157 20.3604 34.3112 20.5883 35.0638C20.8244 35.8056 21.1319 36.3172 21.5657 36.9679C21.865 37.4018 22.0709 38.0445 21.2692 38.5213C19.4983 39.6005 16.4205 38.1624 16.2723 38.0928C12.6948 36.0306 9.69939 33.2989 7.58805 29.571C5.55359 25.9769 4.37025 22.1258 4.17531 18.0149C4.1204 17.0186 4.42241 16.6678 5.42729 16.4883C6.75438 16.2408 8.11409 16.2074 9.45229 16.3892C15.0615 17.1927 19.836 19.6512 23.8391 23.5398C26.1234 25.76 27.8531 28.406 29.6322 30.993C31.5266 33.7435 33.5639 36.36 36.1584 38.5025C37.0727 39.2551 37.8058 39.8282 38.5031 40.2513C36.3945 40.479 32.8747 40.5298 30.4669 38.6659ZM33.1026 22.0642C33.1026 21.8554 33.1876 21.6551 33.339 21.5074C33.4904 21.3598 33.6957 21.2768 33.9098 21.2768C34.1239 21.2768 34.3292 21.3598 34.4806 21.5074C34.632 21.6551 34.717 21.8554 34.717 22.0642C34.7177 22.1685 34.6972 22.2719 34.6566 22.3684C34.616 22.4649 34.5562 22.5526 34.4806 22.6263C34.405 22.7001 34.3151 22.7584 34.2162 22.798C34.1172 22.8376 34.0112 22.8576 33.9043 22.8569C33.7977 22.858 33.6919 22.8382 33.5932 22.7986C33.4946 22.7591 33.4051 22.7006 33.33 22.6267C33.255 22.5527 33.196 22.4648 33.1564 22.3682C33.1169 22.2716 33.0976 22.1682 33.0999 22.0642M41.2816 26.1805C40.7545 26.3893 40.2301 26.5715 39.7277 26.5929C38.971 26.616 38.2294 26.3843 37.6273 25.9367C36.908 25.3476 36.3918 25.0181 36.1721 23.9817C36.0998 23.4776 36.1147 22.9652 36.2161 22.4659C36.4028 21.6223 36.1941 21.084 35.5901 20.5912C35.0959 20.1895 34.4699 20.0824 33.778 20.0824C33.5404 20.0723 33.3096 20.0021 33.1081 19.8788C32.8198 19.7369 32.5837 19.3861 32.8088 18.9549C32.9521 18.7536 33.123 18.5725 33.3168 18.4166C34.2502 17.8943 35.332 18.0684 36.3314 18.4567C37.2566 18.829 37.9568 19.5092 38.9644 20.4707C39.994 21.633 40.1779 21.9571 40.7655 22.8274C41.2267 23.513 41.6523 24.2147 41.9406 25.0181C42.1135 25.5163 41.8857 25.9287 41.2816 26.1805Z"
          fill="#4D6BFE"
        />
      </svg>
    ),
  },
  {
    name: "Qwen",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M64.5405 39.9798L56.0213 25.1895L60.5176 17.63C60.8769 16.999 60.8769 16.2189 60.5176 15.5879L56.0213 8.0284C55.7934 7.62084 55.3596 7.36667 54.8819 7.36667H38.2729L34.4428 0.661729C34.2149 0.254174 33.7811 0 33.3034 0H24.4336C23.9559 0 23.5221 0.254174 23.2942 0.661729L14.775 15.4477H5.90517C5.4275 15.4477 4.99365 15.7018 4.76577 16.1094L0.269512 23.6689C-0.0898374 24.2999 -0.0898374 25.08 0.269512 25.711L7.87721 39.4321L4.04707 46.137C3.68772 46.768 3.68772 47.5481 4.04707 48.1792L8.54332 55.7386C8.7712 56.1462 9.20505 56.4004 9.68272 56.4004H26.2917L30.1218 63.1053C30.3497 63.5129 30.7836 63.767 31.2612 63.767H40.131C40.6087 63.767 41.0426 63.5129 41.2704 63.1053L49.7897 48.3194H57.3974C57.875 48.3194 58.3089 48.0652 58.5368 47.6577L63.033 40.0982C63.3924 39.4671 63.3924 38.6871 63.033 38.056L64.5405 39.9798Z"
          fill="url(#paint0_radial_2825_10963)"
        />
        <path
          d="M40.1314 63.7655H31.2616L26.292 55.7371H9.68307L14.7753 47.7087H23.2945L4.76611 16.5504H14.7753L24.4339 0.660156L28.9302 8.68855L24.4339 16.5504H58.7387L54.2424 24.1099L62.7616 38.8958H54.2424L49.79 31.034L32.2695 63.7655H40.1314Z"
          fill="white"
        />
        <path
          d="M43.9612 27.3086H21.2959L32.2692 45.837L43.9612 27.3086Z"
          fill="url(#paint1_radial_2825_10963)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1453) rotate(90) scale(43.8231 43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1477) rotate(90) scale(43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M66.4472 28.7279C67.2546 26.3659 67.5345 23.8595 67.2677 21.3807C67.0009 18.9019 66.1937 16.5094 64.9016 14.3674C60.9662 7.69924 53.06 4.26624 45.3381 5.88064C43.6278 4.01227 41.5359 2.52234 39.2001 1.50886C36.8643 0.495389 34.3375 -0.0186641 31.7859 0.000517709C23.8926 -0.0154349 16.8886 4.93306 14.4601 12.2457C11.9639 12.7388 9.60252 13.7498 7.53253 15.2119C5.46254 16.674 3.7313 18.5536 2.45364 20.7261C0.522447 23.9621 -0.302912 27.7251 0.0994375 31.4594C0.501787 35.1937 2.11052 38.7014 4.68808 41.4645C3.87971 43.8267 3.59901 46.3336 3.86525 48.813C4.1315 51.2924 4.93839 53.6855 6.23052 55.8282C10.1659 62.4964 18.0721 65.9262 25.794 64.315C27.5037 66.183 29.5951 67.6725 31.9304 68.6855C34.2657 69.6985 36.792 70.2119 39.3429 70.1919C47.2427 70.2111 54.25 65.2594 56.6784 57.9403C59.1763 57.4474 61.5394 56.4357 63.6106 54.9725C65.6818 53.5093 67.4137 51.628 68.6914 49.4535C70.6189 46.2177 71.4416 42.4564 71.0381 38.7243C70.6347 34.9921 69.0264 31.4866 66.4505 28.7248L66.4472 28.7279ZM39.3462 65.604C36.192 65.6114 33.1337 64.5353 30.6962 62.5602C30.8061 62.5028 30.9969 62.4007 31.123 62.3241L45.4804 54.2521C45.8387 54.0548 46.1369 53.7663 46.3439 53.4168C46.5509 53.0672 46.6591 52.6693 46.6574 52.2644V32.5598L52.7269 35.9704C52.7916 36.0023 52.8336 36.0629 52.8433 36.1299V52.4494C52.8336 59.7047 46.7964 65.588 39.3462 65.604ZM10.3178 53.5374C8.73538 50.8815 8.16442 47.7559 8.70749 44.722C8.81096 44.7858 8.99851 44.8975 9.13109 44.9709L23.4884 53.0429C24.216 53.4576 25.1182 53.4576 25.849 53.0429L43.3753 43.1906V50.0119C43.3767 50.0469 43.3695 50.0817 43.3543 50.1134C43.3391 50.1451 43.3163 50.1726 43.288 50.1937L28.7754 58.3487C22.3114 61.9731 14.0559 59.8164 10.3211 53.531L10.3178 53.5374ZM6.53772 23.0233C8.12637 20.3496 10.6153 18.3106 13.5709 17.2612L13.5644 17.743V33.887C13.5624 34.2924 13.6706 34.6908 13.8776 35.0409C14.0846 35.3911 14.3829 35.6801 14.7414 35.8779L32.2677 45.727L26.2014 49.1409C26.1714 49.1599 26.1371 49.1713 26.1016 49.174C26.0661 49.1768 26.0304 49.1709 25.9977 49.1568L11.4819 40.9923C5.03085 37.3551 2.81904 29.3214 6.53449 23.0297L6.53772 23.0233ZM56.3906 34.3177L38.8643 24.4654L44.9306 21.0579C44.9604 21.0384 44.9945 21.0265 45.0301 21.0231C45.0656 21.0198 45.1014 21.0252 45.1344 21.0388L59.6501 29.1969C66.1109 32.8341 68.326 40.8806 64.5944 47.1691C63.0043 49.8411 60.5176 51.8805 57.5644 52.9344V36.3086C57.5665 35.9041 57.4587 35.5064 57.2523 35.1568C57.0459 34.8073 56.7483 34.5186 56.3906 34.3209V34.3177ZM62.4278 25.4704C62.2866 25.3857 62.1443 25.3027 62.001 25.2216L47.6437 17.1496C47.2851 16.946 46.8787 16.8389 46.465 16.8389C46.0513 16.8389 45.6449 16.946 45.2863 17.1496L27.7601 27.0019V20.1805C27.7586 20.1455 27.7658 20.1107 27.781 20.079C27.7962 20.0474 27.819 20.0198 27.8474 19.9987L42.3567 11.8469C48.8239 8.21929 57.0859 10.3793 60.811 16.6742C62.3858 19.3319 62.9614 22.4458 62.4278 25.4704ZM24.4617 37.6263L18.3922 34.2188C18.3605 34.2035 18.3333 34.1806 18.3129 34.1522C18.2926 34.1237 18.2798 34.0907 18.2758 34.0561V17.7366C18.279 10.4718 24.3324 4.58529 31.7956 4.59167C34.9516 4.59167 38.0042 5.67007 40.4327 7.63543C40.3227 7.69286 40.1352 7.79495 40.009 7.86834L25.6517 15.9403C25.2928 16.1372 24.994 16.4255 24.7864 16.7751C24.5788 17.1247 24.47 17.5229 24.4714 17.928L24.4617 37.6231V37.6263ZM27.7601 30.7093L35.566 26.3223L43.372 30.7093V39.4832L35.566 43.8701L27.7568 39.4832V30.7093H27.7601Z"
          fill="#74AA9C"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
      >
        <path
          d="M40.8731 79.1623C39.4138 69.5297 34.9102 60.6169 28.0212 53.728C21.1322 46.839 12.2195 42.3354 2.58691 40.8761C12.2195 39.4167 21.1322 34.9131 28.0212 28.0241C34.9102 21.1352 39.4138 12.2224 40.8731 2.58984C42.3329 12.2222 46.8367 21.1347 53.7256 28.0236C60.6145 34.9125 69.527 39.4162 79.1593 40.8761C69.527 42.3359 60.6145 46.8396 53.7256 53.7285C46.8367 60.6174 42.3329 69.5299 40.8731 79.1623Z"
          fill="url(#paint0_linear_2798_12213)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2798_12213"
            x1="2.58675"
            y1="7659.83"
            x2="5265.41"
            y2="2330.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1C7DFF" />
            <stop offset="0.52021" stop-color="#1C69FF" />
            <stop offset="1" stop-color="#F0DCD6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Perplexity",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="65"
        viewBox="0 0 56 65"
        fill="none"
      >
        <path
          d="M48.653 0V19.439H55.8772V47.1007H48.0677V64.1553L29.3435 47.5979V64.0243H26.4405V47.5792L7.69509 64.1553V46.8734H0V19.2145H7.6738V0L26.4405 17.3593V0.507896H29.3408V17.8566L48.653 0ZM29.3435 24.1758V43.7405L45.1647 57.7317V38.6001L29.3435 24.1758ZM26.4193 23.962L10.598 38.3916V57.7317L26.4193 43.7405V23.9647V23.962ZM48.0677 44.2244H52.9742V22.318H31.8234L48.0677 37.1272V44.2244ZM24.1682 22.0908H2.90029V43.9972H7.68976V37.1112L24.1655 22.0881L24.1682 22.0908ZM10.5767 6.61869V19.2092H24.1868L10.5767 6.61869ZM45.7501 6.61869L32.14 19.2092H45.7501V6.61869Z"
          fill="#22B8CD"
        />
      </svg>
    ),
  },
  {
    name: "Grok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="58"
        viewBox="0 0 54 58"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9462 20.451L38.7926 57.8605H26.8597L0.013366 20.451H11.9462ZM11.9356 41.2282L17.9047 49.5496L11.9409 57.8605H0L11.9356 41.2282ZM53.4627 4.16069V57.8605H43.6817V17.7895L53.4627 4.16069ZM53.4627 0L26.8597 37.0702L20.8906 28.7514L41.5218 0H53.4627Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Claude",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="72"
        viewBox="0 0 73 72"
        fill="none"
      >
        <path
          d="M17.3546 45.9264L29.5648 39.0789L29.7717 38.4839L29.5648 38.1528H28.9724L26.9287 38.0286L19.9493 37.8398L13.8985 37.5888L8.03656 37.2732L6.55943 36.9602L5.17285 35.1364L5.31513 34.2259L6.55685 33.3955L8.33146 33.5507L12.2636 33.8171L18.1565 34.2259L22.4301 34.4768L28.7654 35.1364H29.7717L29.914 34.7303L29.5674 34.4768L29.3009 34.2259L23.201 30.0972L16.5992 25.7305L13.1431 23.216L11.2702 21.9458L10.3286 20.7507L9.91982 18.1431L11.6168 16.2753L13.8959 16.4305L14.478 16.5883L16.7881 18.3629L21.7239 22.1812L28.1679 26.923L29.1121 27.7094L29.4872 27.443L29.5363 27.2541L29.1121 26.5453L25.6068 20.2178L21.8662 13.7764L20.2002 11.1067L19.7604 9.50538C19.5929 8.89036 19.5025 8.25687 19.4914 7.61952L21.4264 4.99899L22.4948 4.65234L25.0713 4.99899L26.1578 5.94062L27.7617 9.59851L30.3538 15.3647L34.3764 23.203L35.5561 25.5261L36.1847 27.6784L36.4201 28.3381H36.8288V27.9604L37.1599 23.5471L37.773 18.1275L38.368 11.1558L38.575 9.18978L39.5477 6.83569L41.4801 5.56293L42.9908 6.28727L44.2325 8.0593L44.0592 9.20789L43.3194 13.9962L41.8733 21.506L40.9317 26.5298H41.4801L42.1087 25.9038L44.6568 22.5253L48.9304 17.1859L50.8188 15.0646L53.0177 12.7261L54.4327 11.6111H57.105L59.071 14.5317L58.1915 17.5481L55.439 21.0326L53.16 23.9869L49.8901 28.3846L47.8465 31.9028L48.0353 32.1874L48.5216 32.1356L55.9098 30.568L59.9014 29.8436L64.6639 29.0288L66.8188 30.0325L67.0542 31.0543L66.2057 33.1419L61.1121 34.3992L55.1389 35.5943L46.2426 37.6975L46.1339 37.7751L46.2607 37.9329L50.2678 38.3106L51.9803 38.4037H56.1763L63.9888 38.9858L66.0324 40.3361L67.2586 41.9866L67.0542 43.2412L63.9111 44.8451L59.6686 43.8388L49.7634 41.4847L46.3693 40.6336H45.8985V40.9182L48.726 43.681L53.9153 48.3633L60.4059 54.3908L60.7344 55.886L59.9014 57.0631L59.0219 56.9363L53.3178 52.6498L51.1163 50.7174L46.1339 46.5266H45.8028V46.9664L46.9514 48.6453L53.0177 57.7538L53.3333 60.5476L52.8935 61.4608L51.3207 62.0118L49.5926 61.6962L46.0382 56.7164L42.3777 51.1106L39.4209 46.0842L39.0587 46.2912L37.3152 65.0566L36.4977 66.0138L34.6118 66.7381L33.0416 65.5455L32.2086 63.6131L33.0416 59.7948L34.0479 54.8176L34.8628 50.8597L35.6026 45.9445L36.0424 44.3096L36.0114 44.201L35.6492 44.2475L31.9396 49.336L26.3001 56.9544L21.8351 61.7273L20.7641 62.1515L18.9093 61.1944L19.0826 59.4818L20.12 57.9581L26.2975 50.1043L30.0227 45.2357L32.4285 42.4263L32.413 42.0176H32.2707L15.8619 52.6653L12.9387 53.043L11.6789 51.8634L11.8367 49.9335L12.4343 49.3049L17.3701 45.9109L17.3546 45.9264Z"
          fill="#D97757"
        />
      </svg>
    ),
  },
  {
    name: "Nova Pro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="42"
        viewBox="0 0 70 42"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5371 15.056C19.5371 15.9111 19.6295 16.6015 19.7913 17.107C19.9762 17.6154 20.2073 18.1701 20.5308 18.7709C20.6463 18.9529 20.6926 19.1378 20.6926 19.2996C20.6926 19.5307 20.5539 19.7618 20.2535 19.9929L18.8005 20.9606C18.6248 21.0872 18.4159 21.1595 18.1996 21.1686C17.9685 21.1686 17.7374 21.053 17.5092 20.845C17.1989 20.5112 16.9213 20.1485 16.6801 19.7618C16.4219 19.3187 16.1829 18.8648 15.9637 18.4012C14.1669 20.5215 11.9051 21.5817 9.18389 21.5817C7.24845 21.5817 5.70298 21.0299 4.57349 19.9235C3.44689 18.8143 2.86914 17.341 2.86914 15.4951C2.86914 13.5366 3.56243 11.942 4.96635 10.7461C6.37316 9.54723 8.23928 8.94638 10.6138 8.94638C11.3995 8.94638 12.2055 9.01571 13.0577 9.13126C13.9127 9.24681 14.7909 9.43168 15.7095 9.63967V7.95555C15.7095 6.20209 15.3427 4.98016 14.6262 4.26665C13.8896 3.55024 12.6446 3.20648 10.8709 3.20648C10.0621 3.20648 9.23011 3.29603 8.37794 3.50402C7.52576 3.71201 6.69381 3.96622 5.88786 4.28976C5.62474 4.40659 5.3546 4.50693 5.07901 4.59018C4.96021 4.62848 4.83684 4.65082 4.71215 4.65662C4.38861 4.65662 4.22684 4.42553 4.22684 3.94311V2.81362C4.22684 2.44386 4.27306 2.16654 4.38861 2.00477C4.56311 1.79505 4.78487 1.62972 5.03568 1.52236C5.95953 1.06366 6.93388 0.714635 7.93885 0.482416C9.11462 0.181409 10.3246 0.0347776 11.5382 0.046219C14.2825 0.046219 16.2873 0.670184 17.5785 1.91522C18.8496 3.15738 19.4909 5.04949 19.4909 7.58579V15.056H19.5371ZM10.1776 18.5629C10.9373 18.5629 11.7202 18.4243 12.5521 18.147C13.3978 17.8547 14.1525 17.3469 14.7418 16.6737C15.1142 16.2479 15.3832 15.7417 15.5275 15.1947C15.6633 14.6429 15.7586 13.9728 15.7586 13.1899V12.2222C15.0588 12.0516 14.3499 11.9204 13.6354 11.8293C12.9168 11.738 12.1932 11.6917 11.4689 11.6907C9.9234 11.6907 8.79391 11.9911 8.03129 12.6151C7.27156 13.2361 6.90469 14.1114 6.90469 15.264C6.90469 16.3473 7.17912 17.1561 7.75686 17.7079C8.30861 18.2856 9.11456 18.5629 10.1776 18.5629ZM28.6943 21.053C28.2784 21.053 28.001 20.9837 27.8162 20.8219C27.6313 20.6833 27.4695 20.3597 27.3309 19.9235L21.9145 2.09721C21.8091 1.79831 21.7393 1.48805 21.7065 1.17282C21.7065 0.803066 21.8914 0.595077 22.2583 0.595077H24.5201C24.9563 0.595077 25.2568 0.667295 25.4156 0.826174C25.6034 0.964833 25.7421 1.28837 25.8778 1.72746L29.7545 16.9915L33.351 1.72746C33.4665 1.26526 33.6052 0.964833 33.7872 0.826174C34.0643 0.65621 34.387 0.575535 34.7115 0.595077H36.5546C36.9936 0.595077 37.2941 0.667295 37.4789 0.826174C37.6609 0.964833 37.8256 1.28837 37.9151 1.72746L41.5578 17.1764L45.5471 1.72746C45.6858 1.26526 45.8476 0.964833 46.0093 0.826174C46.2769 0.656289 46.5914 0.575398 46.9077 0.595077H49.0541C49.4209 0.595077 49.6318 0.782845 49.6318 1.17282C49.6318 1.28837 49.6058 1.40392 49.5827 1.54258C49.5465 1.73969 49.4924 1.93308 49.4209 2.12032L43.8659 19.9438C43.7273 20.4059 43.5655 20.7035 43.3806 20.8421C43.1203 21.0091 42.8141 21.09 42.5053 21.0732H40.5208C40.0875 21.0732 39.7841 21.0039 39.5964 20.8421C39.4144 20.6804 39.2526 20.38 39.1631 19.9178L35.5897 5.0466L32.0366 19.8946C31.921 20.3568 31.7853 20.6573 31.6033 20.819C31.4155 20.9808 31.092 21.0501 30.6789 21.0501L28.6972 21.053H28.6943ZM58.3211 21.6741C57.1223 21.6741 55.9234 21.5354 54.7708 21.261C53.6182 20.9837 52.7198 20.6833 52.119 20.3366C51.7492 20.1315 51.4979 19.9004 51.4055 19.6924C51.3154 19.4885 51.2682 19.2683 51.2668 19.0454V17.8696C51.2668 17.3872 51.4517 17.1561 51.7955 17.1561C51.9341 17.1561 52.0728 17.1792 52.2114 17.2255C52.3501 17.2717 52.5581 17.3641 52.7892 17.4566C53.572 17.8032 54.4242 18.0776 55.3255 18.2625C56.2499 18.4474 57.1454 18.5398 58.0698 18.5398C59.5199 18.5398 60.6523 18.2856 61.4351 17.7772C61.8104 17.5505 62.119 17.2285 62.3295 16.8439C62.5401 16.4593 62.6451 16.0259 62.6339 15.5876C62.6424 15.2907 62.5919 14.9951 62.4852 14.7179C62.3786 14.4407 62.2181 14.1874 62.0129 13.9728C61.5969 13.5366 60.8112 13.1437 59.6817 12.7739L56.3394 11.734C54.6553 11.2054 53.4103 10.4225 52.6505 9.38546C51.9069 8.42838 51.5007 7.25229 51.495 6.04032C51.495 5.0726 51.7059 4.22043 52.119 3.48091C52.535 2.74429 53.0867 2.09721 53.78 1.59169C54.4733 1.06016 55.2533 0.667296 56.1777 0.392867C57.102 0.115549 58.0698 0 59.0837 0C59.5892 0 60.1236 0.02311 60.6292 0.0924394C61.1578 0.161769 61.6402 0.254207 62.1255 0.346647C62.5877 0.462196 63.0268 0.577745 63.4399 0.713516C63.8559 0.852174 64.1794 0.990832 64.4105 1.12949C64.6827 1.26653 64.9199 1.46418 65.1038 1.70724C65.2527 1.93156 65.3247 2.19819 65.3089 2.46697V3.55024C65.3089 4.03555 65.124 4.28976 64.7774 4.28976C64.4705 4.25457 64.1733 4.1604 63.9021 4.01244C62.5091 3.39706 60.9993 3.09057 59.4766 3.11404C58.1622 3.11404 57.1223 3.31914 56.4087 3.75823C55.6923 4.19732 55.3255 4.86461 55.3255 5.80922C55.3255 6.4563 55.5566 7.01093 56.0188 7.44713C56.481 7.88622 57.3302 8.3253 58.5522 8.71817L61.828 9.75233C63.4861 10.2839 64.6878 11.0234 65.4013 11.968C66.1149 12.9126 66.4615 13.9959 66.4615 15.1947C66.4615 16.1855 66.2535 17.0868 65.8635 17.8696C65.4535 18.659 64.8793 19.3515 64.1794 19.9004C63.463 20.4782 62.6108 20.8913 61.62 21.1917C60.5801 21.5123 59.4997 21.6741 58.3211 21.6741Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.09228 27.3718C10.8677 33.0424 22.931 36.48 35.4017 36.48C43.8194 36.48 53.0633 34.7265 61.5735 31.13C62.8445 30.5523 63.9249 31.9591 62.6799 32.8835C55.0941 38.4876 44.0707 41.4601 34.5957 41.4601C21.3134 41.4601 9.34826 36.5493 0.306552 28.3858C-0.406963 27.7416 0.237222 26.8634 1.09228 27.3718ZM69.0668 26.7941C69.8959 27.834 68.8357 34.9576 64.7771 38.3692C64.156 38.9007 63.5552 38.6234 63.8325 37.933L64.338 36.6648C65.3288 34.1228 66.6548 30.3154 65.8401 29.2841C64.8695 28.042 59.4272 28.6862 56.9602 28.9866C56.2236 29.079 56.108 28.432 56.7782 27.9467C61.1113 24.9048 68.2378 25.7801 69.0668 26.7941Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: "Deepseek",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M62.4609 3.82079C61.7883 3.49942 61.5275 4.11003 61.1376 4.42069C61.003 4.52246 60.8905 4.65369 60.7779 4.76885C59.7977 5.79725 58.6556 6.46678 57.1675 6.38643C54.982 6.2686 53.1205 6.94081 51.4732 8.57714C51.1245 6.55783 49.9604 5.35536 48.1922 4.58138C47.2642 4.17966 46.3252 3.77794 45.68 2.90487C45.227 2.28622 45.1035 1.59259 44.8756 0.912347C44.7328 0.502594 44.5873 0.082128 44.1068 0.00981859C43.5797 -0.0705252 43.3765 0.357975 43.1706 0.719522C42.3469 2.19249 42.0284 3.82079 42.0559 5.46516C42.13 9.16633 43.7252 12.1123 46.8936 14.2119C47.256 14.4529 47.3493 14.694 47.234 15.0448C47.0171 15.7679 46.7618 16.4669 46.5339 17.1873C46.3911 17.6506 46.177 17.7524 45.6718 17.5489C43.9632 16.8317 42.4114 15.8017 41.1004 14.5145C38.8491 12.3801 36.8091 10.0233 34.2667 8.1781C33.678 7.75148 33.0736 7.34592 32.4546 6.96223C29.8628 4.493 32.7978 2.46566 33.476 2.22731C34.1871 1.97824 33.7231 1.11321 31.4251 1.12392C29.1325 1.13463 27.0322 1.88718 24.358 2.8888C23.9654 3.04146 23.4629 3.29856 23.1334 3.23696C20.6325 2.77902 18.075 2.69235 15.5474 2.97986C10.589 3.52352 6.62436 5.81867 3.71406 9.74212C0.213459 14.4556 -0.607466 19.8092 0.400157 25.3984C1.4572 31.2823 4.524 36.1618 9.24088 39.9728C14.128 43.9204 19.7564 45.8566 26.1783 45.4844C30.077 45.2674 34.4232 44.7532 39.3186 40.6932C40.5541 41.2931 41.85 41.5315 44.0052 41.7136C45.6608 41.8662 47.256 41.6332 48.4915 41.3842C50.4244 40.9824 50.2898 39.231 49.5897 38.9042C43.9201 36.3172 45.1639 37.3697 44.0327 36.5207C46.9155 33.1784 51.259 29.7075 52.9558 18.4675C53.0903 17.573 52.975 17.0132 52.9558 16.2875C52.9476 15.8509 53.0491 15.6768 53.5598 15.626C54.985 15.4808 56.3673 15.0651 57.6287 14.4021C61.3023 12.4363 62.7547 9.20918 63.1062 5.33661C63.1583 4.74742 63.0952 4.13145 62.4582 3.82347M30.4669 38.6659C24.9702 34.4344 22.307 33.0418 21.2061 33.1007C20.1765 33.157 20.3604 34.3112 20.5883 35.0638C20.8244 35.8056 21.1319 36.3172 21.5657 36.9679C21.865 37.4018 22.0709 38.0445 21.2692 38.5213C19.4983 39.6005 16.4205 38.1624 16.2723 38.0928C12.6948 36.0306 9.69939 33.2989 7.58805 29.571C5.55359 25.9769 4.37025 22.1258 4.17531 18.0149C4.1204 17.0186 4.42241 16.6678 5.42729 16.4883C6.75438 16.2408 8.11409 16.2074 9.45229 16.3892C15.0615 17.1927 19.836 19.6512 23.8391 23.5398C26.1234 25.76 27.8531 28.406 29.6322 30.993C31.5266 33.7435 33.5639 36.36 36.1584 38.5025C37.0727 39.2551 37.8058 39.8282 38.5031 40.2513C36.3945 40.479 32.8747 40.5298 30.4669 38.6659ZM33.1026 22.0642C33.1026 21.8554 33.1876 21.6551 33.339 21.5074C33.4904 21.3598 33.6957 21.2768 33.9098 21.2768C34.1239 21.2768 34.3292 21.3598 34.4806 21.5074C34.632 21.6551 34.717 21.8554 34.717 22.0642C34.7177 22.1685 34.6972 22.2719 34.6566 22.3684C34.616 22.4649 34.5562 22.5526 34.4806 22.6263C34.405 22.7001 34.3151 22.7584 34.2162 22.798C34.1172 22.8376 34.0112 22.8576 33.9043 22.8569C33.7977 22.858 33.6919 22.8382 33.5932 22.7986C33.4946 22.7591 33.4051 22.7006 33.33 22.6267C33.255 22.5527 33.196 22.4648 33.1564 22.3682C33.1169 22.2716 33.0976 22.1682 33.0999 22.0642M41.2816 26.1805C40.7545 26.3893 40.2301 26.5715 39.7277 26.5929C38.971 26.616 38.2294 26.3843 37.6273 25.9367C36.908 25.3476 36.3918 25.0181 36.1721 23.9817C36.0998 23.4776 36.1147 22.9652 36.2161 22.4659C36.4028 21.6223 36.1941 21.084 35.5901 20.5912C35.0959 20.1895 34.4699 20.0824 33.778 20.0824C33.5404 20.0723 33.3096 20.0021 33.1081 19.8788C32.8198 19.7369 32.5837 19.3861 32.8088 18.9549C32.9521 18.7536 33.123 18.5725 33.3168 18.4166C34.2502 17.8943 35.332 18.0684 36.3314 18.4567C37.2566 18.829 37.9568 19.5092 38.9644 20.4707C39.994 21.633 40.1779 21.9571 40.7655 22.8274C41.2267 23.513 41.6523 24.2147 41.9406 25.0181C42.1135 25.5163 41.8857 25.9287 41.2816 26.1805Z"
          fill="#4D6BFE"
        />
      </svg>
    ),
  },
  {
    name: "Qwen",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M64.5405 39.9798L56.0213 25.1895L60.5176 17.63C60.8769 16.999 60.8769 16.2189 60.5176 15.5879L56.0213 8.0284C55.7934 7.62084 55.3596 7.36667 54.8819 7.36667H38.2729L34.4428 0.661729C34.2149 0.254174 33.7811 0 33.3034 0H24.4336C23.9559 0 23.5221 0.254174 23.2942 0.661729L14.775 15.4477H5.90517C5.4275 15.4477 4.99365 15.7018 4.76577 16.1094L0.269512 23.6689C-0.0898374 24.2999 -0.0898374 25.08 0.269512 25.711L7.87721 39.4321L4.04707 46.137C3.68772 46.768 3.68772 47.5481 4.04707 48.1792L8.54332 55.7386C8.7712 56.1462 9.20505 56.4004 9.68272 56.4004H26.2917L30.1218 63.1053C30.3497 63.5129 30.7836 63.767 31.2612 63.767H40.131C40.6087 63.767 41.0426 63.5129 41.2704 63.1053L49.7897 48.3194H57.3974C57.875 48.3194 58.3089 48.0652 58.5368 47.6577L63.033 40.0982C63.3924 39.4671 63.3924 38.6871 63.033 38.056L64.5405 39.9798Z"
          fill="url(#paint0_radial_2825_10963)"
        />
        <path
          d="M40.1314 63.7655H31.2616L26.292 55.7371H9.68307L14.7753 47.7087H23.2945L4.76611 16.5504H14.7753L24.4339 0.660156L28.9302 8.68855L24.4339 16.5504H58.7387L54.2424 24.1099L62.7616 38.8958H54.2424L49.79 31.034L32.2695 63.7655H40.1314Z"
          fill="white"
        />
        <path
          d="M43.9612 27.3086H21.2959L32.2692 45.837L43.9612 27.3086Z"
          fill="url(#paint1_radial_2825_10963)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1453) rotate(90) scale(43.8231 43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2825_10963"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.7521 36.1477) rotate(90) scale(43.8231)"
          >
            <stop stop-color="#665CEE" />
            <stop offset="1" stop-color="#332E91" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];

function page() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-screen pt-8 overflow-x-hidden font-futuru ">
        <ServiceInnerHero
          isPopup={true}
          buttonText="Start Audit"
          imageclassName="xl:w-[730px] 2xl:w-[1000px] xl:right-5 2xl:right-[18%]"
          rightImage="/ai-seo.webp"
          heading="AI-SEO AEO Smarter Insights, Faster Results "
          headingClassName="lg:max-w-[90%] 2xl:max-w-[65%] text"
          para="Step ahead in search with AI-driven answers that captivate customers at the speed of conversation. "
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach."
        />
        <DigitalProducts
          isWidth={true}
          leftText="Beyond keywords, we craft intelligent answer strategies that power your presence at every touchpoint driving traffic, engagement, and conversions. "
          mainHeading="AI-Driven Answer Engine Optimization That Works Across Every Channel "
          highlightWords={["Optimization", "Channel "]}
        />
        <ScrollCardsSection
          heading="Data-Driven <h5 style='color:#00AA71'>AEO</h5> That Transforms <h5 style='color:#00AA71'>Visibility</h5> and Growth  "
          headingClassName="max-w-[100%] tracking-wide"
          text="From identifying key answer gaps to boosting conversational search traffic, our data-driven AEO strategies deliver measurable impact and competitive advantage. "
          cardsData={cards}
        />

        <SolutionCarousel
          para="Every project is an opportunity to create impact. We combine creative thinking, human-centered design, and technical excellence to deliver solutions that move brands forward."
          isPadding={true}
        />
        <NewGreen
          bg={false}
          text="Build a Strong <span style='color: #00AA71'>Online Foundation</span>. Book Your Free AEO Audit   "
          buttonText="start audit"
          isPopupOpen={true}
        />
        <ServicesOffer
          subtext="From frontend finesse to backend brains—we build robust, secure, and scalable digital products"
          services={defaultServices}
        />
        <TechStackCarousel tech={technologies} />
        <NewOurProcess steps={steps3} />
        <NewGreen
          isPopupOpen={true}
          text="Driven by AI and research, our AEO strategies connect your brand at the exact moment of search intent."
          buttonText="Let’s talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas mainText="Find your perfect fit" line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
