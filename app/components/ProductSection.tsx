"use client";
import Image from "next/image";
import React from "react";
import cartIcon from "../../public/assets/icon-cart.svg";
import { content } from "../constants";
import { ProductSectionType } from "../types";

const ProductSection = ({
  onHandleNextProduct,
  product,
  counter,
  increaseCounter,
  decreaseCounter,
  addToCart,
}: ProductSectionType) => {
  const initialPrice = product.price / (1 - product.discount / 100);
  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={onHandleNextProduct}
          aria-label="go to next product"
          className="bg-paleOrange p-2 px-3 text-xs hover:bg-customOrange md:text-base"
        >
          Next Product
        </button>
      </div>
      <article className="mx-auto flex w-full flex-col md:mx-auto md:min-h-screen md:max-w-4xl md:flex-row md:items-center md:gap-10">
        {/*Product Image*/}

        <figure className="h-[calc(100vh/3)] w-full overflow-hidden md:h-auto md:w-1/2 md:rounded">
          <Image
            src={product.imageUrl}
            height="400"
            width="400"
            alt={product.alt}
            className="h-full w-full object-cover md:h-auto md:w-auto md:rounded-xl"
          />
          <div className="my-4 hidden justify-between md:flex">
            {product.thumbnails?.map((thumbnail, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={thumbnail}
                alt={product.alt}
                className="w-1/5 rounded-xl"
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        </figure>
        {/*Product Description*/}

        <section className="w-full p-6 md:w-1/2">
          <p className="ms:text-base text-xs font-semibold text-customGray">
            {content.header}
          </p>
          <h1 className="mb-4 mt-2 text-2xl font-bold text-customDarkBlue md:text-3xl">
            {product.name}
          </h1>

          <p className="text-base tracking-tighter text-customGray md:my-6">
            {product.description}
          </p>
          <div className="my-4 flex items-center justify-between text-customDarkBlue md:flex-col md:items-start">
            <p className="text-2xl font-bold">
              ${product.price.toFixed(2)}
              <span className="ml-4 rounded bg-customDarkBlue px-2 py-1 text-xs text-white">
                {product.discount}%
              </span>
            </p>
            <p className="font-bold text-customGray line-through">
              ${initialPrice.toFixed(2)}
            </p>
          </div>
          <div className="cursor-pointer gap-4 md:flex">
            <div className="my-4 flex items-end justify-between rounded bg-customLightGray px-4 py-2 font-bold text-customOrange md:w-3/6">
              <button
                onClick={decreaseCounter}
                onKeyDown={(e) => handleKeyDown(e, decreaseCounter)}
                aria-label="decrease quantity"
                className="cursor-pointer text-3xl"
              >
                -
              </button>
              <span className="text-xl text-black">{counter}</span>
              <button
                onClick={increaseCounter}
                aria-label="increase quantity"
                className="cursor-pointer text-3xl"
              >
                +
              </button>
            </div>
            <div
              className={`my-4 flex items-center justify-center rounded bg-customOrange px-4 py-3 font-bold text-customDarkBlue md:w-2/3 ${counter === 0 ? "cursor-not-allowed bg-paleOrange" : "bg-customOrange"}`}
            >
              <button className="flex items-center space-x-2">
                <Image
                  src={cartIcon}
                  alt="Cart Icon"
                  width={18}
                  className="text-black"
                />
                <span
                  className="text-xl font-bold md:text-base"
                  onClick={addToCart}
                >
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProductSection;
