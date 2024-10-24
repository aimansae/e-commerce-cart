"use client";
import Image from "next/image";
import React from "react";
import cartIcon from "../../public/assets/icon-cart.svg";
import { content } from "../constants";
import { ProductSectionType, ProductType } from "../types";
import PaginationComponent from "./Pagination";

const ProductSection = ({
  products,
  counter,
  increaseCounter,
  decreaseCounter,
  addToCart,
  currentPage = 1,
  totalPages,
  onPageChange,
}: ProductSectionType) => {
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);
  const currentProductIndex = validPage - 1;
  // Ensure products array is defined and has elements
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>; // Handle case where products are not available
  }

  // Ensure current index is valid
  if (currentProductIndex < 0 || currentProductIndex >= products.length) {
    return <div>Invalid product index.</div>; // Handle invalid index
  }
  const currentProduct = products[currentProductIndex];
  const initialPrice =
    currentProduct.price / (1 - currentProduct.discount / 100);
  console.log("Current", currentProduct);
  if (!currentProduct) {
    return <div>No product available.</div>; // Handle case where the product might not exist
  }
  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };
  const { imageUrl, alt } = currentProduct;

  return (
    <>
      {/* <NextButton onClickNextButton={onHandleNextProduct} /> */}
      {/* Pagination Component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <article className="mx-auto flex w-full flex-col md:mx-auto md:max-w-3xl md:flex-row md:gap-10">
        {/*Product Image*/}
        <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-1/2 md:rounded">
          <Image
            src={imageUrl}
            alt={alt}
            // width={500}
            // height={600} //
            fill
            sizes="(max-width: 375px) 100vw, (max-width: 560px) 80vw, (max-width: 768px) 60vw, 33vw"
            className="object-cover"
          />
          {/* <div className="">
            <Image src={iconNext} width={30} height={30} alt="Next icon" className="bg-white border rounded-full absolute top-48 right-0 p-2" />
            <Image src={iconPrevious} width={30} height={30} alt="Next icon" className="bg-white border rounded-full absolute top-48 left-0 p-2" />
          </div> */}

          <div className="my-4 hidden justify-between md:flex">
            {currentProduct.thumbnails?.map((thumbnail, index) => (
              <Image
                key={index}
                width={50}
                height={50}
                src={thumbnail}
                alt={currentProduct.alt}
                className="w-1/5 rounded-xl"
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
        {/*Product Description*/}
        <section className="w-full p-6 md:w-1/2">
          <p className="ms:text-base text-xs font-semibold text-customGray">
            {content.header}
          </p>
          <h1 className="mb-4 mt-2 text-2xl font-bold text-customDarkBlue md:text-3xl">
            {currentProduct.name}
          </h1>

          <p className="text-base tracking-tighter text-customGray md:my-6">
            {currentProduct.description}
          </p>
          <div className="my-4 flex items-center justify-between text-customDarkBlue md:flex-col md:items-start">
            <p className="text-2xl font-bold">
              ${currentProduct.price.toFixed(2)}
              <span className="ml-4 rounded bg-customDarkBlue px-2 py-1 text-xs text-white">
                {currentProduct.discount}%
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
