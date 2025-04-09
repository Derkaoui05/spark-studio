// Define the allowed tech icons
export type TechIcon = "React" | "Mobile" | "UI/UX"

// Define the project interface
export interface Project {
  id: number
  title: string
  description: string
  image: string
  categories: string[]
  tech: TechIcon[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly E-commerce Platform",
    description:
      "A comprehensive e-commerce solution for a sustainable products brand, featuring a custom checkout process and integration with eco-friendly shipping providers.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["E-commerce", "Web App"],
    tech: ["React", "UI/UX"],
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare Patient Portal",
    description:
      "A secure patient portal allowing users to schedule appointments, view medical records, and communicate with healthcare providers in real-time.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Web App", "UI/UX"],
    tech: ["React", "UI/UX"],
    link: "#",
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations based on user goals.",
    image: "https://images.unsplash.com/photo-1510016177584-b1a012e3a2a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Mobile App", "UI/UX"],
    tech: ["Mobile", "UI/UX"],
    link: "#",
  },
  {
    id: 4,
    title: "Financial Services Rebrand",
    description:
      "Complete brand identity redesign for a financial services company, including logo, website, marketing materials, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Branding", "UI/UX"],
    tech: ["UI/UX"],
    link: "#",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    description:
      "A comprehensive platform connecting property buyers, sellers, and agents with advanced search filters and virtual tour capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Web App", "E-commerce"],
    tech: ["React", "UI/UX"],
    link: "#",
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    description:
      "An integrated ordering system for restaurants featuring online ordering, table reservations, and kitchen management tools.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Web App", "Mobile App"],
    tech: ["React", "Mobile"],
    link: "#",
  },
  {
    id: 7,
    title: "Digital Marketing Campaign",
    description:
      "A comprehensive digital marketing strategy for a product launch, including social media, email campaigns, and content marketing.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Marketing", "Branding"],
    tech: ["UI/UX"],
    link: "#",
  },
  {
    id: 8,
    title: "Educational Learning Platform",
    description:
      "An interactive e-learning platform with course management, progress tracking, and integrated assessment tools.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Web App", "UI/UX"],
    tech: ["React", "UI/UX"],
    link: "#",
  },
  {
    id: 9,
    title: "Travel Companion App",
    description:
      "A mobile application for travelers featuring itinerary planning, local recommendations, and offline maps for international travel.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: ["Mobile App"],
    tech: ["Mobile", "UI/UX"],
    link: "#",
  },
]
