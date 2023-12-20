import { empadas, empadinhas } from "../../components/constants";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <section className="mx-auto flex max-w-7xl h-[calc(100vh-96px)] items-center justify-center space-y-5">
        <div className="flex gap-5 flex-col">
          <h1 className="text-7xl flex items-center justify-center">
            Cardápio
          </h1>
          <h2 className="text-4xl flex items-center justify-center">Empadas</h2>

          <div className="grid grid-cols-2 gap-4">
            {empadas.map((item) => {
              return (
                <div className="flex gap-2 items-center" key={item.label}>
                  <Image
                    className="rounded-md"
                    src="https://picsum.photos/200"
                    alt={item.label}
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl">{item.label}</p>
                    <p className="text-2xl">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl items-center justify-center space-y-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl flex items-center justify-center">
            Empadinhas
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {empadinhas.map((item) => {
              return (
                <div className="flex gap-2 items-center" key={item.label}>
                  <Image
                    className="rounded-md"
                    src="https://picsum.photos/200"
                    alt={item.label}
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl">{item.label}</p>
                    <p className="text-2xl">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
