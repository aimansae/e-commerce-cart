"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconMenu from "../../public/assets/icon-menu.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import closeIcon from "../../public/assets/icon-close.svg";
import logo from "../../public/assets/logo.svg";
import avatar from "../../public/assets/image-avatar.png";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const showCart = () => {
    console.log("cart clicked");
  };
  return (
    <header className="p-3 md:items-center md:border-b md:px-8 md:py-6">
      <nav className="flex items-center justify-between text-xl md:items-center md:justify-around">
        <div className="flex items-center">
          {/*Burger Menu*/}
          <button
            aria-label="Toggle mobile menu"
            className="mr-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image src={iconMenu} alt="Menu Icon" />
          </button>
          {/*Logo*/}
          <Link
            href="/"
            className="font-extrabold tracking-wider text-customDarkBlue md:text-3xl"
          >
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        {/*Nav Links*/}
        <div className="hidden text-customDarkBlue md:flex md:justify-between md:gap-4 md:text-customGray">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        {!isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-65">
            <div className="absolute left-0 top-0 flex min-h-screen w-2/3 flex-col items-start gap-4 bg-white p-4 text-base">
              <button
                className="mt-2 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Image src={closeIcon} alt="" />
              </button>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <Link href={""}>
            <Image width={18} src={cartIcon} alt="Cart" onClick={showCart} />
          </Link>
          <Link href="">
            <Image src={avatar} width={20} alt="User Profile Avatar" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
