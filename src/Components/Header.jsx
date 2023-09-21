import TelegramIcon from "./TelegramIcon"

const Header = props => {
    const { nameCommunity } = props
    return (

        <div className=" bg-black text-white justify-items-center items-center
        grid justify-center 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1">
           
                <div className="rounded-full p-5 flex justify-center w-[150px]">
                    <img src="https://i.imgur.com/DryhfYx.png" alt="" />
                </div>
                <p className="font-bold 
                2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-3xl xs:text-2xl">{nameCommunity}</p>
            

            <TelegramIcon textTelegram="Comunidad" />

        </div>

    )
}

export default Header