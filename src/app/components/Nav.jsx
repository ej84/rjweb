import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="flex justify-center p-0 text-center text-xs md:justify-end md:p-2 md:text-lg font-bold">
      <Link href="/" className="pr-5 my-5">
        <FontAwesomeIcon icon={faHome} size="2xl" />
      </Link>
      <Link href="/about" className="pr-5 my-5">
        About Me
      </Link>
      <Link href="/projects" className="pr-5 my-5">
        My Projects
      </Link>
      <Link href="https://www.github.com/ej84" className="pr-5 my-5">
        Resume
      </Link>
      <Link href="https://www.github.com/ej84" className="pr-5 my-5">
        Github
      </Link>
      <Link href="https://www.linkedin.com/in/rjeong397/" className="pr-5 my-5">
        LinkedIn
      </Link>
    </nav>
  );
};

export default Nav;
