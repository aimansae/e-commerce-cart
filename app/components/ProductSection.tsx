import Image from "next/image";
import React from "react";
import imageProduct1 from "../../public/assets/image-product-1.jpg";
import cartIcon from "../../public/assets/icon-cart.svg";
import thumbnail1 from "../../public/assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../public/assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../public/assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../public/assets/image-product-4-thumbnail.jpg";

const ProductSection = () => {
  const products = [{ name: "p1", alt: "" }];
  return (
    <article className="mx-auto flex flex-col md:flex-row md:mx-auto md:items-center w-full md:max-w-3xl md:gap-10  md:min-h-screen">
      {/*Image section*/}

      <figure className="w-full h-[calc(100vh/3)] md:w-1/2 md:h-auto md:rounded  overflow-hidden">
        <Image
          src={imageProduct1}
          alt={""}
          className="w-full h-full md:h-auto md:w-auto md:rounded-xl object-cover"
        />
        <div className="my-4 flex justify-between">
          <Image
            src={thumbnail1}
            alt=""
            className="rounded-xl w-1/5 flex-shrink-0"
          />
          <Image src={thumbnail2} alt="" className="rounded-xl w-1/5 " />
          <Image src={thumbnail1} alt="" className="rounded-xl w-1/5 " />
          <Image src={thumbnail3} alt="" className="rounded-xl w-1/5 " />
        </div>
      </figure>
      {/*Description section*/}

      <section className="p-4 md:p-6 w-full md:w-1/2 ">
        <p className="text-customGray font-bold text-xs tracking-wider ">
          SNEAKERS COMPANY
        </p>
        <h1 className="text-xl md:text-3xl font-extrabold mb-4 mt-2 text-customDarkBlue">
          Fall limited edition white Sneakers
        </h1>

        <p className="md:text-base md:my-6 text-customGray text-xs">
          These low profile sneaker are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will wthstand everything
          the weather can offer{" "}
        </p>
        <div className="flex justify-between text-customDarkBlue items-center my-4 md:flex-col md:items-start">
          <p className="text-2xl font-bold  ">
            $125.00
            <span className="bg-customDarkBlue ml-4  text-white p-1 rounded text-xs">
              50%
            </span>
          </p>
          <p className="text-customGray line-through font-bold">$250.00</p>
        </div>
        <div className="md:flex gap-4 ">
          <div className="my-4 font-bold bg-customLightGray flex justify-between px-4 py-2 rounded  text-customOrange md:w-1/3">
            <button aria-label="decrease quantity">-</button>
            <span className="text-black">0</span>
            <button aria-label="increase quantity">+</button>
          </div>
          <div className="my-4 text-customDarkBlue font-bold flex bg-customOrange rounded px-4 py-2 items-center justify-center md:w-2/3">
            <button className="flex items-center space-x-2">
              <Image src={cartIcon} alt="Cart Icon" width={12} />
              <span className="text-xs font-bold">Add to cart</span>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProductSection;
