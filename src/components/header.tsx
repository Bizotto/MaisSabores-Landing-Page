import { InstagramIcon, MessageSquareShareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex items-center justify-between h-24 max-sm:mx-4 ">
      <Image
        src="/Logo.jpg"
        alt="Imagem contendo a logo das empadas Amore"
        width={40}
        height={40}
      />
      <div className="flex justify-center gap-10 max-sm:gap-4">
        <Link
          className="text-2xl hover:scale-125 transition duration-300 ease-in-out max-sm:text-base"
          href="#service"
        >
          Serviço
        </Link>
        <Link
          className="text-2xl hover:scale-125 transition duration-300 ease-in-out max-sm:text-base"
          href="#menu"
        >
          Cardápio
        </Link>
        <Link
          className="text-2xl hover:scale-125 transition duration-300 ease-in-out max-sm:text-base"
          href="#contact"
        >
          Contato
        </Link>
        <Link
          className="text-2xl hover:scale-125 transition duration-300 ease-in-out max-sm:text-base"
          href="#sobre-nos"
        >
          Sobre
        </Link>
      </div>
      <div className="flex gap-5 max-sm:gap-2">
        <Link
          className="hover:scale-125 transition duration-300 ease-in-out"
          href="https://www.instagram.com/empadamores_?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <InstagramIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
        </Link>
        <Link
          href=""
          target="_blank"
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <MessageSquareShareIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
        </Link>
      </div>
    </div>
  );
}
