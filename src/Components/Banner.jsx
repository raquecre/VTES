import { Link } from "react-router-dom"
import H1Titles from "./H1Titles"

const Banner = props => {
    const { textBtn, urlSub } = props

    return (
        <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"

            className="relative rounded-xl flex justify-center m-2 items-start
        sm:flex-col xs:flex-col lg:flex-col"
        >
            <img className="rounded-xl object-none xl:w-[1200px] xl:h-[350px] lg:w-[900px] lg:h-[200px] sm:w-[700px] sm:h-[200px] w-[500px] h-[150px]" src="https://i.imgur.com/SmR4FLj.jpg" alt="" />
            <div className="absolute p-5 rounded-xl object-cover  ">
                <h2 className=" xl:text-3xl lg:text-3xl text-lg font-bold  ">¡Tardeo de primogénitos!</h2>
                <p className=" xl:text-2xl lg:text-2xl text-sm underline  pb-2">3 de diciembre a las 17:00</p>
                <p className="xl:text-xl text-lg">Nosotros te enseñamos,</p>
                <p className="xl:text-xl">no hace falta que traigas nada</p>

            </div>
        </div>
    )
}

{/*  <div className="absolute bg-black/60 p-5 rounded-xl object-cover  ">
</div> */}
<p></p>

export default Banner


{/*  <div className=" text-black bg-white rounded-xl 
 flex flex-col justify-center text-xl xl:w-[1200px] xl:h-[350px] lg:w-[900px] lg:h-[200px] sm:w-[700px] sm:h-[200px] w-[500px] h-[150px] ">
 </div> */}