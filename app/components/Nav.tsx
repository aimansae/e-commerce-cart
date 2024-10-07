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
  const cartRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Toggle cart visibility
  const handleCart = () => {
    console.log("cart");
    setShowCart(!showCart);
  };
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
                className="absolute left-0 top-0 flex min-h-screen w-2/3 flex-col items-start gap-4 bg-white p-4 text-base"
              >
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

          {/* Cart and Avatar */}
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={handleCart} aria-label="View Cart">
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

      <div ref={cartRef}>{showCart && <Cart cart={cart}></Cart>}</div>
    </>
  );
};

export default Nav;
