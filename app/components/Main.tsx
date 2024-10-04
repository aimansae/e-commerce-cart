// import React from 'react'

// const Main = () => {
//     const [counter, setCounter] = useState<number>(0);
//     const [cart, setCart] = useState<ProductType[]>([]);
//     const [currentProductIndex, setCurrentProductIndex] = useState(0);
//     const product = products[currentProductIndex];
  
//     const handleNextProduct = () => {
//       setCurrentProductIndex((prevIndex) =>
//         prevIndex === products.length - 1 ? 0 : prevIndex + 1,
//       );
//     };
//     const addToCart = () => {
//       console.log("Cart clicked");
//       setCart((prevCart) => {
//         const itemInCart = prevCart.find(
//           (item: ProductType) => item.id === product.id,
//         );
//         if (itemInCart) {
//           return prevCart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + counter }
//               : item,
//           );
//         } else {
//           return [...prevCart, { ...product, quantity: counter }];
//         }
//       });
//       setCounter(0);
//     };
//     const increaseCounter = () => {
//       setCounter((prevCounter) => prevCounter + 1);
//     };
//     const decreaseCounter = () => {
//       setCounter((prevCounter) => prevCounter - 1);
//     };
//   return (
//     <main >
      
//     </main>
//   )
// }

// export default Main
