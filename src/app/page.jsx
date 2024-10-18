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
import Image from "next/image";
import Link from "next/link";
import main from "./image/main.png";
import Nav from "./components/Nav";
import IconCarousel from "./components/IconCarousel";

export default function Home() {
  return (
    <>
      <Image
        src={main}
        alt="background-image"
        fill
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
      />
      <Nav />
      <main className="flex flex-col justify-center lg:p-14 text-white">
        <div className="p-4 m-3 text-center relative lg:top-20 space-y-5">
          <h1 className="text-3xl lg:text-5xl font-extrabold fade-in">
            Hello! My name is Richard.
          </h1>
          {/*</div>
        <div className="p-3 m-2 text-center">*/}
          <h2 className="text-lg font-bold lg:text-4xl fade-in_2">
            I'm a <span>Full Stack Web Developer.</span>
          </h2>
        </div>
        {/*<div className="px-10 lg:px-48 lg:my-5 flex justify-between text-center">
          <button className="p-3 m-2 outline outline-emerald-500 rounded-lg relative bg-lime-500 to-right">
            <a href="/about" className="text-2xl">
              About Me
            </a>
          </button>

          <button className="p-3 m-2 outline outline-fuchsia-800 rounded-lg relative bg-indigo-700 to-left">
            <a href="/projects" className="text-2xl">
              Projects
            </a>
          </button>
        </div>*/}
      </main>
    </>
  );
}
