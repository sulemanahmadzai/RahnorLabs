import {
  Globe,
  Rocket,
  ShoppingCart,
  Server,
  Smartphone,
  Upload,
  Bot,
  Cpu,
  Database,
  Sparkles,
  Zap,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  category: "web" | "mobile" | "ai" | "vibe";
}

export const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI & Agents" },
  { id: "vibe", label: "Vibe Coding" },
] as const;

export const services: Service[] = [
  // Web Apps
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Full-stack web applications built with MERN or Next.js. Scalable, fast, production-ready.",
    icon: Globe,
    tags: ["React", "Node.js", "MongoDB"],
    category: "web",
  },
  {
    id: "saas-platform",
    title: "SaaS Platform Development",
    description:
      "Multi-role dashboards, subscription billing, and authentication built from the ground up.",
    icon: Rocket,
    tags: ["Stripe", "Auth", "Next.js"],
    category: "web",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Custom storefronts with seamless payment flows, inventory management, and analytics.",
    icon: ShoppingCart,
    tags: ["Shopify", "Next.js", "Stripe"],
    category: "web",
  },
  {
    id: "api-dev",
    title: "API Development & Integration",
    description:
      "REST and GraphQL APIs designed for performance, security, and developer experience.",
    icon: Server,
    tags: ["Express", "REST", "GraphQL"],
    category: "web",
  },

  // Mobile Apps
  {
    id: "cross-platform",
    title: "Cross-Platform Mobile Apps",
    description:
      "React Native apps for iOS and Android from a single codebase. Native feel, faster delivery.",
    icon: Smartphone,
    tags: ["React Native", "Expo"],
    category: "mobile",
  },
  {
    id: "app-store",
    title: "App Store Deployment",
    description:
      "Full submission support for Apple App Store and Google Play. From build to approval.",
    icon: Upload,
    tags: ["iOS", "Android", "Expo"],
    category: "mobile",
  },

  // AI & Agents
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description:
      "Custom GPT-powered assistants trained on your data. Smart, context-aware, production-ready.",
    icon: Bot,
    tags: ["OpenAI", "RAG", "LangChain"],
    category: "ai",
  },
  {
    id: "ai-automation",
    title: "AI Automation Agents",
    description:
      "Workflow automation bots that handle repetitive tasks. n8n, custom agents, and API orchestration.",
    icon: Cpu,
    tags: ["n8n", "Agents", "APIs"],
    category: "ai",
  },
  {
    id: "rag-pipelines",
    title: "RAG Pipelines",
    description:
      "Knowledge base ingestion with semantic search. Turn your docs into an intelligent assistant.",
    icon: Database,
    tags: ["Pinecone", "Embeddings"],
    category: "ai",
  },
  {
    id: "llm-integrations",
    title: "LLM Integrations",
    description:
      "Add AI capabilities to any existing product. OpenAI, Anthropic, and custom model pipelines.",
    icon: Sparkles,
    tags: ["OpenAI", "Anthropic"],
    category: "ai",
  },

  // Vibe Coding
  {
    id: "rapid-mvp",
    title: "Rapid MVP Development",
    description:
      "From idea to deployed product in days. AI-accelerated development for maximum speed.",
    icon: Zap,
    tags: ["Base44", "Bolt", "Cursor"],
    category: "vibe",
  },
  {
    id: "ai-assisted-dev",
    title: "AI-Assisted Development",
    description:
      "Cursor + Claude powered builds. Leverage cutting-edge AI tools for faster, smarter code.",
    icon: Wand2,
    tags: ["Cursor", "Claude", "Lovable"],
    category: "vibe",
  },
];
