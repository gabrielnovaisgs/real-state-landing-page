import Link from "next/link";

export function LinkMenu({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <li className="tracking-wide relative
        hover:text-primary transition-all
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:transition-all after:duration-500 hover:after:w-full rounded-full
        ">
            <Link href="#">{children}</Link>
        </li>
    )
}