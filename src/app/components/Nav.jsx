"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, User, FileBadge2, Github, Linkedin } from "lucide-react";
const Nav = () => {
  return (
    <nav className="flex justify-center p-3 text-center text-xs md:justify-end md:p-5 md:text-lg font-bold space-x-6 relative right-5">
      {/*<button className="w-12 h-12 rounded-full border-solid border-2 border-white">*/}
      <Link href="/" className="flex items-center justify-center">
        <Home className="custom-icon peer pop" />
        <span className="absolute hidden peer-hover:block top-3/4 text-white">
          Home
        </span>
      </Link>
      <Link href="/about" className="flex items-center justify-center">
        <User className="custom-icon pop" />
      </Link>

      <Link href="/projects" className="flex items-center justify-center">
        <FileBadge2 className="custom-icon pop" />
      </Link>
      <Link
        href="https://www.github.com/ej84"
        className="flex items-center justify-center"
      >
        <Github className="custom-icon pop" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rjeong397/"
        className="flex items-center justify-center"
      >
        <Linkedin className="custom-icon pop" />
      </Link>
    </nav>
  );
};

export default Nav;
