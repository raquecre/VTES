import Header from "../Components/Header"
import Footer from "../Components/Footer"
import H1Titles from "../Components/H1Titles"
import TotalPlayers from "../Components/data/TotalPlayers"
import RankingData from "../Components/RankingData"
import TableDataCard from "../Components/TableDataCard"
import journeyApril from "../Components/data/DataPlayers"

const League = () => {
    return (

        <div className="bg-gray-400 bg-fixed  ">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <H1Titles h1Title="Jornada Activa: del 15 abril al 31 mayo" ></H1Titles>
                <div className="grid 
               2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 
                items-center justify-center gap-10">
                  <TableDataCard tableNumber={1} ObjectTableNumber={journeyApril.mesa1} /> 
                  <TableDataCard tableNumber={2} ObjectTableNumber={journeyApril.mesa2} /> 
                  <TableDataCard tableNumber={3} ObjectTableNumber={journeyApril.mesa3} /> 
                  <TableDataCard tableNumber={4} ObjectTableNumber={journeyApril.mesa4} /> 

                </div>
                <div className="m-5"></div>
                <H1Titles h1Title="Clasificación" ></H1Titles>
                <RankingData objectTableNumber={TotalPlayers} />

            </div>
            <Footer />
        </div>
    )
}

export default League