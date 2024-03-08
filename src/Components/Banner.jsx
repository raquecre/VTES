

const Banner = props => {
    const { title, date, line1, line2, urlImage } = props;

    return (
        <div
            /* data-aos="zoom-in-right"
            data-aos-duration="1500" */

            className="flex justify-center items-start
        flex-col flex-col flex-col
         max-w-max
        bg-white to-stone-400/90
    
        "
        >
            <img className=" object-none max-w" src={urlImage} alt="" />
            <div className="absolute p-5 rounded-xl object-cover  ">
                <h2 className=" xl:text-3xl lg:text-3xl text-lg font-bold  ">{title}</h2>
                <p className=" xl:text-2xl lg:text-2xl text-sm underline  pb-2">{date}</p>
                <p className="xl:text-xl text-lg">{line1}</p>
                <p className="xl:text-xl">{line2}</p>

            </div>
        </div>
    )
}

export default Banner
