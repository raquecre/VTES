import React, { useState } from 'react';


const CardInitialInfo = props => {
    const { title, urlImage, description } = props;
    const [isOpen, setIsOpen] = useState(false)

    function showDescription() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)

    }


    return (

        <div class="relative flex justify-center items-center m-3 
        sm:flex-col xs:flex-col lg:flex-col"
            onClick={() => setTimeout(showDescription(), 5000)}>
            <img className="hover:blur-sm ease-in duration-300 object-cover w-[1000px] h-[350px] rounded-xl" src={urlImage} alt="background" />
            <div class="absolute bg-black/40 p-5 rounded-xl object-cover  ">
                <p class="text-white font-semibold text-4xl "> {title} </p>
               
                {isOpen &&
                    <div className='ease-in duration-300 text-white text-xl scroll-auto m-5'> {description} </div>}
            </div>
        </div>



    )
}

export default CardInitialInfo