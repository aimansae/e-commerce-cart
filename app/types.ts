export type ProductType = {
  id: number;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  description: string;
  imageUrl: string;
  alt: string;
  thumbnails?: string[];
};

export type ProductSectionType = {
  onHandleNextProduct: () => void;
  product: ProductType;
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  addToCart: () => void;
};
export type CartType = {
  cart: ProductType[];
};
