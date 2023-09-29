

import QrGuarida from "./Qr"

import TelegramIcon from "./TelegramIcon"


const Footer = () => {

    return (
        <div className=" bg-black/70
        p-5 mt-20 grid  justify-items-center pb-8">
            
            <TelegramIcon textTelegram="Únete a nuestra comunidad de Telegram"
             />
             <QrGuarida/>
           
        </div>
    )
}

export default Footer