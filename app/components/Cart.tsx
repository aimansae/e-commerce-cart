import React from "react";
import { ProductType } from "../types";

type cartType = {
  cart: ProductType[];
};

const Cart = ({ cart }: cartType) => {
  return (
    <div className="flex justify-center">
      <div className="absolute top-20 z-50 h-1/4 w-10/12 rounded-xl bg-white p-2 shadow-lg">
        <h2 className="mb-3 pb-2 border-b border-customDarkBlue text-xs font-bold">
          Cart:
        </h2>

        <ul className="text-xs">
          {cart.length > 0 ? (
            cart.map((product) => (
              <>
                <li key={product.id} className="mb-2 text-base">
                  {product.quantity} x {product.name} - 
                  <span className="font-bold">$
                  {(product.price * product.quantity).toFixed(2)}
                  </span></li>
              </>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
