"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconMenu from "../../public/assets/icon-menu.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import cartIconRed from "../../public/assets/icon-cart-red.svg";

import closeIcon from "../../public/assets/icon-close.svg";
import logo from "../../public/assets/logo.svg";
import avatar from "../../public/assets/image-avatar.png";
import { navLinks } from "../constants";
import { CartType } from "../types";
import Cart from "./Cart";

const Nav = ({ cart }: CartType) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // handle clicks outside mobile menu and cart
  const handleClickOutside = (e: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
      setShowCart(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="relative z-50 w-full border-b border-slate-200 px-4 py-5 md:px-8 md:py-6">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
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
              <Image src={logo} alt="Logo" className="w-28 md:w-auto" />
            </Link>
          </div>
          {/*Nav Links Desktop*/}
          <div className="hidden text-base text-customDarkBlue md:flex md:justify-between md:gap-4 md:text-customGray">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-65">
              <div
                ref={mobileMenuRef}
                className="absolute left-0 top-0 z-50 flex min-h-screen w-2/3 flex-col items-start gap-4 bg-white p-4 text-base"
              >
                <button
                  className="mt-2 md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Image src={closeIcon} alt="Close Icon" />
                </button>
                <ul className="flex w-full flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <li key={i} className="w-full py-2 hover:bg-gray-200">
                      <Link key={link.href} href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Cart and Avatar */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              ref={cartRef}
              onClick={() => setShowCart(!showCart)}
              aria-label="View Cart"
            >
              {cart.length > 0 ? (
                <Image width={16} src={cartIconRed} alt="Cart" />
              ) : (
                <Image width={16} src={cartIcon} alt="Cart" />
              )}
            </button>
            <Link href="/">
              <Image
                src={avatar}
                width={20}
                alt="User Profile Avatar"
                className="rounded-full transition duration-200 hover:border hover:border-customOrange md:w-7"
              />
            </Link>
          </div>
        </nav>
      </header>

      <div>{showCart && <Cart cart={cart}></Cart>}</div>
    </>
  );
};

export default Nav;
