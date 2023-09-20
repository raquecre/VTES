
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const VTESLink = props => {
    const { urlWeb, infoWeb, titleWeb, } = props
    const { title, urlImage, description } = props;

    const [isOpen, setIsOpen] = useState(false)

    function showDescription() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)

    }

    return (
        /*   <Link to={urlWeb} target="_blank"></Link> */

        <div
        data-aos="zoom-in-right"
            data-aos-duration="1500"
            /* data-aos="zoom-in-right"
            data-aos-duration="1500"
 */
            onClick={() => setTimeout(showDescription(), 5000)}
            className="  relative flex justify-center items-center "
        >
            <img className={[isOpen ? 'addBlur' : 'deleteBlur']} src={urlImage} alt="" />

            <div className="absolute bg-black/70 rounded-xl object-cover p-3">

                <h3 className="text-white font-semibold hover:text-4xl duration-300 text-3xl"> {titleWeb} </h3>
                {isOpen &&
                    <div className='ease-in duration-300 text-white scroll-auto text-left'>
                        <p className='text-lg '>
                            {infoWeb}
                        </p>
                        <Link target='_blank' to={urlWeb}
                            className='underline text-blue-600 text-right text-xl
                            hover:decoration-double hover:text-blue-800'
                            >
                            {titleWeb}
                        </Link>
                    </div>}
            </div>
        </div>




    )
}
export default VTESLink
