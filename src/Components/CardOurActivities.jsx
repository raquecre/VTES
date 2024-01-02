
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CardOurActivities = props => {
    const { urlWeb, infoWeb, titleWeb, preInfo, urlImage} = props


    const [isOpen, setIsOpen] = useState(false)

    function showDescription() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)

    }

    return (
        /*   <Link to={urlWeb} target="_blank"></Link> */

        <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            onClick={() => setTimeout(showDescription(), 5000)}
            className=" text-black relative flex justify-center items-center m-2 w-1/2 "
        >
            <img className="rounded-xl" src={urlImage} alt="" />

            <div className="absolute bg-gray-400 bg-opacity-70 rounded-xl object-cover p-3">

                <h3 className=" font-bold  duration-300 text-3xl"> {titleWeb} </h3>
                <p className=' font-semibold text-md'>{preInfo}</p>
                {isOpen &&
                    <div className='ease-in duration-300  scroll-auto text-left'>
                        <p className='text-md '>
                            {infoWeb}
                        </p>
                   
                    </div>}
            </div>
        </div>




    )
}
export default CardOurActivities
