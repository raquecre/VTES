import ItemNavigation from "./ItemNavigation"
import TelegramIcon from "./TelegramIcon"

const Header = () => {
    
    return (

        <div className=" bg-black text-white justify-items-center items-center
        flex justify-around p-2">

            <div className="rounded-full p-5 flex justify-center w-[150px]">
                <img src="https://i.imgur.com/DryhfYx.png" alt="shop's logo" />
            </div>

            <p className="font-bold 
                lg:text-3xl md:text-3xl text-xl ">VTES La Guarida</p>

           <div className="flex gap-8">
           <ItemNavigation text="Home" link='/'/>

                <ItemNavigation text="Actividades" link='/nuestras-actividades'/>
                <ItemNavigation text="Liga" link="/liga-2024-vtesGuarida"/>
                <ItemNavigation text="Telegram" link="https://t.me/+n7hfNb6ZDII3MTM0" />


           </div>
            
             {/*    <TelegramIcon textTelegram="Comunidad" /> */}
            </div>


    )
}

export default Header


