"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden p-14 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-5xl text-transparent bg-gradient-to-r from-primary via-sky-300 to-blue-500">
              Digital Innovation Studio
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with stunning, results-driven websites that
            convert visitors into customers. Our expert team brings your vision
            to life with custom designs tailored to your brand.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 hover:text-sky-700 duration-500 transition-all ease-in text-foreground"
            >
              Start Your Project <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <Image
              src="/creative.png"
              alt="Flowers & Saints design concept"
              width={600}
              height={600}
              className="w-[500px] rounded-2xl hidden dark:block shadow-xl ring-1 ring-gray-900/10"
            />
            <Image
              src="/light.png"
              alt="Flowers & Saints design concept"
              width={600}
              height={600}
              className="w-[500px] rounded-2xl block dark:hidden shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
