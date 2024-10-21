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
  // onHandleNextProduct: () => void;
  products: ProductType[];
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  addToCart: () => void;
  // searchParams: { [key: string]: string | undefined };
  currentPage?: number | undefined;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export type CartType = {
  cart: ProductType[];
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
