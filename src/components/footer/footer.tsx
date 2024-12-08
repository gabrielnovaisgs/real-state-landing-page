import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary/20  text-center font-sans p-8 rounded-t-3xl grid grid-cols-4 justify-items-center
        [&_.title]:font-bold 
        ">
            <Image src="/logo-title.svg" alt="logo" width={200} height={100}
                className="col-start-1 row-start-1 justify-self-center"
            />
            <ul className="text-primary flex gap-4 text-2xl col-start-1 row-start-2 self-center justify-self-center">
                <li><Link href={`#`}><FontAwesomeIcon icon={faFacebook} /></Link></li>
                <li><Link href={`#`}><FontAwesomeIcon icon={faTwitter} /></Link></li>
                <li><Link href={`#`}><FontAwesomeIcon icon={faInstagram} /></Link></li>
                <li><Link href={`#`}><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
            </ul>
            <p className="text-sm col-start-1 row-start-3 self-end justify-self-center">Copyright © {new Date().getFullYear()}</p>
            <ul className="col-start-2 row-start-1 row-span-3 flex flex-col gap-2 items-center">
                <li className="title">Conheça o Episum</li>
                <li>Parceiros</li>
                <li>Preços</li>
                <li>Suporte</li>
            </ul>
            <ul className="col-start-3 row-start-1 row-span-3 flex flex-col gap-2 items-center">
                <li className="title">Nossa empresa</li>
                <li>Sobre nos</li>
                <li>Agentes</li>
                <li>Blog</li>
                <li>Contato</li>
            </ul>
            <form className="col-start-4 row-start-1 row-span-3 flex flex-col gap-2 items-center">
                <p className="title">Increva-se</p>
                <label>Se inscreva para ter acesso a ofertas exclusivas</label>
                <div className="p-2 flex gap-2 bg-white rounded-lg justify-center items-center border-primary has-[:focus]:border transition-all">
                    <input type="email" placeholder="Email" className="outline-none" />
                    <button type="submit"> <FontAwesomeIcon icon={faArrowCircleRight} size="2xl" className="text-primary" /></button>
                </div>
            </form>
        </footer>
    )
}