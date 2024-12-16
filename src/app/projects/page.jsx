import React from "react";
import Nav from "../components/Nav";
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
      <main className="flex flex-col justify-center lg:p-8">
        <div className="p-4 m-3 text-center mx-auto bg-slate-700 rounded-md">
          <h1 className="text-2xl text-white md:text-4xl font-extrabold fade-in">
            My Projects
          </h1>
        </div>
        <div className="p-4 m-6 md:p-12 md:m-12">
          <div className="grid grid-rows-3 md:grid-cols-2 justify-center text-white gap-3 text-center">
            <div className="md:p-10 md:m-4 bg-slate-700 rounded-md space-y-3">
              <a href="https://github.com/ej84/all-converter">
                File Converter Web Application Project
              </a>
              <p> </p>
            </div>
            <div className="md:p-10 md:m-4 bg-slate-700 rounded-md space-y-3">
              <a href="/">File Converter Web Application Project</a>
              <p>Summary: </p>
            </div>
            <div className="md:p-10 md:m-4 bg-slate-700 rounded-md space-y-3">
              <a href="/">File Converter Web Application Project</a>
              <p>Summary: </p>
            </div>
            <div className="md:p-10 md:m-4 bg-slate-700 rounded-md space-y-3">
              <a href="/">File Converter Web Application Project</a>
              <p>Summary: </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
