export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "einstein-ai-ielts",
    name: "Einstein AI IELTS",
    description:
      "AI-powered IELTS preparation platform for speaking, writing, reading, and listening with instant feedback, exam simulations, and personalized study plans.",
    category: "EdTech / AI",
    tags: ["AI", "EdTech", "IELTS"],
    image: "/assets/projects/einstein-ai-ielts.png",
    link: "https://www.einsteinai.io/",
  },
  {
    id: "nugget-family-friendly-eat",
    name: "Nugget: Family Friendly Eat",
    description:
      "Family-focused discovery platform for kid-friendly restaurants with curated listings, amenity filters, and community insights.",
    category: "Marketplace",
    tags: ["Listings", "Filters", "Community"],
    image: "/assets/projects/nugget-family-friendly-eat.png",
    link: "https://www.thenugget.app/",
  },
  {
    id: "nd-onboarding",
    name: "ND Onboarding",
    description:
      "Web onboarding platform that streamlines client and employee onboarding with secure auth, workflow automation, and centralized management.",
    category: "SaaS",
    tags: ["Authentication", "Automation", "Workflows"],
    image: "/assets/projects/nd-onboarding.png",
    link: "https://www.ndonboarding.com/",
  },
  {
    id: "gatherup",
    name: "GatherUp",
    description:
      "Accountability partner platform for simple onboarding, smart pairing, and progress-focused wellbeing journeys.",
    category: "Wellness SaaS",
    tags: ["Matching", "Onboarding", "Progress Tracking"],
    image: "/assets/projects/gatherup.png",
    link: "https://gather-up-iota.vercel.app/",
  },
  {
    id: "car-repair-booking-management",
    name: "Car Repair / Booking Management",
    description:
      "Car service operations platform for managing bookings, services, and staff; helped the client scale business outcomes after launch.",
    category: "Operations",
    tags: ["Booking", "Service Management", "Staff"],
    image: "/assets/projects/car-repair-booking-management.png",
    link: "https://car-repair-management.vercel.app/",
  },
  {
    id: "skyline-academics",
    name: "Skyline – Academics",
    description:
      "Scalable academic platform for students, teachers, and admins with role management, real-time flows, secure payments, and AI-assisted learning features.",
    category: "EdTech Platform",
    tags: ["AngularJS", "PostgreSQL"],
    image: "/assets/projects/skyline-academics.png",
    link: "https://skylineacademic.com/",
  },
];
