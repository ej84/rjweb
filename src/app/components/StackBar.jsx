import React from "react";
import Image from "next/image";
import Link from "next/link";
import html from "../image/html.png";
import css from "../image/css.png";
import python from "../image/python.png";
import react from "../image/react.png";
import php from "../image/php.png";
import javascript from "../image/javascript.png";
import developer from "../image/developer.webp";

const StackBar = () => {
  return (
    <>
      <div className="fade-in">
        <Image
          src={developer}
          alt="developer"
          width={380}
          height={380}
          className="relative md:left-14 rounded-md mb-5"
        />
        <div className="flex justify-center p-4 space-x-5 md:space-x-8 bg-slate-700 rounded-md">
          <Link href="/about" className="w-10 md:w-12 pop">
            <Image src={html} alt="about_me_btn" />
          </Link>
          <Link href="/about" className="w-10 md:w-12 pop">
            <Image src={css} alt="about_me_btn" />
          </Link>
          <Link href="/about" className="flex items-center w-10 md:w-12 pop">
            <Image src={javascript} alt="about_me_btn" />
          </Link>
          <Link href="/about" className="flex items-center w-10 md:w-12 pop">
            <Image src={react} alt="about_me_btn" />
          </Link>
          <Link href="/about" className="flex items-center w-10 md:w-12 pop">
            <Image src={python} alt="about_me_btn" />
          </Link>
          <Link href="/about" className="flex items-center w-10 md:w-12 pop">
            <Image src={php} alt="about_me_btn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StackBar;
