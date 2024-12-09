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
      <div className="">
        <div className="grid grid-rows-3 justify-center">
          <div className="p-14">
            <a href="https://live.getgeneid.com/">Project 1</a>
            <p>Summary: </p>
          </div>
          <div className="p-14">Project 2</div>
        </div>
      </div>
    </>
  );
};

export default page;
