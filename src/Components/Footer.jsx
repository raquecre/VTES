
import H1Titles from "./H1Titles"
import TelegramIcon from "./TelegramIcon"
import VTESLink from "./VTESLink"

const Footer = () => {

    return (
        <div className=" bg-black/70
        p-5 mt-20 grid  justify-items-center pb-8">
            
            {/* //TODO add link telegram */}
            <TelegramIcon textTelegram="Únete a nuestra comunidad de Telegram"
             />

        </div>
    )
}

export default Footer