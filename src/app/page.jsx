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
  const [projectNumber, setProjectNumber] = useState(0);

  // Switches hovering status on/off
  const buttonHovering = () => {
    setIsHovering(!isHovering);
  };

  // Switches portfolio open on/off
  const openPortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
    if (isclicked) {
      setProjectNumber(0);
      setIsClicked(false);
    }
  };

  // Opens a project detail page modal by click
  const openProjectDetail = (number) => {
    setProjectNumber(number);
    setIsClicked(!isclicked);
  };

  // Updates style depending on device dimension
  useEffect(() => {
    // Sets animate style responsively
    const animated = () => {
      if (notLg) {
        setAnimateStyle({
          1: { translateX: -70, translateY: 40.0 },
          2: { translateY: 40.0 },
          3: { translateX: 70, translateY: 40.0 },
        });
        setStyle({
          1: { x: 100, y: -150 },
          2: { x: 55, y: -150 },
          3: { x: 20, y: -150 },
        });
      } else {
        setAnimateStyle({
          1: { translateY: 70.0 },
          2: { translateX: 75, translateY: 70.0 },
          3: { translateX: 100, translateY: 70.0 },
        });
        setStyle({
          1: { x: 20, y: -110 },
          2: { x: 10, y: -110 },
          3: { x: 50, y: -110 },
        });
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
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/ej84/">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
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
              <div
                className={`outline outline-white flex justify-center rounded-md ${
                  isHovering ? "mouseOn" : ""
                } ${isclicked && projectNumber === 1 ? "btnClicked" : ""}`}
              >
                <button
                  onMouseEnter={() => buttonHovering()}
                  onClick={() => openProjectDetail(1)}
                  className="p-5 w-full h-full"
                >
                  Project 1
                </button>
              </div>
            </motion.div>
            <motion.div animate={animateStyle["2"]} style={style["2"]}>
              <div
                className={`outline outline-white flex justify-center rounded-md ${
                  isHovering ? "mouseOn" : ""
                } ${isclicked && projectNumber === 2 ? "btnClicked" : ""}`}
              >
                <button
                  onClick={() => openProjectDetail(2)}
                  className="p-5 w-full h-full"
                >
                  Project 2
                </button>
              </div>
            </motion.div>
            <motion.div animate={animateStyle["3"]} style={style["3"]}>
              <div
                className={`outline outline-white flex justify-center rounded-md ${
                  isHovering ? "mouseOn" : ""
                } ${isclicked && projectNumber === 3 ? "btnClicked" : ""}`}
              >
                <button
                  onClick={() => openProjectDetail(3)}
                  className="p-5 w-full h-full"
                >
                  Project 3
                </button>
              </div>
            </motion.div>
          </div>
        )}
        {isclicked && (
          <div className="justify-center bg-gray-700 inset-1/2 text-center rounded-lg">
            {projectNumber === 1 && (
              <>
                <div className="p-5 m-3 portfolioText">
                  <h1 className="text-xl">
                    GetGeneID Full Stack Website for GeneID Advanced Molecular
                    Diagnostics
                  </h1>
                </div>
                <div className="p-2 m-2">
                  <ul className="space-y-3">
                    <li>
                      - This project is architected & implemented using a
                      PHP/MySQL to provide health-care services web platform,
                      seamlessly centralizing patient, insurance, and health
                      care provider data.
                    </li>
                    <li>
                      - Collaboration & Individual Contribution: Seamlessly
                      coordinated with my team member, balancing works and
                      leveraging individual strengths to enhance performance and
                      user experience.
                    </li>
                    <li>
                      - Facilitated a more efficient and error-free workflow for
                      lab employees and researchers, significantly reducing
                      manual data handling and improving the accuracy of patient
                      records and eligibility assessments.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-5 m-5 portfolioText">
                  <a href="https://dev.getgeneid.com">
                    Link to the project website
                  </a>
                  <span>
                    * Please log in using username "Richard" and password
                    "RiJe@136!"
                  </span>
                </div>
              </>
            )}
            {projectNumber === 2 && (
              <div>
                <a href="https://github.com/ej84/ithelpdesk">
                  Link to Next JS Helpdesk Web App Project
                </a>
              </div>
            )}
            {projectNumber === 3 && (
              <div>
                <a href="https://github.com/ej84/">
                  Link to Next JS AI Image Generator Web App Project
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
