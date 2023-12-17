

const RankingData = props => {
    const {objectTableNumber  } = props

    return (
        <table className="text-center rounded-2xl bg-teal-600/60" >
       
            <tr className="text-xl">
                <th className="p-3">Posición</th>
                <th className="p-3">jugador</th>
                <th className="p-3">ID</th>
                <th className="p-3">Puntuación final</th>
                <th className="p-3">OldSchool</th>


            </tr>

        {objectTableNumber.map((player, index )=>
         <tr className="bg-teal-200 text-lg">
                <th >{index +1}</th>
                <td >{player.name}</td>
                <td >{player.id}</td>
                <td >{player.puntuacion}</td>
                <td className="font-bold" >{player.oldSchool ? 'X' : '' }</td>


            </tr>
        )}    
           
        </table>
    )
}

export default RankingData