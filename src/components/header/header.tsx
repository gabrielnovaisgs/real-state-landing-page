import Image from "next/image";
import { LinkMenu } from "./link-menu";
import Link from "next/link";

export function Header() {
    return (
        <nav className="flex justify-between  font-sans items-center px-4 py-4">
            <Image src={"/logo-title.svg"} alt="logo" width={200} height={100} />
            <ul className="flex gap-4 text-xl items-center uppercase">
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
        </nav>
    );
}