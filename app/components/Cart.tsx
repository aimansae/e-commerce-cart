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
  const total = cart.reduce(
    (acc, item) => acc + item.price * (1 - item.discount / 100) * item.quantity,
    0,
  );
  return (
    <div className="min-w-[400px] rounded-xl">
      {toggleCart && (
        <div className="left-2 top-2 z-50 rounded-xl bg-white p-2 shadow-lg">
          <div className="p-2">
            <div className="mb-3 flex justify-between border-b border-slate-400 p-2 text-xs font-bold">
              <span>Your Cart</span>
              <button
                className="transition-transform duration-300 hover:scale-125"
                onClick={handleToggleCart}
              >
                X
              </button>
            </div>

            {cart.length > 0 ? (
              <>
                <ul className="flex p-2 text-xs">
                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="mb-2 whitespace-nowrap text-xs"
                    >
                      {product.quantity} x {product.name} -{" "}
                      <span className="font-bold">
                        $
                        {(
                          product.price *
                          (1 - product.discount / 100) *
                          product.quantity
                        ).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-slate-300 pt-2 text-right text-sm font-semibold">
                  Total: $ {total.toFixed(2)}
                </div>
              </>
            ) : (
              <p className="py-4 text-center text-sm text-customGray">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
