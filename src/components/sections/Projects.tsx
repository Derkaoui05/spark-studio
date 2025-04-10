"use client";

import { useState, useRef, JSX } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code,
  Layers,
  Smartphone,
  Sparkles,
  Filter,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/project";
import type { Project, TechIcon } from "@/data/project";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Get all unique categories from projects
const allCategories: string[] = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.categories))),
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });

  // Parallax effect for the background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  // Filter projects based on active category
  const filteredProjects: Project[] =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  // Tech icon mapping
  const techIcons: Record<TechIcon, JSX.Element> = {
    React: <Code className="h-4 w-4 text-blue-500" />,
    Mobile: <Smartphone className="h-4 w-4 text-violet-500" />,
    "UI/UX": <Layers className="h-4 w-4 text-amber-500" />,
  };

  // Category color mapping
  const categoryColors: Record<string, string> = {
    "Web App": "from-blue-500/80 to-indigo-500/80",
    "Mobile App": "from-violet-500/80 to-purple-500/80",
    "E-commerce": "from-emerald-500/80 to-teal-500/80",
    Branding: "from-amber-500/80 to-yellow-500/80",
    Marketing: "from-rose-500/80 to-pink-500/80",
    "UI/UX": "from-cyan-500/80 to-sky-500/80",
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-20 right-[5%] w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-40 left-[10%] w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="px-4 py-1 border-border/50 bg-background/50 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2 text-teal-500" />
              <span className="text-muted-foreground">Our Projects</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl"
          >
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight"
            >
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Featured
                </span>
                {isInView && (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"
                  />
                )}
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
                Projects
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our portfolio of successful projects that showcase our
              expertise and creative solutions across various industries.
            </motion.p>
          </motion.div>
        </div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-1 px-2 py-1 bg-background/80 rounded-full">
              <div className="flex items-center mr-1 text-muted-foreground">
                <Filter className="h-3.5 w-3.5 mr-1" />
                <span className="text-xs font-medium">Filter:</span>
              </div>

              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-3 py-1 h-auto text-xs font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      : "hover:bg-emerald-500/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  {activeFilter === category && category !== "All" && (
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFilter("All");
                      }}
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative flex flex-col overflow-hidden rounded-xl"
              >
                <Card className="flex flex-col h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/30">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-in-out"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                    />

                    {/* Project categories */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
                      {project.categories.map((category, catIndex) => {
                        const colorClass =
                          categoryColors[category] ||
                          "from-gray-500/80 to-slate-500/80";

                        return (
                          <span
                            key={catIndex}
                            className={`text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${colorClass} text-white backdrop-blur-sm`}
                          >
                            {category}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <CardContent className="flex flex-col flex-grow p-5">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="ml-2 flex-shrink-0">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {project.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="flex-shrink-0">
                            {techIcons[tech]}
                          </div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-emerald-600 hover:text-emerald-700 hover:bg-transparent"
                        >
                          <span className="text-sm font-medium">
                            View project
                          </span>
                          <ExternalLink className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:-inset-1" />
            <Button
              variant="outline"
              size="lg"
              className="relative bg-background/80 backdrop-blur-sm border-border/50 hover:border-emerald-500/50 transition-all duration-300"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                View all projects
              </span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
