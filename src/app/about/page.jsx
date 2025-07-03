import React from "react";
import Nav from "../components/Nav";
import Link from "next/link";
import Image from "next/image";
import main from "../image/main.webp";
import StackBar from "../components/StackBar";

const page = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col justify-center lg:p-8">
        <div className="m-3 text-center md:text-start mx-auto text-style">
          <h1 className="text-2xl text-white lg:text-4xl font-extrabold fade-in">
            About Me
          </h1>
        </div>
        <div className="flex justify-center w-full text-center md:text-start">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center md:space-x-2">
            <div className="w-80">
              <img
                src="portfolio_picture.png"
                alt="profile"
                width="320"
                height="320"
                className="rounded-md"
              />
            </div>
            <div className="max-w-80">
              <h2 className="text-base lg:text-lg text-white p-4 bg-slate-700 rounded-md fade-in_2">
                I am a full stack web developer and UI/UX designer with high
                passion in coding and problem solving skill. I'm committed to
                improving user experiences through thoughtful and efficient
                design. I look forward to growing as more creative developer and
                having new project challenges!
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
