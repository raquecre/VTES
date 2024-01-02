import Header from "../Components/Header"
import Footer from "../Components/Footer"
import H1Titles from "../Components/H1Titles"
import TotalPlayers from "../Components/data/TotalPlayers"
import RankingData from "../Components/RankingData"
import journeyJanuary from "../Components/data/DataPlayers"
import TableDataCard from "../Components/TableDataCard"

const League = () => {
    return (

        <div className="bg-gradient-to-r from-emerald-800/90 to-teal-800/90 bg-fixed  ">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <H1Titles h1Title="Jornada Activa: Enero" ></H1Titles>
                <div className="grid 
               2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 
                items-center justify-center gap-10">
                  <TableDataCard tableNumber={1} ObjectTableNumber={journeyJanuary.mesa1} /> 
                  <TableDataCard tableNumber={2} ObjectTableNumber={journeyJanuary.mesa2} /> 
                  <TableDataCard tableNumber={3} ObjectTableNumber={journeyJanuary.mesa3} /> 
                  <TableDataCard tableNumber={4} ObjectTableNumber={journeyJanuary.mesa4} /> 

                </div>
                <H1Titles h1Title="Clasificación" ></H1Titles>
                <RankingData objectTableNumber={TotalPlayers} />

            </div>
            <Footer />
        </div>
    )
}

export default League