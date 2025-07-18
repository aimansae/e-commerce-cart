"use client";
import Image from "next/image";
import React from "react";
import cartIcon from "../../public/assets/icon-cart.svg";
import { content } from "../constants";
import { ProductSectionType } from "../types";
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

  if (currentProductIndex < 0 || currentProductIndex >= products.length) {
    return <div>Invalid product index.</div>; // Handle invalid index
  }
  const currentProduct = products[currentProductIndex];
  const discountedPrice =
    currentProduct.price * (1 - currentProduct.discount / 100);
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
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <article className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 px-4 sm:px-6 md:flex-row md:gap-8">
        {/* Image & Thumbnails */}
        <div className="flex w-full max-w-md flex-col items-center gap-4 p-2 md:w-1/2">
          {/* Main Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {currentProduct.thumbnails?.map((thumbnail, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-transparent transition-all duration-300 hover:border-customOrange hover:shadow-sm"
              >
                <Image
                  src={thumbnail}
                  alt={currentProduct.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        {/*Product Description*/}
        <section className="flex w-full flex-col gap-4 p-6 md:w-1/2">
          {/* Small header */}
          <p className="text-xs font-semibold text-customGray md:text-base">
            {content.header}
          </p>

          {/* Product Name */}
          <h1 className="text-2xl font-bold text-customDarkBlue md:text-3xl">
            {currentProduct.name}
          </h1>

          {/* Description */}
          <p className="text-sm leading-relaxed text-customGray md:my-4 md:text-base">
            {currentProduct.description}
          </p>

          {/* Price + Discount */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex items-center gap-3 text-customDarkBlue">
              <p className="text-xl font-bold">${discountedPrice.toFixed(2)}</p>
              <span className="rounded bg-customDarkBlue px-2 py-1 text-xs text-white">
                {currentProduct.discount}%
              </span>
            </div>
            <p className="text-sm font-semibold text-customGray line-through">
              ${currentProduct.price.toFixed(2)}
            </p>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center">
            {/* Counter */}
            <div className="flex w-full items-center justify-between rounded bg-customLightGray px-4 py-2 font-bold text-customOrange md:w-1/3">
              <button
                onClick={decreaseCounter}
                onKeyDown={(e) => handleKeyDown(e, decreaseCounter)}
                aria-label="decrease quantity"
                className="text-2xl transition-transform hover:scale-125"
              >
                -
              </button>
              <span className="text-xl text-black">{counter}</span>
              <button
                onClick={increaseCounter}
                aria-label="increase quantity"
                className="text-2xl transition-transform hover:scale-125"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={counter === 0}
              className={`flex w-full items-center justify-center gap-2 rounded px-4 py-3 text-base font-bold transition-all md:w-2/3 ${
                counter === 0
                  ? "cursor-not-allowed bg-paleOrange text-customDarkBlue"
                  : "bg-customOrange text-customDarkBlue hover:brightness-95"
              }`}
              onClick={addToCart}
            >
              <Image src={cartIcon} alt="Cart Icon" width={18} />
              <span>Add to cart</span>
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProductSection;
