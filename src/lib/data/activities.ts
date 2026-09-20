import { Activity } from "@/lib/types";

export const activities: Activity[] = [
  {
    id: "saturday-workshops",
    index: "01",
    title: "Saturday Workshops",
    description:
      "Weekly hands-on sessions every Saturday morning. Topics rotate across web development, backend engineering, AI, and cybersecurity.",
    detail:
      "Past topics: REST API design with Node.js, building full-stack apps with Next.js & Supabase, intro to machine learning with Python, Docker for developers.",
  },
  {
    id: "code-review-sessions",
    index: "02",
    title: "Code Review Sessions",
    description:
      "Members submit pull requests to a shared IONCODERS GitHub organisation for peer review, feedback, and collaborative improvement.",
    detail:
      "Held bi-weekly. Reviewers are matched by language/framework expertise. Great for learning code quality, best practices, and communication.",
  },
  {
    id: "ion-hackathon",
    index: "03",
    title: "ION Hackathon",
    description:
      "Our annual 48-hour build competition. Teams of 3–5 members design and ship a working product from scratch under one unified theme.",
    detail:
      "First edition: March 2024. 8 teams, 5 finalists. 2nd edition planned for Q1 2025. Past theme: \"Tech for Everyday Kenyan Problems\".",
  },
  {
    id: "tech-talk-thursdays",
    index: "04",
    title: "Tech Talk Thursdays",
    description:
      "Bi-weekly open-stage talks where a community member presents on any technology topic — 20 minutes + Q&A. Anyone can apply to speak.",
    detail:
      "Past talks: \"How DNS works under the hood\", \"Intro to WebSockets\", \"My journey from Excel to software engineering\", \"Securing REST APIs\".",
  },
  {
    id: "monthly-build-challenges",
    index: "05",
    title: "Monthly Build Challenges",
    description:
      "Each month, a specific challenge is announced: build a CLI tool, a REST API, a UI component library, or a browser extension.",
    detail:
      "Submissions are reviewed publicly and winners share their approach. The goal is consistency — shipping something every month no matter how small.",
  },
  {
    id: "community-meetups",
    index: "06",
    title: "Community Meetups",
    description:
      "Quarterly in-person gatherings in Nairobi for networking, project demos, lightning talks, and community planning.",
    detail:
      "We've hosted 4 meetups since Sept 2023. Venues have included co-working spaces, university labs, and local tech hubs.",
  },
];
