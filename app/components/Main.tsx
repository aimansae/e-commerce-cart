"use client";
import React, { useEffect, useState } from "react";
import { products } from "../constants";
import { ProductType } from "../types";
import Nav from "./Nav";
import ProductSection from "./ProductSection";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const product = products[currentProductIndex];
  // url paths

  useEffect(() => {
    const productName = encodeURIComponent(product.name);
    const newUrl = `/?name=${productName}&quantity=${counter}`;
    window.history.replaceState({}, "", newUrl);
  }, [product, counter]);

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
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      return newCounter;
    });
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => {
      if(prevCounter>0){
      return prevCounter - 1;
  }
return prevCounter});
  };


  return (
    <main className="flex min-h-screen flex-col md:mx-auto">
      <Nav cart={cart} />
      <ProductSection
        onHandleNextProduct={handleNextProduct}
        product={product}
        counter={counter}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        addToCart={addToCart}
      ></ProductSection>
    </main>
  );
};

export default Main;
