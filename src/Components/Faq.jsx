import CardInitialInfo from "./CardInitialInfo"
import deflexion from "../Backgroundss/deflexion.jpg"
import gangrelNY from "../Backgroundss/gangrelNewYork.jpg"
import { VscAdd } from "react-icons/vsc";
import React, { useState } from 'react';
import { VscChromeMinimize } from "react-icons/vsc";



const Faq = props => {
    const { title, description } = props;

    const [isOpen, setIsOpen] = useState(false)

    function showDescription() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)

    }

    return (
        <div
            onClick={() => setTimeout(showDescription(), 5000)}
            className="m-4 p-5 bg-white bg-opacity-80 font-semibold text-xl
            xl:w-[1200px]  lg:w-[900px]  sm:w-[700px]  w-[350px] 
            rounded-xl">
            <div className="flex justify-between items-center">
                <p className="ease-in duration-300 text-black text-xl m-1">{title}</p>
                {!isOpen &&
                    <VscAdd stystyle={{ color: 'black', fontSize: '25px', }} />
                }
                {isOpen &&
                    <VscChromeMinimize stystyle={{ color: 'black', fontSize: '25px', }} />
                }
            </div>

            {isOpen &&
                <p className='ease-in duration-300 text-black text-sm font-normal m-1'> {description} </p>}
        </div>

    )
}
export default Faq

