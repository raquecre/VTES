import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import H1Titles from "../Components/H1Titles"

const League = () => {

    return (

        <div className="bg-gradient-to-r from-emerald-800/90 to-teal-800/90 bg-fixed  ">
            <Header />
            <div className="flex  flex-col items-center justify-center">
                <H1Titles h1Title="Jornada Activa" ></H1Titles>     
                <p>aqui va la lista de mesas</p>
                
                <H1Titles h1Title="Clasificación" ></H1Titles>          

            </div>
            <Footer />
        </div>
    )
}

export default League