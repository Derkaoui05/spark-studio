import { Code, BarChart, Globe, Lightbulb, Zap, Smartphone } from "lucide-react";
export type ServiceType = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
  textColor: string;
  hoverBorder: string;
  hoverShadow: string;
  features: string[];
}

export const services: ServiceType[] = [
  {
    title: "Web Development",
    description: "Crafting pixel-perfect websites and web applications that drive results.",
    icon: <Code className="h-6 w-6" />,
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration"],
    color: "from-cyan-500 to-blue-500",
    lightColor: "from-cyan-500/20 to-blue-500/20",
    textColor: "text-blue-500",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to amplify your brand's reach and engagement.",
    icon: <BarChart className="h-6 w-6" />,
    features: ["SEO Optimization", "Social Media Marketing", "Content Creation"],
    color: "from-fuchsia-500 to-violet-500",
    lightColor: "from-fuchsia-500/20 to-violet-500/20",
    textColor: "text-violet-500",
    hoverBorder: "hover:border-violet-500/50",
    hoverShadow: "hover:shadow-violet-500/10",
  },
  {
    title: "Mobile App Development",
    description: "Building innovative mobile applications for iOS and Android platforms.",
    icon: <Smartphone className="h-6 w-6" />,
    features: ["Native App Development", "Cross-Platform Apps", "UI/UX Design"],
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-500/20 to-teal-500/20",
    textColor: "text-teal-500",
    hoverBorder: "hover:border-teal-500/50",
    hoverShadow: "hover:shadow-teal-500/10",
  },
  {
    title: "Graphic Design",
    description: "Creating visually stunning designs that capture your brand's essence.",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["Logo Design", "Brand Identity", "Marketing Materials"],
    color: "from-orange-500 to-yellow-500",
    lightColor: "from-orange-500/20 to-yellow-500/20",
    textColor: "text-yellow-500",
    hoverBorder: "hover:border-yellow-500/50",
    hoverShadow: "hover:shadow-yellow-500/10",
  },
  {
    title: "AI Solutions",
    description: "Implementing AI solutions to automate tasks and improve efficiency.",
    icon: <Zap className="h-6 w-6" />,
    features: ["Machine Learning", "Data Analysis", "Automation"],
    color: "from-red-500 to-pink-500",
    lightColor: "from-red-500/20 to-pink-500/20",
    textColor: "text-pink-500",
    hoverBorder: "hover:border-pink-500/50",
    hoverShadow: "hover:shadow-pink-500/10",
  },
  {
    title: "Global Solutions",
    description: "Providing solutions for global expansion.",
    icon: <Globe className="h-6 w-6" />,
    features: ["Worldwide Support", "Global Marketing", "International SEO"],
    color: "from-lime-500 to-green-500",
    lightColor: "from-lime-500/20 to-green-500/20",
    textColor: "text-green-500",
    hoverBorder: "hover:border-green-500/50",
    hoverShadow: "hover:shadow-green-500/10",
  },
]

