"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import main from "./image/main.webp";
import html from "./image/html.png";
import css from "./image/css.png";
import python from "./image/python.png";
import react from "./image/react.png";
import php from "./image/php.png";
import javascript from "./image/javascript.png";
import Nav from "./components/Nav";
import StackBar from "./components/StackBar";

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
      <main className="flex justify-center lg:p-14 text-white">
        <div className="p-5 m-3 text-center lg:top-20 space-y-5 md:space-y-10">
          <div className="mx-5 bg-slate-700 rounded-md fade-in">
            <h1 className="p-3 text-2xl lg:text-3xl font-extrabold">
              I'm Richard Jeong.
            </h1>
          </div>
          <h2 className="text-xl font-bold lg:text-3xl fade-in_2 p-1 bg-slate-700 rounded-md">
            I'm a <span>Full Stack Web Developer.</span>
          </h2>
          <div className="mx-auto md:p-5">
            <StackBar />
          </div>
        </div>
      </main>
    </>
  );
}
