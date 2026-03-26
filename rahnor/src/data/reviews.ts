export interface Review {
  id: string;
  text: string;
  name: string;
  country: string;
  flag: string;
  platform: "Fiverr" | "Upwork";
  rating: number;
}

export const reviews: Review[] = [
  {
    id: "r1",
    text: "Rahnor delivered our SaaS MVP in under two weeks. The code quality was exceptional — clean architecture, proper TypeScript, and zero shortcuts. Will definitely hire again.",
    name: "Michael T.",
    country: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    platform: "Upwork",
    rating: 5,
  },
  {
    id: "r2",
    text: "Built our AI chatbot from scratch with RAG integration. It handles thousands of queries daily without issues. Communication was outstanding throughout the project.",
    name: "Sarah K.",
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    platform: "Fiverr",
    rating: 5,
  },
  {
    id: "r3",
    text: "Our React Native app went from concept to both app stores in three weeks. The attention to detail on UI/UX was impressive. Highly professional.",
    name: "James L.",
    country: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    platform: "Upwork",
    rating: 5,
  },
  {
    id: "r4",
    text: "Rahnor transformed our messy prototype into a production-ready platform. The refactoring was thorough and the new architecture handles 10x the traffic.",
    name: "Ahmed R.",
    country: "Saudi Arabia",
    flag: "\u{1F1F8}\u{1F1E6}",
    platform: "Fiverr",
    rating: 5,
  },
  {
    id: "r5",
    text: "The best freelancer I've worked with on Upwork. Delivered a full e-commerce platform with Stripe integration ahead of schedule. 100% job success is well-earned.",
    name: "David M.",
    country: "Canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    platform: "Upwork",
    rating: 5,
  },
  {
    id: "r6",
    text: "We needed an AI automation agent for our workflow. Rahnor built a custom solution with n8n that saves us 20+ hours per week. Incredible ROI.",
    name: "Lisa H.",
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    platform: "Fiverr",
    rating: 5,
  },
  {
    id: "r7",
    text: "Fast, reliable, and genuinely cares about the product. Our monitoring SaaS was built with real-time WebSocket updates and hasn't had a single downtime issue.",
    name: "Tom W.",
    country: "Netherlands",
    flag: "\u{1F1F3}\u{1F1F1}",
    platform: "Upwork",
    rating: 5,
  },
  {
    id: "r8",
    text: "Rahnor built our LMS platform using vibe coding tools and delivered in record time. The platform handles hundreds of students daily. Exceptional work.",
    name: "Fatima A.",
    country: "UAE",
    flag: "\u{1F1E6}\u{1F1EA}",
    platform: "Fiverr",
    rating: 5,
  },
  {
    id: "r9",
    text: "Needed a complex multi-tenant SaaS with role-based access. Rahnor nailed the architecture on the first try. Clean code, great docs, smooth handoff.",
    name: "Robert P.",
    country: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    platform: "Upwork",
    rating: 5,
  },
  {
    id: "r10",
    text: "Our GPT-powered customer support bot was built in just 5 days. It integrates with our CRM and handles 80% of tickets automatically. Game changer.",
    name: "Emma S.",
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    platform: "Fiverr",
    rating: 5,
  },
];
