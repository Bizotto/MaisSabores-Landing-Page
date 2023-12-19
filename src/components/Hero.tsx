import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto space-y-5 h-[calc(100vh-96px)] flex justify-center items-center">
      <div className="text-center flex flex-col gap-8 items-center md:text-start justify-center md:items-start">
        <h1 className="text-9xl max-sm:text-6xl">
          Empadas <br /> Amore
        </h1>
        <h2 className="text-2xl">
          Venha conhecer os deliciosos sabores das empadas caseiras Amore!
          <br /> Aqui, Criamos uma experiencia mais do que gastronômica. <br />
        </h2>
        <div className="flex flex-col md:flex-row gap-5 items-center text-xl">
          <Link
            className="text-xl border border-tertiary rounded-2xl p-4 hover:bg-[#0001] hover:scale-110 transition-all duration-300"
            href="/"
          >
            <p>Encomende!</p>
          </Link>
          <p>Feitinhos com muito Amor!!</p>
        </div>
      </div>

      <div>
        <Image
          alt="Imagem contendo a logo das empadas Amore"
          src="https://picsum.photos/800"
          width={600}
          height={800}
          className="rounded-3xl shadow-black/50 shadow-md hidden lg:block"
        />
      </div>
    </section>
  );
}
