"use client";
import React, { useState } from "react";
import { ProductType } from "../types";

type cartType = {
  cart: ProductType[];
};

const Cart = ({ cart }: cartType) => {
  const [toggleCart, setToggleCart] = useState(true);

  const handleToggleCart = () => {
    setToggleCart((prev) => !prev);
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="flex justify-center">
      {cart.length > 0 && toggleCart ? (
        <div className="absolute top-20 z-50 w-10/12 rounded-xl bg-white p-2 shadow-lg">
          <div className="p-2">
            <div className="mb-3 flex justify-between border-b border-slate-400 p-2 text-xs font-bold">
              <span>Your Cart </span>
              <button
                className="hover:scale-200 transition-transform duration-300"
                onClick={handleToggleCart}
              >
                X
              </button>
            </div>
            <ul className="p-2 text-xs">
              {cart.map((product) => (
                <li key={product.id} className="mb-2 whitespace-nowrap text-xs">
                  {product.quantity} x {product.name} -
                  <span className="font-bold">
                    $ {(product.price * product.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-slate-300 pt-2 text-right text-sm font-semibold">
              Total: ${total.toFixed(2)}
            </div>
          </div>{" "}
        </div>
      ) : (
        <div className="absolute right-0 top-8 flex items-center justify-center border border-black bg-orange-300 p-4">
          {" "}
          <p className="text-xs text-customGray">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
