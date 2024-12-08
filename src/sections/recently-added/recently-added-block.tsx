import Image from "next/image"

export interface RecentlyAddedBlockProps {
    imageUrl: string
    price: number
    id: number
    address: string
    owner: string
}

export default function RecentlyAddedBlock({ imageUrl, price, id, address, owner }: RecentlyAddedBlockProps) {
    return (
        <div className="border p-4 rounded-xl grid grid-cols-[7rem_1fr] gap-2 cursor-pointer
            hover:bg-primary/10 transition-all items-center duration-300 hover:border-primary/80 hover:shadow-md hover:-translate-y-2
        ">
            <Image src={`/recently-added/${imageUrl}`} alt={`Imagem do imovel ${id}`} width={150} height={191}
                className="col-start-1 row-span-3 object-cover object-center rounded-lg w-full h-32"
            />

            <p className="col-start-2 justify-self-end font-bold ">{address}</p>
            <p className="col-start-2 justify-self-end text-sm ">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p className="col-start-2 justify-self-end text-sm ">Postado por: {owner}</p>


        </div>
    )
}