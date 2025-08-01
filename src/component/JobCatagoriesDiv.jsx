import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";

const categories = [
  { title: "IT", jobs: "1200+", description: "Tech & Software Jobs" },
  { title: "Finance", jobs: "850+", description: "Banking & Accounting" },
  { title: "Marketing", jobs: "730+", description: "Sales & SEO Roles" },
  { title: "Sales", jobs: "900+", description: "B2B & B2C Sales Jobs" },
  { title: "Design", jobs: "410+", description: "UI/UX & Graphic Design" },
  { title: "Engineering", jobs: "650+", description: "Mechanical, Civil etc." },
  { title: "HR", jobs: "300+", description: "Recruitment & HR Ops" },
  { title: "Healthcare", jobs: "980+", description: "Doctors & Nurses" },
  { title: "Education", jobs: "460+", description: "Teachers & Trainers" },
  { title: "Legal", jobs: "210+", description: "Law & Corporate Roles" },
  { title: "Real Estate", jobs: "400+", description: "Agents & Managers" },
  { title: "Logistics", jobs: "620+", description: "Supply Chain Jobs" },
  { title: "Support", jobs: "300+", description: "Customer Service" },
  { title: "Remote", jobs: "1500+", description: "Work from Home" },
];

function AnimatedCard({ cat, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6, // 60% visibility required
    triggerOnce: false, // Animate every time
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: idx * 0.03 }}
      className="relative z-0"
    >
      <div
        className="min-w-[200px] min-h-[200px] w-[200px] h-[200px] bg-inherit border-2 border-yellow-500 rounded-full shadow-lg flex flex-col justify-center items-center text-center px-4 py-4 text-white transition-transform duration-300 transform-gpu hover:scale-[1.05]"
      >
        <h2 className="text-xl font-semibold mb-1">{cat.title}</h2>
        <p className="text-sm opacity-80">{cat.description}</p>
        <span className="text-xs mt-2 px-3 py-1 bg-yellow-500 text-black rounded-full">
          {cat.jobs} Jobs
        </span>
      </div>
    </motion.div>
  );
}

function JobCategories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmt = 250;
    container.scrollBy({ left: dir === "left" ? -scrollAmt : scrollAmt, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-inherit py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] animate-pulse -z-10"></div>

      <div className="flex justify-center gap-8 px-6 mb-6">
        <button
          className="bg-yellow-500 text-black p-3 rounded-full shadow-md hover:scale-110 transition"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="bg-yellow-500 text-black p-3 rounded-full shadow-md hover:scale-110 transition"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-12 scroll-smooth"
      >
        {categories.map((cat, idx) => (
          <AnimatedCard key={idx} cat={cat} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export default JobCategories;
