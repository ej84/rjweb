"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
        <div className="w-full">
          <div className="p-8 md:float-left">
            <h1 className="text-xl md:text-4xl">Richard Jeong</h1>
            <h2 className="text-base md:text-2xl mt-5">
              Full Stack Web Developer
            </h2>
          </div>
          <div className="p-8 md:float-right">
            <div className="p-4 bg-black rounded-lg">
              <ul className="text-center max-[640px]:flex max-[640px]:justify-center max-[640px]:text-xs max-[640px]:space-x-3 md:space-y-3">
                <li>
                  <Link href="https://www.linkedin.com/in/rjeong397/">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.github.com/ej84">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-8">
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
                  <p className="w-full h-full p-5">Project 1</p>
                </a>
              </div>
            </motion.div>
            <motion.div
              animate={{ translateX: 50, translateY: 70 }}
              style={{ y: -35 }}
            >
              <div className="outline outline-white rounded-md mouseOn">
                <a href="https://dev.getgeneid.com">
                  <p className="w-full h-full p-5">Project 2</p>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
