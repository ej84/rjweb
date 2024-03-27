"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import Link from "next/link";

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
          <h1 className="text-xl md:text-4xl">Richard Jeong</h1>

          <h2 className="text-base md:text-2xl">Full Stack Web Developer</h2>
        </div>
        <div className="gridset1">
          <button
            onClick={() => openPortfolio()}
            className="p-3 outline outline-white rounded-md mouseOn"
          >
            {/*<h1 className="text-xl md:text-4xl">Projects</h1>*/}
            <h1 className="text-xl md:text-4xl">My Projects</h1>
          </button>
        </div>
        {isPortfolioOpen && (
          <motion.div animate={{ translateY: 70.0 }} style={{ y: -35 }}>
            <div className="grid grid-cols-4">
              <div className="outline outline-white rounded-md mouseOn">
                <a href="https://dev.getgeneid.com">
                  <p className="w-full h-full p-5">
                    PHP, javascript, and MySQL Full Stack Web Application for
                    GetGeneID
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
