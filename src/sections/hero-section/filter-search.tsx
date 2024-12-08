import React from "react"

export interface FilterSearchProps {
    title: string
    children: React.ReactNode,
    className?: string
}
export function FilterSearch({ children, title, className }: FilterSearchProps) {
    return (
        <li className={`${className} text-center md:text-left relative transition-all
         [&>input]:p-3 [&>input]:my-2  [&>input]:rounded-lg [&>input]:outline-none
  
        `}>
            <p>{title}</p>
            {children}
        </li>
    )
}