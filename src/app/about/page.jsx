import React from "react";
import Nav from "../components/Nav";
import Link from "next/link";
import Image from "next/image";
import main from "../image/main.webp";
import StackBar from "../components/StackBar";

const page = () => {
  return (
    <>
      <Image
        src={main}
        alt="background-image"
        fill
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover"
      />
      <Nav />
      <main className="flex flex-col justify-center lg:p-8">
        <div className="p-4 m-3 text-center md:text-start mx-auto bg-slate-700 rounded-md">
          <h1 className="text-2xl text-white lg:text-4xl font-extrabold fade-in">
            About Me
          </h1>
        </div>
        {/*<div className="p-5 text-center md:text-start">
          <div className="float-left w-1/2 relative lg:left-32 xl:left-44">
            <h2 className="text-base lg:text-lg text-white p-4 bg-slate-700 rounded-md fade-in_2">
              I am a full stack web developer and UI/UX designer with high
              passion in coding and problem solving skill. I'm committed to
              improving user experiences through thoughtful and efficient
              design. I look forward to growing as more creative developer and
              having new project challenges!
            </h2>
          </div>
          <div className="float-right w-1/2 relative lg:pl-48">
            <img
              src="portfolio_picture.jpg"
              alt="profile"
              width="320"
              height="320"
            />
          </div>
        </div>*/}
        <div className="flex justify-center w-full text-center md:text-start">
          <div className="grid grid-cols-2 justify-center items-center text-center space-x-3">
            <div className="max-w-80">
              <h2 className="text-base lg:text-lg text-white p-4 bg-slate-700 rounded-md fade-in_2">
                I am a full stack web developer and UI/UX designer with high
                passion in coding and problem solving skill. I'm committed to
                improving user experiences through thoughtful and efficient
                design. I look forward to growing as more creative developer and
                having new project challenges!
              </h2>
            </div>
            <div className="w-80">
              <img
                src="portfolio_picture.jpg"
                alt="profile"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto pt-10">
          <StackBar />
        </div>
      </main>
    </>
  );
};

export default page;
