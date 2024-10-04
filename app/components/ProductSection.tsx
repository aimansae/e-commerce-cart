"use client";
import Image from "next/image";
import React, { useState } from "react";
import imageProduct1 from "../../public/assets/image-product-1.jpg";
import cartIcon from "../../public/assets/icon-cart.svg";
import thumbnail1 from "../../public/assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../public/assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../public/assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../public/assets/image-product-4-thumbnail.jpg";
import Cart from "./Cart";

export type productType = {
  id: number;
  name: string;
  price: number;
  discount: number;
  quantity: number;
};
const ProductSection = () => {
  const product = {
    id: 1,
    name: "Fall limited edition white Sneakers",
    discount: 50,
    price: 125.0,
    quantity: 0,
  };
  //   const products = [{ name: "p1", alt: "" }];
  const [counter, setCounter] = useState<number>(0);
  const [cart, setCart] = useState<productType[]>([]);
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      quantity: counter,
      price: product.price,
      discount: product.discount,
    };
    setCart((prevCart) => [...prevCart, cartItem]);

    console.log("Updated cart:", cart);
  };
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <article className="mx-auto flex w-full flex-col md:mx-auto md:min-h-screen md:max-w-3xl md:flex-row md:items-center md:gap-10">
      {/*Image section*/}

      <figure className="h-[calc(100vh/3)] w-full overflow-hidden md:h-auto md:w-1/2 md:rounded">
        <Image
          src={imageProduct1}
          alt={""}
          className="h-full w-full object-cover md:h-auto md:w-auto md:rounded-xl"
        />
        <div className="my-4 hidden justify-between md:flex">
          <Image
            src={thumbnail1}
            alt=""
            className="w-1/5 flex-shrink-0 rounded-xl"
          />
          <Image src={thumbnail2} alt="" className="w-1/5 rounded-xl" />
          <Image src={thumbnail3} alt="" className="w-1/5 rounded-xl" />
          <Image src={thumbnail4} alt="" className="w-1/5 rounded-xl" />
        </div>
      </figure>
      {/*Description section*/}

      <section className="w-full p-4 md:w-1/2 md:p-6">
        <p className="text-base font-bold tracking-wider text-customGray">
          SNEAKERS COMPANY
        </p>
        <h1 className="mb-4 mt-2 text-xl font-extrabold text-customDarkBlue md:text-3xl">
          {product.name}
        </h1>

        <p className="text-base text-customGray md:my-6">
          These low profile sneaker are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
        <div className="my-4 flex items-center justify-between text-customDarkBlue md:flex-col md:items-start">
          <p className="text-2xl font-bold">
            $125.00
            <span className="ml-4 rounded bg-customDarkBlue p-1 text-xs text-white">
              50%
            </span>
          </p>
          <p className="font-bold text-customGray line-through">$250.00</p>
        </div>
        <div className="cursor-pointer gap-4 md:flex">
          <div className="my-4 flex justify-between rounded bg-customLightGray px-4 py-2 font-bold text-customOrange md:w-1/3">
            <button
              onClick={decreaseCounter}
              disabled={counter === 0}
              aria-label="decrease quantity"
              className={`cursor-pointer`}
            >
              -
            </button>
            <span className="text-black">{counter}</span>
            <button
              onClick={increaseCounter}
              aria-label="increase quantity"
              className="cursor-pointer"
            >
              +
            </button>
          </div>
          <div
            className={`my-4 flex items-center justify-center rounded bg-customOrange px-4 py-2 font-bold text-customDarkBlue md:w-2/3 ${counter === 0 ? "cursor-not-allowed bg-paleOrange" : "bg-customOrange"}`}
          >
            <button
              className="flex items-center space-x-2"
              disabled={counter === 0}
            >
              <Image src={cartIcon} alt="Cart Icon" width={12} />
              <span className="text-xs font-bold" onClick={addToCart}>
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </section>
      {/*Cart*/}
      <Cart cart={cart}></Cart>
    </article>
  );
};

export default ProductSection;
