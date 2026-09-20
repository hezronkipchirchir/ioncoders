import { Project } from "@/lib/types";

// PLACEHOLDER DATA — Replace with actual IONCODERS projects when available
export const projects: Project[] = [
  {
    id: "ion-learn",
    name: "ION Learn",
    description:
      "A self-paced learning platform where IONCODERS members share curated tutorials, study notes, and mini-courses in web development, software engineering, and AI fundamentals.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    projectUrl: "#",
    status: "In Development",
    isPlaceholder: true,
  },
  {
    id: "ion-hub",
    name: "IONHub",
    description:
      "The main IONCODERS community portal. Members log in to view announcements, upcoming events, submit projects for review, and connect directly with other members.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    projectUrl: "#",
    status: "Active",
    isPlaceholder: true,
  },
  {
    id: "ion-ai-lab",
    name: "ION AI Lab",
    description:
      "A sandbox environment for AI/ML experiments run by the IONCODERS AI & Data chapter. Includes text summarisers, a code review bot, and dataset exploration tools.",
    technologies: ["Python", "FastAPI", "TensorFlow", "React"],
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    projectUrl: "#",
    status: "Beta",
    isPlaceholder: true,
  },
  {
    id: "devportfolio-kit",
    name: "DevPortfolio Kit",
    description:
      "A Next.js starter kit members use to deploy a professional developer portfolio in under 15 minutes. Built at the first IONCODERS Hackathon in March 2024 by a team of four.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "MDX"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    projectUrl: "#",
    status: "Active",
    isPlaceholder: true,
  },
  {
    id: "ion-events",
    name: "ION Events",
    description:
      "An internal event scheduling and RSVP platform that tracks upcoming IONCODERS workshops, talks, hackathons, and meetups. Members get reminders and can RSVP in one click.",
    technologies: ["Vue.js", "Supabase", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    projectUrl: "#",
    status: "In Development",
    isPlaceholder: true,
  },
  {
    id: "ionctl",
    name: "IONCTL",
    description:
      "A developer CLI tool for IONCODERS project scaffolding. Run `ionctl new` to bootstrap a project with community-approved folder structures and config presets for Next.js, FastAPI, and Go.",
    technologies: ["Go", "Cobra CLI", "GitHub API", "Shell"],
    imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    projectUrl: "#",
    status: "Beta",
    isPlaceholder: true,
  },
];
