import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex h-[100vh] max-w-7xl items-center justify-center max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:mx-5">
      <div className="flex flex-col items-center justify-center gap-8 text-center max-sm:mt-24 max-[375px]:mt-24 md:items-start md:text-start">
        <h1 className="text-9xl max-sm:text-6xl font-alt">
          Empada <br /> <p className="text-8xl max-sm:text-4xl">Mais sabores</p>
        </h1>

        <h2 className="text-2xl">
          Venha conhecer os deliciosos sabores das empadas caseiras e muito mais
          sabores!
          <br /> Aqui, Criamos uma experiencia mais do que gastronômica. <br />
        </h2>

        <div className="flex flex-col items-center gap-5 text-xl md:flex-row">
          <Link
            className="border-tertiary rounded-2xl border p-4 text-xl transition-all duration-300 hover:scale-110 hover:bg-[#0001]"
            href="/menu"
          >
            <p>Encomende!</p>
          </Link>
          <p>Feitinhos com muito Amor!!</p>
        </div>
      </div>

      <div>
        <Image
          alt="Imagem contendo a logo das empadas Mais Sabores"
          src="https://picsum.photos/800"
          width={600}
          height={800}
          className="hidden rounded-3xl shadow-md shadow-black/50 lg:block"
        />
      </div>
    </section>
  );
}
