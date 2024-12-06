import React from "react"

export interface FilterSearchProps {
    title: string
    children: React.ReactNode,
    className?: string
}
export function FilterSearch({ children, title, className }: FilterSearchProps) {
    return (
        <li className={`${className} relative px-4 transition-all
         [&>input]:p-3 [&>input]:my-2  [&>input]:rounded-lg [&>input]:outline-none 
  
        `}>
            <p>{title}</p>
            {children}
        </li>
    )
}