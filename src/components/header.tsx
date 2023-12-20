'use client';
import { HomeIcon, InstagramIcon, MessageSquareShareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathName = usePathname();

  return (
    <div className="flex h-24 items-center justify-between max-sm:mx-4 ">
      <Image
        src="/Logo.jpg"
        alt="Imagem contendo a logo das empadas Amore"
        width={40}
        height={40}
      />

      <div className="flex justify-center gap-10 max-sm:gap-4">
        <Link
          className="text-2xl transition duration-300 ease-in-out hover:scale-125 max-sm:text-base"
          href={`${'/' ? '/#service' : '/'}`}
        >
          Serviço
        </Link>
        <Link
          className="text-2xl transition duration-300 ease-in-out hover:scale-125 max-sm:text-base"
          href="/menu"
        >
          Cardápio
        </Link>
        <Link
          className="text-2xl transition duration-300 ease-in-out hover:scale-125 max-sm:text-base"
          href={`${'/' ? '/#contact' : '/'}`}
        >
          Contato
        </Link>
        <Link
          className="text-2xl transition duration-300 ease-in-out hover:scale-125 max-sm:text-base"
          href="/about"
        >
          Sobre
        </Link>
      </div>
      <div className="flex gap-5 max-sm:gap-2">
        {pathName !== '/' && (
          <Link
            href="/"
            target="_blank"
            className="transition duration-300 ease-in-out hover:scale-125"
          >
            <HomeIcon className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
          </Link>
        )}
        <Link
          className="transition duration-300 ease-in-out hover:scale-125"
          href="https://www.instagram.com/empadamores_?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <InstagramIcon className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
        </Link>
        <Link
          href=""
          target="_blank"
          className="transition duration-300 ease-in-out hover:scale-125"
        >
          <MessageSquareShareIcon className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
        </Link>
      </div>
    </div>
  );
}
