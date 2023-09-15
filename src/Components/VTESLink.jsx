
import React from "react"
import { Link } from "react-router-dom"

const VTESLink = props => {
    const { urlWeb, textWeb, logoWeb } = props

    return (

        <Link className="hover::bg-blue-400 hover:opacity-60
        hover:text-blue-600 hover:underline text-white flex items-center gap-4 text-3xl pb-4 font-semibold" to={urlWeb} target="_blank" >

            <img className=" w-[50px]
            hover::bg-blue-400 hover:opacity-60" 
            src={logoWeb} alt="logo de la web"/>
                
            <p> {textWeb} </p>

        </Link>

    )
}
export default VTESLink
