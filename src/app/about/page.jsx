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
          <div className="float-left w-1/2">
            <h2 className="text-lg text-white p-4 bg-slate-700 rounded-md fade-in_2">
              My name is Richard Jeong, a full stack web application developer
              and UI designer with a great passion for coding challenges and
              many types of web development. I specialize in building powerful
              web applications using React.js and Next.js for the frontend, and
              PHP and Python for the backend, and MySQL and MongoDB for the
              database. I thrive in collaborative environments, and I am
              committed to improving user experiences through thoughtful and
              efficient design. I look forward to growing as a developer and
              tackling new challenges. You can explore my projects on this
              website, and I'm always open to collaboration and inquiries—feel
              free to reach out!
            </h2>
          </div>
          <div className="float-right w-1/2 pl-20">
            <img
              src="portfolio_picture.jpg"
              alt="profile"
              width="380"
              height="380"
            />
          </div>
        </div>
        <div className="p-10 m-5 grid grid-cols-4 justify-center">
          <h1>Python</h1>
          <h1>PHP</h1>
          <h1>React JS</h1>
          <h1>MySQL</h1>
        </div>
      </main>
    </>
  );
};

export default page;
