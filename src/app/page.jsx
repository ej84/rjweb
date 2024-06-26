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

export default function Home() {
  return (
    <>
      <nav className="flex justify-end p-2">
        <Link href="https://www.github.com/ej84" className="pr-5 my-5">
          Resume
        </Link>
        <Link href="https://www.github.com/ej84" className="pr-5 my-5">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/rjeong397/"
          className="pr-5 my-5"
        >
          LinkedIn
        </Link>
      </nav>
      <main className="flex flex-col justify-center lg:p-14">
        <div className="p-4 m-3 text-center md:text-start">
          <h1 className="text-3xl lg:text-5xl font-extrabold fade-in">
            Hello World, My name is Richard.
          </h1>
        </div>
        {/*
        <div className="flex justify-center p-3">
          <Image src={main} alt="main" width="300" height="300" />
  </div>*/}
        <div className="p-3 m-2 text-center md:text-start">
          <h2 className="text-lg font-bold lg:text-2xl fade-in_2">
            I am a Full Stack Web Developer{" "}
            <span className="lg:text-orange-500">and Designer.</span>
          </h2>
        </div>
        <div className="px-10 lg:px-48 lg:my-5 flex justify-between text-center">
          <button className="p-3 m-2 outline outline-emerald-500 rounded-lg relative bg-lime-500 to-right">
            <a href="/" className="text-2xl">
              About Me
            </a>
          </button>

          <button className="p-3 m-2 outline outline-fuchsia-800 rounded-lg relative bg-indigo-700 to-left">
            <Link href="https://www.github.com/ej84" className="text-2xl">
              Projects
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
