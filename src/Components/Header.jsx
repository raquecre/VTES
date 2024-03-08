import { Link } from "react-router-dom"
import ItemNavigation from "./ItemNavigation"


const Header = () => {

    return (

        <div className=" bg-black text-white justify-items-center items-center
        flex justify-around">

            <Link to="/" className="rounded-full p-2 flex justify-center w-[150px]  ">
                <img src="https://i.imgur.com/DryhfYx.png" alt="shop's logo" />
            </Link>

            <Link to="/">
                <p className="font-bold p-6
                text-2xl   ">VTES</p>
            </Link>

            <div className="flex gap-8">
                <ItemNavigation text="Liga" link='/liga-2024-vtesGuarida' />
{/*                 <ItemNavigation text="Actividades" link='/nuestras-actividades' /> */}
                <ItemNavigation text="Telegram" link="https://t.me/+n7hfNb6ZDII3MTM0" />
            </div>

            {/*    <TelegramIcon textTelegram="Comunidad" /> */}
        </div>


    )
}

export default Header


