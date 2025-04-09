"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle, Globe, ShieldCheck, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"
import { services, ServiceType } from "@/data/services"

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.5 })

  // Parallax effect for the background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15])

  // Determine which services to display
  const visibleServices = showAll ? services : services.slice(0, 3)

  // Handle load more click
  const handleLoadMore = () => {
    console.log("Current showAll state:", showAll)
    setShowAll(!showAll)
    console.log("New showAll state:", !showAll)
    console.log("Services count:", services.length)
    console.log("Visible services count:", showAll ? services.length : 3)
  }

  return (
    <section ref={containerRef} id="services" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-20 right-[5%] w-72 h-72 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-40 left-[10%] w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
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
            <Badge variant="outline" className="px-4 py-1 border-border/50 bg-background/50 backdrop-blur-sm">
              <Globe className="h-3.5 w-3.5 mr-2 text-cyan-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-500">
                What We Offer
              </span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl"
          >
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Comprehensive Digital
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
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500"
                  />
                )}
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-500">
                Solutions
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Elevate your digital presence with our full-spectrum services designed to help your business thrive in
              today&apos;s competitive landscape.
            </motion.p>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Initial 3 Services */}
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={`initial-${service.title}`} service={service} index={index} />
          ))}

          {/* Additional Services (conditionally rendered) */}
          <AnimatePresence>
            {showAll &&
              services
                .slice(3)
                .map((service, index) => (
                  <ServiceCard
                    key={`additional-${service.title}`}
                    service={service}
                    index={index + 3}
                    isAdditional={true}
                  />
                ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {services.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-violet-500/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "Load More Services"}
                <motion.div
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-violet-500"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500">
            <div className="px-6 py-3 rounded-full bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-cyan-500" />
                <span className="text-foreground">Ready to transform your digital presence?</span>
                <Button
                  variant="ghost"
                  className="ml-2 group bg-gradient-to-r from-violet-500/10 to-cyan-500/10 hover:from-violet-500/20 hover:to-cyan-500/20"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-500">
                    Get in touch
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Extracted ServiceCard component for better organization
function ServiceCard({ service, index, isAdditional = false } : {
  service: ServiceType,
  index: number,
  isAdditional?: boolean,
}) {
  const additionalCardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      variants={isAdditional ? additionalCardVariants : cardVariants}
      initial="hidden"
      animate="show"
      exit={isAdditional ? "exit" : undefined}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group flex flex-col p-6 space-y-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 ${service.hoverBorder} transition-all duration-300 hover:shadow-xl ${service.hoverShadow}`}
    >
      <div className={`p-3 bg-gradient-to-br ${service.lightColor} rounded-xl w-fit`}>
        <div className={`${service.textColor}`}>{service.icon}</div>
      </div>

      <h3 className="text-xl font-bold">{service.title}</h3>

      <p className="text-muted-foreground">{service.description}</p>

      <motion.ul
        className="space-y-3 mt-2"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {service.features.map((feature, i) => (
          <motion.li key={i} variants={featureVariants} className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${service.color}`}>
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
            <span className="text-foreground/80">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="pt-4 mt-auto">
        <Button variant="ghost" className={`group/btn p-0 h-auto ${service.textColor} hover:bg-transparent`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-foreground/60 group-hover/btn:from-violet-500 group-hover/btn:to-cyan-500 transition-all duration-300">
            Learn more
          </span>
          <ArrowRight className="ml-2 h-4 w-4 text-foreground/70 group-hover/btn:text-cyan-500 group-hover/btn:translate-x-1 transition-all duration-300" />
        </Button>
      </div>
    </motion.div>
  )
}
