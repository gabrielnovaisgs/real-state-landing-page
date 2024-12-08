import Image from "next/image";
import { LinkMenu } from "./link-menu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <nav className="grid grid-cols-3 md:flex justify-between  font-sans items-center md:px-16 md:py-2 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <Image src={"/logo-title.svg"} alt="logo" width={200} height={100}
                className="h-16 col-start-2 "
            />
            <ul className="hidden md:flex gap-4 text-lg items-center uppercase">
                <LinkMenu>Home</LinkMenu>
                <LinkMenu>Propriedades</LinkMenu>
                <LinkMenu>Agentes</LinkMenu>
                <LinkMenu>Contato</LinkMenu>
                <li className="text-primary px-4 py-2 border border-primary rounded-xl
                hover:text-white hover:bg-primary transition-all duration-500
                ">
                    <Link className="text-center" href={`#`}>Log in</Link>
                </li>
            </ul>
            <button className="md:hidden col-start-3 justify-self-end mr-4 text-primary"><FontAwesomeIcon icon={faBars} size="2xl" /></button>
        </nav>
    );
}