"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isclicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const buttonHovering = () => {
    setIsHovering(!isHovering);
  };

  const openPortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
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
            onMouseEnter={() => buttonHovering()}
            onClick={() => openPortfolio()}
            className={`p-3 outline outline-white rounded-md
            ${isHovering ? "mouseOn" : ""} ${
              isPortfolioOpen ? "btnClicked" : ""
            }`}
          >
            {/*<h1 className="text-xl md:text-4xl">Projects</h1>*/}
            <h1 className="text-xl md:text-4xl w-full h-full">My Projects</h1>
          </button>
        </div>
        {isPortfolioOpen && (
          <div className="grid grid-cols-4">
            <motion.div animate={{ translateY: 70.0 }} style={{ y: -35 }}>
              <div className="outline outline-white rounded-md mouseOn">
                <a href="https://dev.getgeneid.com">
                  <p className="w-full h-full p-5">
                    PHP, javascript, and MySQL Full Stack Web Application for
                    GetGeneID
                  </p>
                </a>
              </div>
            </motion.div>
            <motion.div
              animate={{ translateX: 50, translateY: 70 }}
              style={{ y: -35 }}
            >
              <div className="outline outline-white rounded-md mouseOn">
                <a href="https://dev.getgeneid.com">
                  <p className="w-full h-full p-5">
                    React JS AI Image Generator Integrated Web Application
                  </p>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
