"use client";
import React, { useState } from "react";
import { ProductType } from "../types";

type cartType = {
  cart: ProductType[];
};

const Cart = ({ cart }: cartType) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleCart = () => {
    setIsVisible((prev) => !prev);
  };
  const total = cart.reduce(
    (acc, item) => acc + item.price * (1 - item.discount / 100) * item.quantity,
    0,
  );
  return (
    <div className="w-full max-w-sm rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out">
      {isVisible && (
        <div className="p-4">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between border-b border-slate-300 pb-2">
            <h2 className="text-sm font-semibold text-customDarkBlue">
              Your Cart
            </h2>
            <button
              onClick={handleToggleCart}
              aria-label="Close Cart"
              className="text-lg font-bold text-red-500 transition-transform duration-200 hover:scale-125"
            >
              ×
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <ul className="space-y-3 text-sm text-customDarkBlue">
                {cart.map((product) => (
                  <li key={product.id} className="flex justify-between">
                    <span className="whitespace-nowrap">
                      {product.quantity} × {product.name}
                    </span>
                    <span className="font-semibold">
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

              {/* Total */}
              <div className="mt-4 border-t border-slate-200 pt-3 text-right text-sm font-bold">
                Total: ${total.toFixed(2)}
              </div>
            </>
          ) : (
            <div className="py-6 text-center text-sm text-customGray">
              Your cart is empty.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
