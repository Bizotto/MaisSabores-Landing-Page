import Hero from "@/components/Hero";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main className="max-sm:mx-4">
      <Hero />
      <div className="flex gap-10 flex-col">
        <Service />
      </div>
    </main>
  );
}
