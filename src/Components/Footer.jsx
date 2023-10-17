

import QrTelegram from "./QrTelegram"

import TelegramIcon from "./TelegramIcon"


const Footer = () => {

    return (
        <div className=" bg-black/70
        p-5 mt-20 flex gap-20 justify-center p-3">

            <TelegramIcon textTelegram="Únete a nuestra comunidad de Telegram"
            />
            <div className="hidden xl:block md:block lg:block">
                <QrTelegram />
            </div>

        </div>
    )
}

export default Footer