"use client";
import React, { useEffect, useState } from "react";
import { products } from "../constants";
import { ProductType } from "../types";
import Nav from "./Nav";
import ProductSection from "./ProductSection";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const product = products[currentPage - 1];
  const totalPages = Math.ceil(products.length);

  //pagination

  // url paths

  useEffect(() => {
    const productName = encodeURIComponent(product.name);
    const newUrl = `/?name=${productName}&quantity=${counter}`;
    window.history.replaceState({}, "", newUrl);
  }, [product, counter]);

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
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      return newCounter;
    });
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter;
    });
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Fetch products based on the new page number
    }
  };
  console.log(product);

  return (
    <main className="flex flex-1 flex-col">
      <Nav cart={cart} />

      <ProductSection
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        products={products}
        counter={counter}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        addToCart={addToCart}
      ></ProductSection>
    </main>
  );
};

export default Main;
