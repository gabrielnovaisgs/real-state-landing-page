import Filter from "@/sections/hero-section/filter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      <section id='hero-section' className="flex flex-col justify-evenly p-16 mx-16 
      bg-primary/10  rounded-3xl relative overflow-hidden
      after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary/20
      h-[600px]
      ">
        <Image src="/apartment.png" alt="logo" width={600} height={600}
          className=" absolute bottom-0 right-0 h-full w-3/5 object-contain object-right-bottom"
        />
        <h1 className="z-10 text-4xl w-3/5 font-bold">A maneira mais facil de encontrar a propriedade perfeita</h1>
        <p className="z-10 text-xl w-3/5">Oferecemos um serviço completo para a venda, compra ou aluguel de imóveis.</p>

        <Filter />
      </section>
    </main>
  );
}
