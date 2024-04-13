import { MenuCardProps } from "@/interfaces";

import Image from "next/image";
import Link from "next/link";

export default function MenuCard({
  label,
  image,
  price,
  grams,
}: MenuCardProps) {
  return (
    <Link
      key={label}
      target="_blank"
      href={`https://wa.me/4896096712/?text=Olá, gostaria de pedir um ${label}!`}
    >
      <div className="flex gap-2 items-center max-sm:justify-start shadow-md shadow-black/30 border-2 border-secondary-100 rounded-md p-2 hover:scale-105 hover:bg-secondary-100/50 transitions-all duration-300">
        <Image
          className="rounded-md max-h-32 max-w-[132px] max-sm:h-20 max-sm:w-20 max-lg:w-28 max-lg:h-28"
          src={image}
          alt={label}
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-2">
          <p className="text-xl max-sm:text-sm">{label}</p>
          <p className="text-xl max-sm:text-sm">
            {price} {grams}
          </p>
          <p className="max-sm:text-[10px]">Mande uma mensagem</p>
        </div>
      </div>
    </Link>
  );
}
