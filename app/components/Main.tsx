// "use client";

// import React, { useState } from "react";
// import Nav from "./Nav";
// import ProductSection from "./ProductSection";

// export type productType = {
//   id: number;
//   name: string;
//   price: number;
//   discount: number;
//   quantity: number;
// };
// const Main = () => {
//   const [cart, setCart] = useState<productType[]>([]);
//   const [counter, setCounter] = useState<{[key:number]: number }>({})

//   const products = [{
//     id: 1,
//     name: "Fall limited edition white Sneakers",
//     discount: 50,
//     price: 125.0,
//     quantity: 0,
//   }];
//   const addToCart = (productId: number) => {
//     const productToAdd = products.find((product) => product.id === productId);
//     if (!productToAdd) return;

//     const quantityToAdd = counter[productId] || 0;
//     if (quantityToAdd === 0) return; // If no quantity selected, don't add to cart

//     const cartItem = {
//       ...productToAdd,
//       quantity: quantityToAdd,
//     };

//     setCart((prevCart) => {
//       const existingProductIndex = prevCart.findIndex(
//         (item) => item.id === productId
//       );
//       if (existingProductIndex > -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += quantityToAdd;
//         return updatedCart;
//       } else {
//         return [...prevCart, cartItem];
//       }
//     });

//     // Reset the counter for this product after adding to the cart
//     setCounter((prevCounter) => ({ ...prevCounter, [productId]: 0 }));
//   };

//   const increaseCounter = (productId: number) => {
//     setCounter((prev) => ({
//       ...prev,
//       [productId]: (prev[productId] || 0) + 1,
//     }));
//   };

//   const decreaseCounter = (productId: number) => {
//     if (counter[productId] > 0) {
//       setCounter((prevCounter) => ({
//         ...prevCounter,
//         [productId]: prevCounter[productId] - 1,
//       }));
//     }
//   };
//   return (
//     <main className="flex min-h-screen flex-col md:mx-auto">
//       {/* <Nav addToCart={addToCart} /> */}
//       <ProductSection
//         cart={cart}
//         onIncrease={increaseCounter}
//         onDecrease={decreaseCounter}
//         counter={counter}
//         addToCart={addToCart}
//       ></ProductSection>
//     </main>
//   );
// };

// export default Main;
