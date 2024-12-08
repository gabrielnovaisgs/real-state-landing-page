
import CommonDestinyGallery from "@/sections/common-destiny/common-destiny-gallery";
import Filter from "@/sections/hero-section/filter";
import RecentlyAddedGallery from "@/sections/recently-added/recently-added-galllery";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="font-sans flex flex-col items-center mx-16 mt-24">
      <section id='hero-section' className="flex flex-col justify-evenly p-16 mx-16 w-full
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
      <section id="common-destiny-section" className="m-16 flex flex-col gap-8 w-fit">
        <h2 className="text-4xl font-bold text-center ">Estamos disponíveis em muitas cidades renomadas.</h2>
        <Link href={`#`} className="self-end align-middle text-primary text-lg relative
        group
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full
        ">Conheça mais destinos <FontAwesomeIcon className="group-hover:translate-x-2 transition-all" icon={faArrowRight} /></Link>
        <CommonDestinyGallery />
      </section>

      <section id="recently-add-section">
        <h2 className="text-4xl font-bold text-center ">Imóveis recentemente adicionados</h2>
        <RecentlyAddedGallery />
      </section>

      <section id='contact-us-section' className="relative overflow-hidden flex flex-col items-start gap-8 w-2/3 p-16 bg-primary/10 rounded-3xl my-16">
        <h2 className="text-4xl font-bold text-center ">Fale conosco</h2>
        <p className="text-left w-1/2">Estamos sempre prontos para ajudar e responder suas perguntas.</p>
        <Image src="/call-center-1.png" alt="logo" width={600} height={600}
          style={{ transform: `rotateY(180deg)` }}
          className="-z-10 absolute bottom-0 right-0 h-full w-full object-contain  object-left
          "
        />
        <div className="-z-10  absolute top-0 left-0 w-full h-full bg-primary/20"> </div>
        <button className="z-10 hover:scale-105 w-fit h-fit duration-300 bg-primary/80 hover:bg-primary transition-all hover:shadow text-white p-2 rounded">Entre em contato</button>
      </section>
    </main>
  );
}
