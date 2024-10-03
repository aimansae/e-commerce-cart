"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconMenu from "../../public/assets/icon-menu.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import closeIcon from "../../public/assets/icon-close.svg";

import avatar from "../../public/assets/image-avatar.png";

const Nav = () => {
  const [isMenuMobileOpen, setIsOpenMenuMobileOpen] = useState(true);

  const navLinks = [
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Men",
      href: "/",
    },
    {
      label: "Women",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];

  return (
    <header className="p-2 md:py-6 md:px-8 md:border-b md:items-center ">

    <nav className="text-xl items-center flex justify-between md:justify-around md:items-center">
      <div className="flex items-center">
        {/*Burger Menu*/}
        <button
          className="md:hidden mr-2"
          onClick={() => setIsOpenMenuMobileOpen(!isMenuMobileOpen)}
        >
          
          <Image src={iconMenu} alt="Menu Icon"/>
        </button>
        {/*Logo*/}
        <Link href="" className="tracking-wider md:text-3xl font-extrabold text-customDarkBlue">
          sneakers
        </Link>
      </div>
      <div className="hidden md:flex md:justify-between md:gap-4 text-customDarkBlue md:text-customGray">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      {!isMenuMobileOpen && (
        <div className="w-2/3 absolute text-base gap-4 bg-white items-start flex flex-col min-h-screen p-4 top-0 left-0 ">
          <button
            className="md:hidden mt-2"
            onClick={() => setIsOpenMenuMobileOpen(!isMenuMobileOpen)}
          >
            <Image src={closeIcon} alt=''/>
          </button>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4">
        <Link href={""}>
          <Image width={18} src={cartIcon} alt="" />
        </Link>
        <Link href="">
          <Image src={avatar} width={20} alt="" />
        </Link>
      </div>
    </nav>
    </header>
  );
};

export default Nav;
