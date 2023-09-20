
import H1Titles from "./H1Titles"
import TelegramIcon from "./TelegramIcon"
import VTESLink from "./VTESLink"

const Footer = () => {

    return (
        <div className=" bg-black bg-opacity-60
        p-5 mt-20 grid  justify-items-center pb-8
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            
            {/* //TODO add link telegram */}
            <TelegramIcon textTelegram="Nuestro grupo"
             />

        </div>
    )
}

export default Footer