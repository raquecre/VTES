import TelegramIcon from "./TelegramIcon"

const Header = props => {
    const { nameCommunity } = props
    return (

        <div className=" bg-black text-white justify-items-center items-center
        flex justify-around p-2">

            <div className="rounded-full p-5 flex justify-center w-[150px]">
                <img src="https://i.imgur.com/DryhfYx.png" alt="shop's logo" />
            </div>

            <p className="font-bold 
                lg:text-3xl md:text-3xl text-xl ">{nameCommunity}</p>

            <div className="hidden xl:block md:block lg:block">
                <TelegramIcon textTelegram="Comunidad" />
            </div> 

        </div>

    )
}

export default Header