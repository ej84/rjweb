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
  return (
    <>
      <nav className="flex justify-end">
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
      <main className="flex min-h-screen flex-col justify-center p-5">
        <div className="p-5 text-center">
          <h1 className="text-3xl lg:text-5xl fade-in">
            Hello, I'm Richard.
            <span className="text-lg block lg:text-2xl">
              I Develop and Design Full Stack Website.
            </span>
          </h1>
        </div>
        <div className="px-10 my-10 lg:px-48 flex justify-between text-center">
          <button className="p-3 m-2">
            <a href="/" className="text-xl">
              About Me
            </a>
          </button>
          <button className="p-3 m-2">
            <Link href="https://www.github.com/ej84" className="text-xl">
              Projects
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
