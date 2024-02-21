"use client";
import { HomeIcon, InstagramIcon, MessageSquareShareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-secondary-200 z-50 fixed w-full border-b-2 border-secondary-100">
      <div className="flex h-24 items-center max-w-7xl justify-between mx-auto max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:mx-5">
        <Image
          src="/Logo.jpg"
          alt="Imagem contendo a logo das empadas Amore"
          width={40}
          height={40}
        />
        <div className="flex gap-10 max-sm:gap-4 absolute inset-0 justify-center items-center">
          <Link
            className="p-1 rounded-xl text-2xl text-secondary-300 transition-all duration-300 ease-in-out hover:bg-secondary-300/30 hover:scale-110 max-sm:text-xl"
            href={pathname !== "/" ? "/" && "/#service" : "/#service"}
          >
            Serviço
          </Link>
          <Link
            className="p-1 rounded-xl text-2xl text-secondary-300 transition-all duration-300 ease-in-out hover:bg-secondary-300/30 hover:scale-110 max-sm:text-xl"
            href="/menu"
          >
            Cardápio
          </Link>
          <Link
            className="p-1 rounded-xl text-2xl text-secondary-300 transition-all duration-300 ease-in-out hover:bg-secondary-300/30 hover:scale-110 max-sm:text-xl"
            href="/about"
          >
            Sobre
          </Link>
        </div>
        <div className="flex gap-5 max-sm:gap-2 z-10">
          {pathname !== "/" && (
            <Link
              href="/"
              className="hover:scale-125 boder-2 border-secondary-100 transition-all duration-300 ease-in-out "
            >
              <div className="p-2 rounded-full transition-all duration-300 hover:bg-secondary-300/30 border-2 border-secondary-300 ease-in-out max-md:hidden max-sm:hidden">
                <HomeIcon className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-secondary-300" />
              </div>
            </Link>
          )}

          <Link
            className="hover:scale-125  transition-all duration-300 ease-in-out"
            href="https://www.instagram.com/empadamaissabores/"
            target="_blank"
          >
            <div className="p-2 rounded-full transition-all duration-300 hover:bg-secondary-300/30 border-2 border-secondary-300 ease-in-out max-md:hidden max-sm:hidden">
              <InstagramIcon className="h-6 w-6  text-secondary-300" />
            </div>
          </Link>
          <Link
            href="https://wa.me/4896096712/?text=Olá, Gostaria de fazer um pedido!"
            target="_blank"
            className="transition duration-300 ease-in-out hover:scale-125"
          >
            <div className="p-2 rounded-full transition-all duration-300 hover:bg-secondary-300/30 border-2 border-secondary-300 ease-in-out max-md:hidden max-sm:hidden">
              <MessageSquareShareIcon className="h-6 w-6  text-secondary-300" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
