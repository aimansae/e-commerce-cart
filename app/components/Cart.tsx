import React from "react";
import { ProductType } from "../types";

type cartType = {
  cart: ProductType[];
};

const Cart = ({ cart }: cartType) => {
  return (
    <div className="flex justify-center">
      <div className="absolute top-20 z-50 h-1/4 w-10/12 rounded-xl bg-white p-2 shadow-lg">
        <h2 className="mb-3 border-b border-slate-400 pb-2 text-xs font-bold">
          Cart
        </h2>

        <ul className="text-xs">
          {cart.length > 0 ? (
            cart.map((product) => (
              <>
                <li key={product.id} className="mb-2 text-sm">
                  {product.quantity} x {product.name} -
                  <span className="font-bold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </span>
                </li>
              </>
            ))
          ) : (
            <div className="flex items-center justify-center">
              {" "}
              <p className="text-customGray.">Your cart is empty</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
