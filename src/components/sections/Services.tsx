"use client"
import { ArrowRight, BarChart, CheckCircle, Code } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Blurred circles */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-fuchsia-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl"></div>

      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm">
            <span className="text-muted-foreground">What We Offer</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Our Services
            </h2>
            <p className="max-w-[700px] text-zinc-400 md:text-xl">
              Comprehensive digital solutions to help your business thrive
              online
            </p>
          </div>
        </div>

        {/* Service Cards with animation */}
        <motion.div
          className="grid gap-8 mt-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 - Web Development */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col p-6 space-y-4 bg-primary/60 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-fuchsia-500/50 transition-all duration-75 hover:shadow-lg hover:shadow-fuchsia-500/10"
          >
            <div className="p-2 bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/5 rounded-xl w-fit">
              <Code className="h-6 w-6 text-fuchsia-500" />
            </div>
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-muted/70 dark:text-muted-foreground">
              Custom websites and web applications built with the latest
              technologies to deliver exceptional user experiences.
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fuchsia-500" />
                <span className="text-zinc-300">Responsive Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fuchsia-500" />
                <span className="text-zinc-300">E-commerce Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fuchsia-500" />
                <span className="text-zinc-300">CMS Integration</span>
              </li>
            </ul>
            <div className="pt-4 mt-auto">
              <Button
                variant="link"
                className="text-fuchsia-400 hover:text-fuchsia-300 p-0 h-auto font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Card 2 - Digital Marketing */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col p-6 space-y-4 bg-primary/60 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-75 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-xl w-fit">
              <BarChart className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold">Digital Marketing</h3>
            <p className="text-muted/70 dark:text-muted-foreground">
              Strategic marketing campaigns that drive traffic, generate leads,
              and increase conversions.
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-500" />
                <span className="text-zinc-300">SEO Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-500" />
                <span className="text-zinc-300">Social Media Marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-500" />
                <span className="text-zinc-300">PPC Advertising</span>
              </li>
            </ul>
            <div className="pt-4 mt-auto">
              <Button
                variant="link"
                className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
