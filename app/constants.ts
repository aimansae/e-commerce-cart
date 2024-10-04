import { ProductType } from "./types";

export const navLinks = [
  {
    label: "Collections",
    href: "/",
  },
  {
    label: "Men",
    href: "/",
  },
  {
    label: "Women",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const content = {
  header: "SNEAKERS COMPANY",
};
export const products: ProductType[] = [
  {
    id: 1,
    name: "Fall limited edition white Sneakers",
    discount: 50,
    price: 125.0,
    quantity: 0,
    imageUrl: "/assets/image-product-1.jpg",
    alt: "White sneakers",
    description: `These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.`,
    thumbnails: [
      "/assets/image-product-1-thumbnail.jpg",
      "/assets/image-product-2-thumbnail.jpg",
      "/assets/image-product-3-thumbnail.jpg",
      "/assets/image-product-4-thumbnail.jpg",
    ],
  },
  {
    id: 2,
    name: "Red limited edition Nike Sneakers",
    discount: 20,
    price: 155.0,
    quantity: 0,
    imageUrl: "/assets/product-2.png",
    alt: "Red nike",
    description: `These nike sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.`,
  },
];
