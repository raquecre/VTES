

const RankingData = props => {
    const {objectTableNumber  } = props

    return (
        <table className="text-center  rounded bg-gray-500/50 border-separate border-tools-table-outline border-black border-1 " >
       
            <tr className="text-xl ">
                <th className="text-xl p-4">Posición</th>
                <th className="w-20 ">ID</th>
                <th className="w-30">Jugador</th>
                <th className="w-30 p-4">Puntuación</th>
               {/*  <th className="p-2 text-lg">OldSchool</th> */}


            </tr>

        {objectTableNumber.map((player, index )=>
         <tr className="bg-white/90 text-lg">
                <th >{index +1}</th>
                <td className="" >{player.id}</td>
                <td className="p-1" >{player.player}</td>
                <td className="">{player.points}</td>
                


            </tr>
        )}    
           
        </table>
    )
}

export default RankingData