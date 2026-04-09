const S = "https://rahnor.com";

const orgRef = { "@id": `${S}/#org` };
const svcRef = { "@id": `${S}/#svc` };

const rating = {
  "@type": "AggregateRating" as const,
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: "50",
  reviewCount: "50",
};

const addr = {
  "@type": "PostalAddress" as const,
  addressLocality: "Islamabad",
  addressCountry: "PK",
};

function svc(name: string, desc: string) {
  return { "@type": "Offer", itemOffered: { "@type": "Service", name, description: desc } };
}

function faq(q: string, a: string) {
  return { "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } };
}

function rev(name: string, body: string) {
  return {
    "@type": "Review",
    author: { "@type": "Person", name },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody: body,
    itemReviewed: svcRef,
  };
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${S}/#org`,
      name: "Rahnor",
      url: S,
      logo: { "@type": "ImageObject", url: `${S}/assets/Rahnor%20Mark.svg`, width: 512, height: 512 },
      description: "Top-rated freelance development studio specializing in web development, AI development, mobile app development, AI agents, SaaS platforms, and custom software.",
      email: "suleman.atworkalways@gmail.com",
      foundingDate: "2023",
      founder: { "@type": "Person", name: "Suleman Ahmadzai", url: "https://www.linkedin.com/in/sulemanahmadzai/", jobTitle: "Founder & Lead Developer" },
      address: addr,
      areaServed: "Worldwide",
      sameAs: [
        "https://www.linkedin.com/in/sulemanahmadzai/",
        "https://github.com/sulemanahmadzai",
        "https://www.fiverr.com/s/jjz8vxm",
        "https://www.upwork.com/freelancers/umara40?mp_source=share",
      ],
      contactPoint: { "@type": "ContactPoint", email: "suleman.atworkalways@gmail.com", contactType: "sales", availableLanguage: "English" },
      aggregateRating: rating,
      knowsAbout: ["Web Development", "AI Development", "Mobile App Development", "AI Agents", "SaaS Development", "React", "Next.js", "Node.js", "React Native", "OpenAI GPT", "LLM Integration", "RAG Pipelines", "TypeScript"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${S}/#svc`,
      name: "Rahnor — Web, AI & Mobile App Development",
      url: S,
      description: "Hire Rahnor for web development, AI development, mobile app development, AI agents, and SaaS. Top Rated on Upwork, Level 2 on Fiverr.",
      provider: orgRef,
      areaServed: "Worldwide",
      priceRange: "$$",
      address: addr,
      aggregateRating: rating,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Web Development", itemListElement: [
            svc("Custom Web Application Development", "Full-stack web apps with React, Next.js, Node.js, and TypeScript."),
            svc("SaaS Platform Development", "Multi-role dashboards, Stripe billing, and authentication."),
            svc("E-Commerce Development", "Custom storefronts with Shopify, Next.js, and Stripe."),
            svc("API Development", "REST and GraphQL APIs for performance and security."),
          ]},
          { "@type": "OfferCatalog", name: "AI Development", itemListElement: [
            svc("AI Chatbot Development", "GPT-powered chatbots with OpenAI, RAG, and LangChain."),
            svc("AI Agent Development", "Workflow automation with n8n, custom agents, and API orchestration."),
            svc("RAG Pipeline Development", "Semantic search with Pinecone and embeddings."),
            svc("LLM Integration", "OpenAI GPT, Anthropic Claude, and custom model pipelines."),
          ]},
          { "@type": "OfferCatalog", name: "Mobile App Development", itemListElement: [
            svc("Cross-Platform Mobile Apps", "React Native apps for iOS and Android from a single codebase."),
            svc("App Store Deployment", "Full Apple App Store and Google Play submission support."),
          ]},
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${S}/#site`,
      url: S,
      name: "Rahnor",
      publisher: orgRef,
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${S}/#page`,
      url: S,
      name: "Rahnor — Web Development, AI Development & Mobile App Development Company",
      isPartOf: { "@id": `${S}/#site` },
      about: orgRef,
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        faq("What services does Rahnor offer?", "Rahnor offers web development (custom web apps, SaaS, e-commerce, APIs), AI development (chatbots, AI agents, RAG pipelines, LLM integrations), mobile app development (React Native for iOS & Android), and rapid MVP development."),
        faq("How do I hire Rahnor?", "Hire through Upwork (Top Rated), Fiverr (Level 2 Seller), or directly at rahnor.com. Book a free 30-minute discovery call."),
        faq("Does Rahnor build AI agents and chatbots?", "Yes. We build AI agents and chatbots using OpenAI GPT, Claude, LangChain, Pinecone RAG pipelines, and n8n automation."),
        faq("Can Rahnor build mobile apps for iOS and Android?", "Yes. React Native and Expo apps from a single codebase, with full App Store and Google Play submission."),
        faq("What technologies does Rahnor use?", "React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, GraphQL, Stripe, React Native, OpenAI, Claude, LangChain, Pinecone, and n8n."),
        faq("How fast can Rahnor deliver?", "MVPs in days, production apps in weeks. SaaS MVPs delivered in under 2 weeks, mobile apps from concept to app stores in 3 weeks."),
        faq("What is Rahnor's track record?", "50+ projects, 4.9-star rating, Top Rated on Upwork with 100% Job Success, Level 2 on Fiverr. Clients in US, UK, Canada, Germany, Australia, UAE, and more."),
        faq("Does Rahnor build SaaS platforms?", "Yes. Custom SaaS with multi-role dashboards, Stripe billing, auth, real-time features, and scalable architecture."),
        faq("Where is Rahnor located?", "Islamabad, Pakistan — working with clients worldwide across all time zones. Daily updates, clear English communication."),
        faq("What makes Rahnor different?", "AI-native development, production-grade TypeScript code, fast delivery (days not months), daily communication, and ongoing support after launch."),
      ],
    },
    rev("Michael T.", "Delivered our SaaS MVP in under two weeks. Exceptional code quality — clean architecture, proper TypeScript, zero shortcuts."),
    rev("Sarah K.", "Built our AI chatbot from scratch with RAG integration. Handles thousands of queries daily. Outstanding communication."),
    rev("James L.", "React Native app from concept to both app stores in three weeks. Impressive UI/UX attention to detail."),
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
