"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import main from "./image/main.webp";
import html from "./image/html.png";
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
      <main className="flex justify-center lg:p-14 text-white h-screen">
        <div className="p-5 m-3 text-center lg:top-20 space-y-5">
          <div className="mx-28 bg-slate-700 rounded-md ">
            <h1 className="text-3xl lg:text-4xl font-extrabold fade-in">
              My name is Richard.
            </h1>
          </div>
          {/*</div>
        <div className="p-3 m-2 text-center">*/}
          <h2 className="text-lg font-bold lg:text-4xl fade-in_2 p-1 bg-slate-700 rounded-md">
            I'm a <span>Full Stack Web Developer.</span>
          </h2>
          <div className="p-5">
            <Link
              href="/about"
              className="flex items-center justify-center w-20 h-24 pop"
            >
              <Image src={html} alt="about_me_btn" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
