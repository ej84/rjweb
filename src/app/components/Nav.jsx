"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavList } from "../data";
import { Home, User, FileBadge2, Github, Linkedin } from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "about":
      return <User className="custom-icon peer pop" />;
    case "project":
      return <FileBadge2 className="custom-icon peer pop" />;
    case "github":
      return <Github className="custom-icon peer pop" />;
    case "linkedin":
      return <Linkedin className="custom-icon peer pop" />;
    default:
      return <Home className="custom-icon peer pop" />;
  }
};

const Nav = () => {
  return (
    <nav className="flex justify-center p-3 text-center text-xs md:justify-end md:p-5 md:text-lg font-bold space-x-6 relative md:right-5">
      {NavList.map((nav, index) => {
        return (
          <Link
            href={nav.link}
            key={nav.label}
            className="flex items-center justify-center p-3 bg-slate-700 rounded-lg"
          >
            {getIcon(nav.icon)}
            <span className="absolute hidden peer-hover:block top-20 text-white">
              {nav.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
