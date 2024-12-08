import Link from "next/link";
import RecentlyAddedBlock, { RecentlyAddedBlockProps } from "./recently-added-block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const recentlyAddedProperties: RecentlyAddedBlockProps[] = [
    {
        imageUrl: "building-1.jpg", // Replace with the URL or local path to the generated image
        price: 1200,
        id: 101,
        address: "123 Main Street, Downtown City",
        owner: "John Doe"
    },
    {
        imageUrl: "building-2.jpg",
        price: 950,
        id: 102,
        address: "456 Elm Drive, Suburban Area",
        owner: "Jane Smith"
    },
    {
        imageUrl: "building-3.jpg",
        price: 2300,
        id: 103,
        address: "789 Ocean View Avenue, Beachside",
        owner: "Ocean Rentals Co."
    },
    {
        imageUrl: "building-4.jpg",
        price: 1500,
        id: 104,
        address: "321 Park Lane, Green District",
        owner: "Eco Homes Inc."
    },
    {
        imageUrl: "building-5.jpg",
        price: 1800,
        id: 105,
        address: "654 Lakefront Boulevard, Waterfront Estates",
        owner: "Lakeside Rentals"
    }
];
export default function RecentlyAddedGallery() {
    return (
        <div className="flex flex-col md:grid grid-cols-2  gap-4 mt-16">
            {recentlyAddedProperties.map((property) => (
                <RecentlyAddedBlock
                    key={property.id}
                    imageUrl={property.imageUrl}
                    price={property.price}
                    id={property.id}
                    address={property.address}
                    owner={property.owner}
                />
            ))}
            <div>
                <div className="border group p-4 rounded-xl flex items-center justify-center h-full cursor-pointer
            hover:bg-primary/10 transition-all duration-300 hover:border-primary/80 hover:shadow-md hover:-translate-y-2
        ">
                    <Link href={`#`} className="text-primary text-lg relative group-hover:font-bold transition-all duration-300">Conheça mais imóveis
                        <span className="w-4 inline-block"></span>
                        <FontAwesomeIcon className="group-hover:translate-x-2 transition-all duration-300 group-hover:font-bold" icon={faArrowRight} /></Link>

                </div>
            </div>
        </div>
    )
}