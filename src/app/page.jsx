"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { motion, spring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import main from "./image/main.png";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Image
        src={main}
        alt="background-image"
        fill
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover"
      />
      <Nav />
      <main className="flex flex-col justify-center lg:p-14 text-white">
        <div className="p-4 m-3 text-center lg:top-20 space-y-5">
          <h1 className="text-3xl lg:text-4xl font-extrabold fade-in">
            Hello! My name is Richard.
          </h1>
          {/*</div>
        <div className="p-3 m-2 text-center">*/}

          <h2 className="text-lg font-bold lg:text-4xl fade-in_2">
            I'm a <span>Full Stack Web Developer.</span>
          </h2>
        </div>
      </main>
    </>
  );
}
