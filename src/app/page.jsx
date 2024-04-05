"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { motion, spring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isclicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const notLg = useMediaQuery("(max-width:767px)");
  const [animateStyle, setAnimateStyle] = useState({});
  const [style, setStyle] = useState({});

  // Switches hovering status on/off
  const buttonHovering = () => {
    setIsHovering(!isHovering);
  };

  // Switches portfolio open on/off
  const openPortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  // Updates style depending on device dimension
  useEffect(() => {
    // Sets animate style responsively
    const animated = () => {
      if (notLg) {
        setAnimateStyle({
          1: { translateX: -70, translateY: 40.0 },
          2: { translateY: 40.0 },
        });
        setStyle({ 1: { x: 100, y: -150 }, 2: { x: 55, y: -150 } });
      } else {
        setAnimateStyle({
          1: { translateY: 70.0 },
          2: { translateX: 75, translateY: 70.0 },
        });
        setStyle({ 1: { x: 20, y: -110 }, 2: { y: -110 } });
      }
    };
    animated();
  }, [notLg]);

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
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="3x"
                      className="hover:bg-white hover:text-blue-700"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.github.com/ej84">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="hover:bg-white hover:text-black"
                    />
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
            <h1 className="text-xl md:text-4xl w-full h-full">My Projects</h1>
          </button>
        </div>
        {isPortfolioOpen && (
          <div className="grid grid-cols-4">
            <motion.div animate={animateStyle["1"]} style={style["1"]}>
              <div className="outline outline-white flex justify-center rounded-md mouseOn">
                <button
                  onClick={() => setIsClicked(true)}
                  className="p-5 w-full h-full"
                >
                  Project 1
                </button>
              </div>
            </motion.div>
            <motion.div animate={animateStyle["2"]} style={style["2"]}>
              <div className="outline outline-white flex justify-center rounded-md mouseOn max-[640px]:text-center">
                <a
                  href="https://github.com/ej84/ithelpdesk"
                  className="w-full h-full"
                >
                  <p className="p-5">Project 2</p>
                </a>
              </div>
            </motion.div>
          </div>
        )}
        {isclicked && (
          <div
            className="flex justify-center p-20 m-20 bg-gray-300"
            onClick={() => setIsClicked(false)}
          >
            <a href="https://dev.getgeneid.com" className="w-full h-full">
              project
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
