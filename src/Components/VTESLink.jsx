
import React from "react"
import { Link } from "react-router-dom"

const VTESLink = props => {
    const { urlWeb, textWeb } = props

    return (

        <Link className="hover:text-blue-600 hover:underline text-white flex items-center gap-2 text-2xl font-semibold" to={urlWeb} target="_blank" >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>

            <p> {textWeb} </p>

        </Link>

    )
}
export default VTESLink
