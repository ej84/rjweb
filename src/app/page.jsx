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
      <main className="flex min-h-screen flex-col justify-center lg:p-14">
        <div className="p-5 mb-2 text-center">
          <h1 className="text-3xl lg:text-4xl fade-in">Hello, I'm Richard.</h1>
        </div>
        <div className="flex justify-center p-3">
          <Image src={main} alt="main" width="300" height="300" />
        </div>
        <div className="p-5 mt-2 text-center">
          <h2 className="text-lg lg:text-2xl">
            Full Stack Web Developer and Designer.
          </h2>
        </div>
        <div className="px-10 my-10 lg:px-48 lg:my-8 flex justify-between text-center">
          <button className="p-3 m-2">
            <a href="/" className="text-2xl">
              About Me
            </a>
          </button>
          <div className="hidden lg:flex lg:space-x-4">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <button className="p-3 m-2">
            <Link href="https://www.github.com/ej84" className="text-2xl">
              Projects
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
