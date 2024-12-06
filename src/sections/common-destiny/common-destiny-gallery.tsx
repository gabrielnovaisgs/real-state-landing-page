'use client'
import { useState } from "react";
import CommonDestinyBlock, { CommonDestinyBlockProps } from "./common-destiny-block";

const comomDestiny: Pick<CommonDestinyBlockProps, 'title' | 'imageSrc'>[] = [
    {
        title: `São Paulo`,
        imageSrc: `sao-paulo.jpg`
    },
    {
        title: `Rio de Janeiro`,
        imageSrc: `rio-de-janeiro.jpg`
    },
    {
        title: `Curitiba`,
        imageSrc: `curitiba.jpg`
    },
    {
        title: `Brasilia`,
        imageSrc: `brasilia.jpg`
    }
]
export default function CommonDestinyGallery() {
    const [selectedIdDestiny, setSelectedDestiny] = useState(-1)


    return (
        <div className="flex gap-4 justify-center ">

            {comomDestiny.map((destiny, index) => (
                <CommonDestinyBlock key={index} {...destiny} id={index} selectThisId={setSelectedDestiny} selectedId={selectedIdDestiny} />
            ))}

        </div>
    )
}