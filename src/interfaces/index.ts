import { StaticImageData } from "next/image";

export interface MenuCardProps {
  label: string;
  price: string;
  grams: string;
  image: string | StaticImageData;
}
