"use client";
import Image from "next/image";
import React, { useState } from "react";
import cartIcon from "../../public/assets/icon-cart.svg";
import { products } from "../constants";
import { ProductType } from "../types";
import { content } from "../constants";
import Cart from "./Cart";

const ProductSection = () => {
  const [counter, setCounter] = useState<number>(0);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const product = products[currentProductIndex];

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const addToCart = () => {
    console.log("Cart clicked");
    setCart((prevCart) => {
      const itemInCart = prevCart.find(
        (item: ProductType) => item.id === product.id,
      );
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + counter }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: counter }];
      }
    });
    setCounter(0);
  };
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <button onClick={handleNextProduct}>Next</button>
      <article className="mx-auto flex w-full flex-col md:mx-auto md:min-h-screen md:max-w-3xl md:flex-row md:items-center md:gap-10">
        {/*Image section*/}

        <figure className="h-[calc(100vh/3)] w-full overflow-hidden md:h-auto md:w-1/2 md:rounded">
          <Image
            src={product.imageUrl}
            height="400"
            width="400"
            alt={product.alt}
            className="h-full w-full object-cover md:h-auto md:w-auto md:rounded-xl"
          />
          <div className="my-4 hidden justify-between md:flex">
            {product.thumbnails?.map((thumbnail, index)=>(
            <Image key={index} 
fill            src={thumbnail} alt={product.alt} className="w-1/5 rounded-xl" />
            
          ))}</div>
        </figure>
        {/*Description section*/}

        <section className="w-full p-4 md:w-1/2 md:p-6">
          <p className="text-base font-bold tracking-wider text-customGray">
            {content.header}
          </p>
          <h1 className="mb-4 mt-2 text-xl font-extrabold text-customDarkBlue md:text-3xl">
            {product.name}
          </h1>

          <p className="text-base text-customGray md:my-6">
            {product.description}
          </p>
          <div className="my-4 flex items-center justify-between text-customDarkBlue md:flex-col md:items-start">
            <p className="text-2xl font-bold">
              ${product.price}
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
    </>
  );
};

export default ProductSection;
