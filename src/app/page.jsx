"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const openPortfolio = () => {
    if (!isPortfolioOpen) {
      setIsPortfolioOpen(true);
    } else {
      setIsPortfolioOpen(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-5">
      <div className="grid grid-rows-2 text-center md:text-start">
        <div className="gridset1">
          <motion.div
            initial="hidden"
            animate={{ rotateY: 360, scale: 1, opacity: 1 }}
            variants={{
              hidden: {
                scale: 0,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <h1 className="text-xl md:text-4xl">Richard Jeong</h1>
          </motion.div>
          <h2 className="text-base md:text-2xl">Full Stack Web Developer</h2>
        </div>
        <div className="gridset1">
          <button onClick={() => openPortfolio()}>
            {/*<h1 className="text-xl md:text-4xl">Projects</h1>*/}
            <h1 className="text-xl md:text-4xl">Portfolio</h1>
          </button>
        </div>
      </div>
    </main>
  );
}
