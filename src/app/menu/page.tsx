import MenuCard from "@/components/MenuCard";
import { empadas, empadinhas, escondidnho } from "../../components/constants";

export default function Menu() {
  return (
    <div className="max-sm:flex flex-col gap-20 max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:mx-5">
      <section className="mx-auto flex-col flex max-w-7xl h-[100vh] max-[375px]:mt-48 max-sm:mt-48 items-center justify-center space-y-5">
        <h1 className="text-6xl font-alt flex items-center g justify-center max-md:mt-24">
          Cardápio
        </h1>
        <h2 className="text-3xl font-alt flex items-center justify-center">
          Empadas
        </h2>
        <div className="grid grid-cols-2 gap-4 max-sm:flex flex-col">
          {empadas.map((item) => {
            return (
              <MenuCard
                key={item.label}
                label={item.label}
                image={item.image}
                price={item.price}
                grams={item.grams}
              />
            );
          })}
        </div>
      </section>
      <section className="mx-auto flex-col flex max-w-7xl h-[100vh] max-[375px]:mt-48 max-sm:mt-48 items-center justify-center space-y-5">
        <h2 className="text-3xl font-alt flex items-center justify-center">
          Empadinhas
        </h2>
        <div className="grid grid-cols-2 gap-4 max-sm:flex flex-col">
          {empadinhas.map((item) => {
            return (
              <MenuCard
                key={item.label}
                label={item.label}
                image={item.image}
                price={item.price}
                grams={item.grams}
              />
            );
          })}
        </div>
      </section>
      <section className="mx-auto flex-col flex max-w-7xl h-[100vh] max-[375px]:mt-48 max-sm:mt-48 items-center justify-center space-y-5">
        <h2 className="text-3xl font-alt flex items-center justify-center">
          Escondidnhos
        </h2>
        <div className="grid grid-cols-2 gap-4 max-sm:flex flex-col">
          {escondidnho.map((item) => {
            return (
              <MenuCard
                key={item.label}
                label={item.label}
                image={item.image}
                price={item.price}
                grams={item.grams}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
