"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import main from "./image/main.webp";
import Nav from "./components/Nav";
import StackBar from "./components/StackBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex justify-center ">
        <div className="m-3 text-style text-center lg:top-20 space-y-5">
          <div className="mx-5 rounded-md fade-in">
            <h1 className="p-3 text-2xl lg:text-3xl font-extrabold">
              I'm Richard Jeong,
            </h1>
          </div>
          <h2 className="text-xl font-bold lg:text-3xl fade-in_2 p-1 bg-slate-700 rounded-md">
            A <span>Full Stack Web Developer.</span>
          </h2>
          <div className="p-1">
            <StackBar />
          </div>
        </div>
      </main>
    </>
  );
}
