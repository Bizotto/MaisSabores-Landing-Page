import { Header } from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="max-w-7xl mx-auto">
        <Header />
      </header>

      <section className="max-w-7xl mx-auto space-y-5 h-[calc(100vh-96px)] flex flex-col justify-center items-center">
        <div>
          <h1 className={`text-9xl text-start`}>
            Empadas <br /> Amore
          </h1>
          <h2 className="text-2xl mb-5">
            Venha conhecer os deliciosos sabores das empadas caseiras Amore!
            <br /> Aqui, Criamos uma experiencia mais do que gastronômica.{' '}
            <br />
          </h2>
          <div className="flex gap-5 items-center text-xl">
            <Link
              className="text-xl border border-tertiary rounded-2xl p-4 hover:bg-zinc-700 hover:text-white transition-all duration-300"
              href="/"
            >
              Faça sua encomenda!
            </Link>
            <p>Feitinhos com muito Amor!!</p>
          </div>
        </div>
      </section>

      <section id="service">dasuidhiasudsa</section>
    </main>
  );
}
