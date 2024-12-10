import React from "react";
import Image from "next/image";
import Link from "next/link";
import html from "../image/html.png";
import css from "../image/css.png";
import python from "../image/python.png";
import react from "../image/react.png";
import php from "../image/php.png";
import javascript from "../image/javascript.png";

const StackBar = () => {
  return (
    <div className="flex justify-center p-2 space-x-5 md:space-x-8 bg-slate-700 rounded-md">
      <Link href="/about" className="w-10 md:w-14 pop">
        <Image src={html} alt="about_me_btn" />
      </Link>
      <Link href="/about" className="w-10 md:w-14 pop">
        <Image src={css} alt="about_me_btn" />
      </Link>
      <Link href="/about" className="flex items-center w-10 md:w-14 pop">
        <Image src={javascript} alt="about_me_btn" />
      </Link>
      <Link href="/about" className="flex items-center w-10 md:w-14 pop">
        <Image src={react} alt="about_me_btn" />
      </Link>
      <Link href="/about" className="flex items-center w-10 md:w-14 pop">
        <Image src={python} alt="about_me_btn" />
      </Link>
      <Link href="/about" className="flex items-center w-10 md:w-14 pop">
        <Image src={php} alt="about_me_btn" />
      </Link>
    </div>
  );
};

export default StackBar;
