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
