import React from 'react'
import { productType } from './ProductSection'
type cartType ={
    cart:productType[]
}
const Cart = ({cart}:cartType) => {
  return (
    <div>
            {cart.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 w-full">
          <h2 className="text-lg font-bold mb-2">Cart Items:</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-2">
                {product.quantity} x {product.name} - ${product.price} each (Discount: {product.discount}%)
              </li>
            ))}
          </ul>
        </div>
      )}  
    </div>
  )
}

export default Cart
