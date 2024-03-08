import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"
import Faqs from "../Components/Faqs"
import Resources from "../Components/Resources"
import Banner from "../Components/Banner"

const Home = () => {

    return (

        <div className="bg-black bg-fixed  ">
            <Header />
            <div className="flex  flex-col items-center justify-center">
                <Banner
                    title='¡Tardeo de primogénitos!'
                    date="25 de febrero a las 17:00h"
                    line1="Nosotros te enseñamos,"
                    line2="no hace falta que traigas nada"
                    urlImage="https://i.imgur.com/SmR4FLj.jpg"
                />
                <Faqs />
                <div className="grid-cols-2">
                    {/*     <div className=" ">
                        <p className=" text-white"> Nuestrass Actividades</p>
                        <p className=" text-white"> Liga Guarida 2023 VTES</p>
                        <p className=" text-white"> Tareos de primogénitos</p>
                        <p className=" text-white">Encuentros semanales</p>
                    </div> */}
                    <Calendar />
                </div>
                <Resources />
                <MeetingPlaces />
            </div>
            <Footer />
        </div>
    )
}

export default Home