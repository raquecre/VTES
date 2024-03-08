import Header from "../Components/Header"
import Footer from "../Components/Footer"
import H1Titles from "../Components/H1Titles"
import TotalPlayers from "../Components/data/TotalPlayers"
import RankingData from "../Components/RankingData"
import journeyJanuary from "../Components/data/DataPlayers"
import TableDataCard from "../Components/TableDataCard"
import journeyFebruary from "../Components/data/DataPlayers"
import Banner from "../Components/Banner"

const League = () => {
    return (

        <div className="bg-gray-600 bg-fixed  ">
            <Header />
            <div className="flex flex-col items-center justify-center">
                
            <Banner
                    title='Partidas de liga: Febrero'
                    date=""
                    line1="Juega tu partida antes de que finalice el mes"
                    line2="¡No te olvides de rellenar tu hoja con los resultados!"
                    urlImage="https://i.imgur.com/SmR4FLj.jpg"
                />

        
                <div className="grid 
               2xl:grid-cols-2 xl:grid-cols-2 pt-6 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 
                items-center justify-center gap-10">
                  <TableDataCard tableNumber={1} ObjectTableNumber={journeyFebruary.mesa1} /> 
                  <TableDataCard tableNumber={2} ObjectTableNumber={journeyFebruary.mesa2} /> 
                  <TableDataCard tableNumber={3} ObjectTableNumber={journeyFebruary.mesa3} /> 
                  <TableDataCard tableNumber={4} ObjectTableNumber={journeyFebruary.mesa4} /> 

                </div>
                <H1Titles h1Title="Clasificación" ></H1Titles>
                <RankingData objectTableNumber={TotalPlayers} />

            </div>
            <Footer />
        </div>
    )
}

export default League