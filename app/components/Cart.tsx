import React from "react";
import { ProductType } from "./ProductSection";
type cartType = {
  cart: ProductType[];
};
const Cart = ({ cart }: cartType) => {
  return (
    <div>
      {cart.length > 0 && (
        <div className="mt-4 w-full bg-gray-100 p-4">
          <h2 className="mb-2 text-lg font-bold">Cart Items:</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-2">
                {product.quantity} x {product.name} - ${product.price} each
                (Discount: {product.discount}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
