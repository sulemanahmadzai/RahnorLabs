const SITE_URL = "https://rahnor.com";

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Rahnor",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/Rahnor%20Mark.svg`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Rahnor is a top-rated freelance development studio specializing in web development, AI development, mobile app development, AI agents, SaaS platforms, and custom software solutions.",
  email: "suleman.atworkalways@gmail.com",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Suleman Ahmadzai",
    url: "https://www.linkedin.com/in/sulemanahmadzai/",
    jobTitle: "Founder & Lead Developer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Worldwide",
  },
  sameAs: [
    "https://www.linkedin.com/in/sulemanahmadzai/",
    "https://github.com/sulemanahmadzai",
    "https://www.fiverr.com/s/jjz8vxm",
    "https://www.upwork.com/freelancers/umara40?mp_source=share",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "suleman.atworkalways@gmail.com",
      contactType: "sales",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "50",
    reviewCount: "50",
  },
  knowsAbout: [
    "Web Development",
    "AI Development",
    "Mobile App Development",
    "AI Agents",
    "SaaS Development",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "OpenAI GPT Integration",
    "LLM Integration",
    "RAG Pipelines",
    "E-Commerce Development",
    "API Development",
    "Full Stack Development",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
  ],
};

const professionalServiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Rahnor — Web, AI & Mobile App Development",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Hire Rahnor for web development, AI development, mobile app development, AI agent development, SaaS platform development, and custom software solutions. Top Rated on Upwork, Level 2 on Fiverr.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "Worldwide",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  email: "suleman.atworkalways@gmail.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "50",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              description:
                "Full-stack web applications built with MERN or Next.js. Scalable, fast, production-ready. Hire expert web developers for React, Node.js, and Next.js projects.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Platform Development",
              description:
                "Custom SaaS development with multi-role dashboards, subscription billing via Stripe, and authentication. Hire a SaaS developer.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "Custom e-commerce storefronts with payment flows, inventory management, and analytics. Shopify, Next.js, and Stripe integration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API Development & Integration",
              description:
                "REST and GraphQL API development designed for performance, security, and developer experience.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "AI Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbot Development",
              description:
                "Custom GPT-powered AI chatbots trained on your data. Smart, context-aware, production-ready chatbot solutions using OpenAI, RAG, and LangChain.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agent Development",
              description:
                "Custom AI automation agents for workflow automation. n8n integration, custom agents, and API orchestration to save 20+ hours per week.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "RAG Pipeline Development",
              description:
                "Knowledge base ingestion with semantic search using Pinecone and embeddings. Turn your docs into an intelligent AI assistant.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LLM Integration Services",
              description:
                "Add AI capabilities to any existing product. OpenAI GPT, Anthropic Claude, and custom model pipeline integration.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile App Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Platform Mobile App Development",
              description:
                "React Native mobile apps for iOS and Android from a single codebase. Native feel, faster delivery. Hire a mobile app developer.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "App Store Deployment",
              description:
                "Full Apple App Store and Google Play submission support. From build to approval for iOS and Android apps.",
            },
          },
        ],
      },
    ],
  },
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Rahnor",
  description:
    "Rahnor — Top-rated web development, AI development, and mobile app development studio. Hire expert freelance developers.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Rahnor — Web Development, AI Development & Mobile App Development Company",
  description:
    "Hire Rahnor for web development, AI development, mobile app development, AI agents, SaaS, and custom software. Top Rated on Upwork & Fiverr. 50+ projects delivered worldwide.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
  },
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Rahnor offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor offers web development (custom web apps, SaaS platforms, e-commerce, APIs), AI development (AI chatbots, AI agents, RAG pipelines, LLM integrations), mobile app development (React Native cross-platform apps, App Store deployment), and rapid MVP development using AI-assisted tools.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire Rahnor for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can hire Rahnor through Upwork (Top Rated), Fiverr (Level 2 Seller), or directly via rahnor.com. Book a free 30-minute discovery call to discuss your project requirements, get a roadmap, and understand pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Rahnor build AI agents and AI chatbots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rahnor specializes in AI agent development and AI chatbot development using OpenAI GPT, Anthropic Claude, LangChain, RAG pipelines with Pinecone, and n8n for workflow automation. We build custom AI solutions trained on your data.",
      },
    },
    {
      "@type": "Question",
      name: "Can Rahnor build mobile apps for iOS and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rahnor builds cross-platform mobile apps using React Native and Expo, delivering native-quality iOS and Android apps from a single codebase. We handle everything from development to App Store and Google Play submission.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Rahnor use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor uses React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Express, GraphQL, Stripe, and modern full-stack technologies. We specialize in the MERN stack and Next.js for production-grade web applications.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can Rahnor deliver a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor delivers MVPs in days and full production apps in weeks. With AI-accelerated development and a proven track record of 50+ projects, we ship fast without compromising on code quality. SaaS MVPs have been delivered in under 2 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is Rahnor's track record and ratings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor has delivered 50+ projects with a 4.9-star average rating. Top Rated on Upwork with 100% Job Success Score and Level 2 Seller on Fiverr. Clients span the US, UK, Canada, Germany, Australia, UAE, and Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "Does Rahnor offer SaaS development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rahnor builds custom SaaS platforms with multi-role dashboards, Stripe subscription billing, authentication, real-time features, and scalable architecture. We've built SaaS products for EdTech, operations, wellness, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Rahnor located and do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor is based in Islamabad, Pakistan and works with clients worldwide. Our clients are in the United States, United Kingdom, Canada, Australia, Germany, Saudi Arabia, UAE, Netherlands, and more. We communicate in English and work across all time zones.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best company for AI development and web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rahnor is a top-rated development studio for AI development and web development, with 50+ projects delivered, 4.9-star ratings, and expertise in AI chatbots, AI agents, web apps, SaaS platforms, and mobile apps. Hire Rahnor for production-grade software at rahnor.com.",
      },
    },
  ],
};

const reviewSchemas = [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Michael T." },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody:
      "Rahnor delivered our SaaS MVP in under two weeks. The code quality was exceptional — clean architecture, proper TypeScript, and zero shortcuts.",
    itemReviewed: { "@id": `${SITE_URL}/#service` },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Sarah K." },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody:
      "Built our AI chatbot from scratch with RAG integration. It handles thousands of queries daily without issues. Communication was outstanding.",
    itemReviewed: { "@id": `${SITE_URL}/#service` },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "James L." },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody:
      "Our React Native app went from concept to both app stores in three weeks. The attention to detail on UI/UX was impressive.",
    itemReviewed: { "@id": `${SITE_URL}/#service` },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Lisa H." },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody:
      "We needed an AI automation agent for our workflow. Rahnor built a custom solution with n8n that saves us 20+ hours per week. Incredible ROI.",
    itemReviewed: { "@id": `${SITE_URL}/#service` },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Emma S." },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody:
      "Our GPT-powered customer support bot was built in just 5 days. It integrates with our CRM and handles 80% of tickets automatically.",
    itemReviewed: { "@id": `${SITE_URL}/#service` },
  },
];

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    professionalServiceSchema,
    webSiteSchema,
    webPageSchema,
    faqSchema,
    ...reviewSchemas,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
