'use client'

import { useEffect, useState } from "react";
import { FilterSearch } from "./filter-search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
    enum FilterType {
        rent,
        buy,
        sell
    }

    const [selectedFilter, setSelectedFilter] = useState({
        left: 0,
        filter: FilterType.rent
    });
    useEffect(() => {
        console.log(selectedFilter)
    }, [selectedFilter])

    function changeFilter(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, filterType: FilterType) {
        const element = event.currentTarget;

        setSelectedFilter({
            left: element.offsetLeft,
            filter: filterType
        })
    }

    return (
        <div className={`mt-8 z-10 relative flex gap-4 rounded-b-2xl 
        w-fit p-8 bg-white/50 backdrop-blur-sm transition-all durtation-500
        ${selectedFilter.left === 0 ? `rounded-tr-2xl` : `rounded-t-2xl`}
        `} >
            <ul className={`absolute left-0 flex -top-[calc(2.5rem)] gap-4 
          [&>*]:w-28 [&>*]:uppercase [&>*]:text-center [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-t-xl [&>*]:z-10 
          `}

            >
                <span
                    style={{ left: selectedFilter.left }}
                    className="block absolute  w-28 h-full bottom-0 rounded-t-2xl bg-white/50 backdrop-blur-sm
                    transition-all duration-300
                    "></span>
                <button onClick={(e) => changeFilter(e, FilterType.rent)} className={`transition-all 
                    ${selectedFilter.filter === FilterType.rent ? `font-semibold` : `text-black/50`}`}>Alugar</button>
                <button onClick={(e) => changeFilter(e, FilterType.buy)} className={`transition-all 
                    ${selectedFilter.filter === FilterType.buy ? `font-semibold` : `text-black/50`}`}>Comprar</button>
                <button onClick={(e) => changeFilter(e, FilterType.sell)} className={`transition-all 
                    ${selectedFilter.filter === FilterType.sell ? `font-semibold` : `text-black/50`}`}>Vender</button>
            </ul>
            <ul className="flex gap-4 justify-evenly items-center          
          ">

                <FilterSearch title="Localização">
                    <input type="text" placeholder="Escolha sua Cidade"
                        className="focus:shadow-md transition-all duration-300"
                    />
                </FilterSearch>
                <span className="w-[1px] h-full bg-gray-400/70 rounded-full"> </span>
                <FilterSearch title="Tipo de propriedade">
                    <input type="text" placeholder="Escolha o tipo"
                        className="focus:shadow-md transition-all duration-300" />
                </FilterSearch>
                <span className="w-[1px] h-full bg-gray-400/70 rounded-full"> </span>
                <FilterSearch title="Faixa de preco" className="">

                    <div className="flex gap-4 items-center">
                        <input type="range" className="range"></input>

                        <input type="number"
                            min={0}
                            required
                            className="focus:shadow-md transition-all duration-300 rounded-lg p-3 my-2 w-fit max-w-32 outline-none"
                        ></input>
                    </div>

                </FilterSearch>           <li>
                    <button className="w-12 h-12 rounded-lg mt-6 bg-primary/80 hover:bg-primary transition-colors text-white"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
                </li>
            </ul>
        </div>
    );
}