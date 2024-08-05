import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-end p-2 font-bold">
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
