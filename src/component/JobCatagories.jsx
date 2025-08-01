import JobCatagoriesDiv from "./JobCatagoriesDiv";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AnimatedCard({ idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: idx * 0.03 }}
      className="relative z-0"
    >
      <h1 className="text-center text-5xl font-bold">
        Browse <span className="text-yellow-500">Job</span> Category
      </h1>
      <p className="text-center leading-relaxed text-lg opacity-60 pt-2 ">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </p>
    </motion.div>
  );
}

function JobCatagories() {
  return (
    <div>
      {/* Animate heading */}
      <AnimatedCard idx={0} />
      {/* Your categories list component */}
      <JobCatagoriesDiv />
    </div>
  );
}

export default JobCatagories;
