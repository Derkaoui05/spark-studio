import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[1000px] w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+1000px)] -top-[100vh]">
        <div className="h-[1000px] sticky top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-primary-foreground py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-shrink-0 justify-center gap-12 mb-16">
      <div className="max-w-md text-center">
        <h4 className="text-3xl font-semibold mb-4">
          Ready to grow your brand?
        </h4>
        <p className="text-lg mb-6">
          Let's work together and build something amazing for your business.
        </p>
        <button className="mt-4 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Get in Touch
        </button>
      </div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
      <h1 className="text-[10vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white via-gray-600 dark:via-gray-300 to-black dark:to-white">
        Spark Studio
      </h1>
      <div className="flex flex-col items-end gap-2 text-sm">
        <div className="flex gap-4 text-lg">
          <a href="#" aria-label="Instagram">
            📸
          </a>
          <a href="#" aria-label="LinkedIn">
            💼
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
        </div>
        <p className="text-xs text-[#ffffff80]">
          © {new Date().getFullYear()} Spark Studio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Nav = () => {
  const navs = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Branding", url: "#" },
        { name: "SEO & SEM", url: "#" },
        { name: "Social Media", url: "#" },
        { name: "Web Design", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", url: "#" },
        { name: "Testimonials", url: "#" },
        { name: "Guides", url: "#" },
        { name: "News & Insights", url: "#" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {navs.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 min-w-[180px] text-center"
        >
          <h3 className="mb-2 text-lg font-semibold uppercase text-primary">
            {section.title}
          </h3>
          {section.links.map((link, i) => (
            <p key={i} className="text-sm hover:underline cursor-pointer">
              {link.name}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
