import React from "react";
import Nav from "../components/Nav";
import Link from "next/link";
import Image from "next/image";
import main from "../image/main.webp";

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
      <main className="flex flex-col justify-center lg:p-14">
        <div className="p-4 m-3 text-center md:text-start mx-auto bg-slate-700 rounded-md">
          <h1 className="text-3xl text-white lg:text-5xl font-extrabold fade-in">
            About Me
          </h1>
        </div>
        <div className="p-5 text-center md:text-start">
          <div className="float-left w-1/2 relative lg:left-36">
            <h2 className="text-lg text-white p-4 bg-slate-700 rounded-md fade-in_2">
              I am a full stack web application developer and UI/UX designer with a great passion for coding challenges and
              many types of web development for product. I specialize in building powerful and scalable
              web applications using various powerful web framework such as Next JS and powerful languages like Python, Javascript, and many others.
              I always thrive in collaborative environments, and I am
              committed to improving user experiences through thoughtful and
              efficient design. I look forward to growing as more creative developer and
              tackling new challenges!
            </h2>
          </div>
          <div className="float-right w-1/2 lg:pl-56">
            <img
              src="portfolio_picture.jpg"
              alt="profile"
              width="380"
              height="380"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
