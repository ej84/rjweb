import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Home, User, FileBadge2, Github, Linkedin } from "lucide-react";
const Nav = () => {
  return (
    <nav className="flex justify-center p-3 text-center text-xs md:justify-end md:p-5 md:text-lg font-bold space-x-4">
      <button className="w-12 h-12 rounded-full border-solid border-2 border-white">
        <Link href="/" className="flex items-center justify-center">
          <Home className="w-6 h-6 text-white" />
        </Link>
      </button>
      <button className="w-12 h-12 rounded-full border-solid border-2 border-white">
        <Link href="/about" className="flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </Link>
      </button>

      <button className="w-12 h-12 rounded-full border-sollid border-2 border-white">
        <Link href="/projects" className="flex items-center justify-center">
          <FileBadge2 className="w-6 h-6 text-white" />
        </Link>
      </button>
      <button className="w-12 h-12 rounded-full border-solid border-2 border-white">
        <Link
          href="https://www.github.com/ej84"
          className="flex items-center justify-center"
        >
          <Github className="w-6 h-6 text-white" />
        </Link>
      </button>

      <button className="w-12 h-12 rounded-full border-solid border-2 border-white">
        <Link
          href="https://www.linkedin.com/in/rjeong397/"
          className="flex items-center justify-center"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
