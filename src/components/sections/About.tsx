"use client"

import type React from "react"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, BarChart, Globe, Compass, Layers, Zap, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelinePathRef = useRef<SVGPathElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.5 })
  const [pathLength, setPathLength] = useState(0)
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [timelineItemsInView, setTimelineItemsInView] = useState<boolean[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 10])

  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })

  const pathOffset = useTransform(timelineScrollProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    if (timelinePathRef.current) {
      const length = timelinePathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

  useEffect(() => {
    setTimelineItemsInView(Array(timeline.length).fill(false))
    timelineItemRefs.current = Array(timeline.length).fill(null)
  }, [])

  const handleTimelineItemInView = useCallback((index: number, inView: boolean) => {
    setTimelineItemsInView((prev) => {
      const newState = [...prev]
      newState[index] = inView
      return newState
    })
  }, [])

  const setTimelineItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
    timelineItemRefs.current[index] = el
  }, [])

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, high-performance websites and web applications with modern frameworks.",
      icon: <Code className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
      delay: 0.1,
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions that increase visibility and convert visitors into loyal customers.",
      icon: <BarChart className="h-6 w-6" />,
      color: "from-fuchsia-500 to-purple-600",
      delay: 0.2,
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that provide seamless experiences across all devices.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      delay: 0.3,
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a small team of passionate developers and designers.",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded our services to international clients across 20+ countries.",
    },
    {
      year: "2020",
      title: "Innovation Hub",
      description: "Launched our innovation lab focusing on emerging technologies.",
    },
    {
      year: "Today",
      title: "Industry Leaders",
      description: "Recognized as industry leaders with over 500 successful projects.",
    },
  ]

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-40 left-[5%] w-72 h-72 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3, rotate: rotate3 }}
          className="absolute top-1/2 left-[60%] w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="px-4 py-1 backdrop-blur-sm border-border/50">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-fuchsia-500" />
              <span className="text-muted-foreground">Who We Are</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 max-w-3xl"
          >
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                  Your partners
                </span>
                {isInView && (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                )}
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
                for digital success
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We&apos;re a team of expert designers, web developers and marketers who&apos;ve been delivering digital success for
              more than a decade. We excel at marketing websites, innovative web apps and mobile applications.
            </motion.p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`service-card group relative overflow-hidden`}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg overflow-hidden" />

                <div className="p-6 flex flex-col h-full">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 w-fit`}>
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="mt-auto">
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground group-hover/btn:from-cyan-500 group-hover/btn:to-blue-500 transition-all duration-300">
                        Learn more
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 text-foreground group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-all duration-300" />
                    </Button>
                  </div>

                  <div
                    className={`absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mb-24" ref={timelineRef}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-1.5 mb-4"
            >
              <Layers className="h-4 w-4 mr-2 text-cyan-500" />
              <span className="text-sm text-muted-foreground">Our Journey</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              A decade of digital excellence
            </motion.h3>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border/30 rounded-full" />

            <div className="absolute left-1/2 transform -translate-x-1/2 h-full overflow-hidden">
              <motion.div
                className="w-px h-full bg-primary rounded-full"
                style={{
                  scaleY: timelineScrollProgress,
                  originY: 0,
                }}
              />
            </div>

            <div className="space-y-32 md:space-y-24 py-4">
              {timeline.map((item, index) => {
                return (
                  <div key={index} ref={(el) => setTimelineItemRef(el, index)} className="relative">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={timelineItemsInView[index] ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-background z-10 flex items-center justify-center shadow-lg"
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </motion.div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={
                          timelineItemsInView[index]
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0"
                      >
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-background to-background/80 border border-border/50 backdrop-blur-sm shadow-lg">
                          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                            {item.year}
                          </span>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        animate={
                          timelineItemsInView[index]
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
                        }
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                      >
                        <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                          <div className="p-6">
                            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                    <TimelineItemObserver index={index} onItemInView={handleTimelineItemInView} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "500+", label: "Projects Completed", icon: <Zap className="h-5 w-5 text-cyan-500" /> },
            { value: "50+", label: "Team Members", icon: <Compass className="h-5 w-5 text-fuchsia-500" /> },
            { value: "20+", label: "Countries Served", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
            { value: "10+", label: "Years Experience", icon: <Layers className="h-5 w-5 text-blue-500" /> },
          ].map((stat, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="p-6 relative">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-lg bg-background/80 border border-border/50 mr-3">{stat.icon}</div>
                </div>
                <h4 className="text-3xl font-bold mb-1">{stat.value}</h4>
                <p className="text-sm text-muted-foreground">{stat.label}</p>

                {/* Decorative corner */}
                <div className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl" />
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface TimelineItemObserverProps {
  index: number
  onItemInView: (index: number, inView: boolean) => void
}

const TimelineItemObserver: React.FC<TimelineItemObserverProps> = ({ index, onItemInView }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      onItemInView(index, true)
    }
  }, [isInView, index, onItemInView])

  return <div ref={ref} className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0" />
}
