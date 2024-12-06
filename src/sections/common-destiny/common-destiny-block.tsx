import Image from "next/image"
export interface CommonDestinyBlockProps {
    title: string
    imageSrc: string
    id: number
    selectedId: number
    selectThisId: (value: number | ((prevVar: number) => number)) => void
}

export default function CommonDestinyBlock({ title, imageSrc, selectThisId, id, selectedId }: CommonDestinyBlockProps) {

    function handleMouseHover(enter: boolean) {
        selectThisId(enter ? id : -1)

    }

    return (
        <div className={`relative rounded-3xl max-w-[300px] overflow-hidden transition-all duration-500  shadow-black
        ${selectedId === id && selectedId !== -1 ? `-translate-y-2 shadow-lg` : ``}
        `}

            onMouseEnter={() => handleMouseHover(true)} onMouseLeave={() => handleMouseHover(false)}>
            <p className="uppercase absolute left-1/2 -translate-x-1/2 top-4 font-bold text-lg ">{title}</p>

            <Image
                className={`object-cover object-center w-full h-full

                   `}
                src={`/common-destiny/${imageSrc}`} alt={title} width={300} height={600}></Image>
            <div className={`absolute top-0 left-0 w-full h-full transition-all duration-500 cursor-pointer
                 ${selectedId !== id && selectedId !== -1 ? `bg-primary/10 backdrop-blur-sm ` : ``}
                `}></div>
        </div>
    )
}