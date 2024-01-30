import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary-100/20 mt-24">
      <div className="max-w-7xl mx-auto flex h-24 items-center justify-between  max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:mx-5 ">
        <p>
          Made with 💜 by{" "}
          <a
            className="underline hover:text-blue-500 transition-all duration-300"
            href="https://www.linkedin.com/in/nicolas-bizotto/"
          >
            Bizotto
          </a>
        </p>
        <Image src="/Logo.jpg" alt="Logo" width={60} height={60} />
      </div>
    </footer>
  );
}
