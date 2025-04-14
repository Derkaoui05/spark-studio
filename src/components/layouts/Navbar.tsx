"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Home, LayoutGrid, MessageSquareQuote, Zap, Award } from "lucide-react";
import ToggleButton from "../ui/toggle";

const inter = Inter({ subsets: ["latin"], weight: "500" });

function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const tabs = [
    { name: "Home", url: "#", icon: <Home /> },
    { name: "Who we are", url: "#about", icon: <Award /> },
    { name: "Services", url: "#services", icon: <Zap /> },
    { name: "Projects", url: "#projects", icon: <LayoutGrid /> },
    { name: "Testimonials", url: "#", icon: <MessageSquareQuote /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLeftPosition = (tabName: string) => {
    if (isMobile) {
      switch (tabName) {
        case "Home":
          return "calc(0% + 16px)";
        case "Who we are":
          return "calc(23% + 2px)";
        case "Projects":
          return "calc(22% + 2px)";
        case "Testimonials":
          return "calc(22% + 2px)";
      }
    } else {
      switch (tabName) {
        case "Home":
          return "calc(0% + 44px)";
        case "Who we are":
          return "calc(30% + 2px)";
        case "Projects":
          return "calc(32% + 2px)";
        case "Testimonials":
          return "calc(32% + 2px)";
      }
    }
  };

  return (
    <div className="fixed bottom-0 sm:top-0 left-1/2 transform -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none">
      <div
        className={`${inter.className} flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg dark:shadow-gray-800`}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.url}
            onClick={() => setActiveTab(tab.name)}
            className={`relative cursor-pointer pointer-events-auto whitespace-nowrap text-sm text-black dark:text-white px-6 py-2 rounded-full ${
              activeTab === tab.name ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor:
                activeTab === tab.name
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
            }}
          >
            <span className="hidden md:inline">{tab.name}</span>
            <span className="md:hidden">{tab.icon}</span>
            {activeTab === tab.name && (
              <motion.div
                layoutId="lamp"
                className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-8 h-1 bg-blue-500 dark:bg-blue-300 rounded-t-md"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ left: getLeftPosition(tab.name) }}
              >
                {/* Lamp elements */}
                <motion.div className="absolute w-10 h-12 bg-blue-500 dark:bg-blue-300 rounded-full blur shadow-lg opacity-10 -top-3" />
                <motion.div className="absolute w-12 h-12 bg-blue-500 dark:bg-blue-300 rounded-full blur shadow-lg opacity-20 -top-3 -left-1" />
                <motion.div className="absolute w-8 h-8 bg-blue-500 dark:bg-blue-300 rounded-full blur shadow-lg opacity-10 -top-2" />
                <motion.div className="absolute w-6 h-6 bg-blue-500 dark:bg-blue-300 rounded-full blur shadow-lg opacity-10 -top-1" />
              </motion.div>
            )}
          </Link>
        ))}
        <span className="ml-auto pointer-events-auto">
          <ToggleButton />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
