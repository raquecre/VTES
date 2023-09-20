
import React from "react"
import { Link } from "react-router-dom"

const VTESLink = props => {
    const { urlWeb, textWeb, logoWeb, svgIcon } = props

    return (

        <Link className=" w-[200px] rounded-xl m-5
        hover::bg-blue-400 hover:opacity-60 border
        hover:text-blue-600 hover:underline text-white flex items-center gap-4 text-3xl pb-4 font-semibold" to={urlWeb} target="_blank" >

           {/*  <img className=" w-[50px]
            hover::bg-blue-400 hover:opacity-60"
                src={logoWeb} alt="logo de la web" /> */}
            {svgIcon}

            <p> {textWeb} </p>

        </Link>

    )
}
export default VTESLink
