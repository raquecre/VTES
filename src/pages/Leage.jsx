import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import H1Titles from "../Components/H1Titles"
import TableDataCard from "../Components/TableDataCard"
import Mesa1  from "../Components/data/DataFalsePlayers"
import TotalPlayers  from "../Components/data/TotalPlayers"

import RankingData from "../Components/RankingData"

const League = () => {


    return (

        <div className="bg-gradient-to-r from-emerald-800/90 to-teal-800/90 bg-fixed  ">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <H1Titles h1Title="Jornada Activa: Enero" ></H1Titles>
                <div className="grid grid-cols-2 items-center justify-center gap-10">
                    <TableDataCard tableNumber={1} ObjectTableNumber={Mesa1} />
                    <TableDataCard tableNumber={2} ObjectTableNumber={Mesa1} />
                    <TableDataCard tableNumber={3} ObjectTableNumber={Mesa1} />
                    <TableDataCard tableNumber={4} ObjectTableNumber={Mesa1} />

                </div>
                <H1Titles h1Title="Clasificación" ></H1Titles>
         <RankingData objectTableNumber={TotalPlayers} />

            </div>
            <Footer />
        </div>
    )
}

export default League