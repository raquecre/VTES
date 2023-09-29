import React, { useState } from 'react';


const CardInitialInfo = props => {
    const { title, urlImage, description } = props;
    const [isOpen, setIsOpen] = useState(false)

    function showDescription() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)

    }
    
    return (

        <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"

            className="relative flex justify-center items-center m-2
        sm:flex-col xs:flex-col lg:flex-col"
            onClick={() => setTimeout(showDescription(), 5000)}>
            <img className={[isOpen ? 'addBlur' : 'deleteBlur']} src={urlImage} alt="background" />
            <div className="absolute bg-black/60 p-5 rounded-xl object-cover  ">
                <p className="text-white font-semibold text-4xl "> {title} </p>

                {isOpen &&
                    <div className='ease-in duration-300 text-white text-xl scroll-auto m-5'> {description} </div>}
            </div>
        </div>



    )
}

export default CardInitialInfo