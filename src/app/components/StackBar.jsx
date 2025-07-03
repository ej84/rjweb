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
          className="relative lg:left-36 rounded-md mb-5"
        />
        <div className="flex justify-center p-5 space-x-5 md:space-x-8 bg-slate-700 rounded-md">
          <Link href="/" className="w-10 h-10 md:w-12 md:h-12">
            <Image src={html} alt="about_me_btn" className="peer pop" />
            {/*<span className=" hidden peer-hover:block">+ 3 yrs</span>*/}
          </Link>
          <Link href="/" className="w-10 md:w-12">
            <Image src={css} alt="about_me_btn" className="peer pop" />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center w-10 md:w-12 pop"
          >
            <Image src={javascript} alt="about_me_btn" />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center w-10 md:w-12 pop"
          >
            <Image src={react} alt="about_me_btn" />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center w-10 md:w-12 pop"
          >
            <Image src={python} alt="about_me_btn" />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center w-10 md:w-12 pop"
          >
            <Image src={php} alt="about_me_btn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StackBar;
