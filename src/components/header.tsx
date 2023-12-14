import { InstagramIcon, MessageSquareShareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex items-center justify-between h-24">
      <Image
        src="/Logo.jpg"
        alt="Imagem contendo a logo das empadas Amore"
        width={40}
        height={40}
      />
      <div className="flex justify-center gap-10 items-center">
        <Link className="text-xl" href="#service">
          Serviço
        </Link>
        <Link className="text-xl" href="#menu">
          Cardápio
        </Link>
        <Link className="text-xl" href="#contact">
          Contato
        </Link>
        <Link className="text-xl" href="#sobre-nos">
          Sobre nós
        </Link>
      </div>
      <div className="flex gap-5">
        <InstagramIcon className="w-6 h-6" />
        <MessageSquareShareIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
