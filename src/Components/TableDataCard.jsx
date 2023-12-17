

const TableDataCard = props => {
    const { tableNumber, ObjectTableNumber} = props

    return (
        <table className="text-center rounded-2xl bg-emerald-600/60" >
            <th className="text-center text-lg">Mesa {tableNumber} </th>
            <tr className="">
                <th className="p-3">Posición en la Mesa</th>
                <th className="p-3">jugador</th>
                <th className="p-3">ID</th>
                <th className="p-3">Puntuación final</th>
            </tr>

        {ObjectTableNumber.map((player, index )=>
         <tr className="bg-white/50">
                <th >{index +1}</th>
                <td >{player.player}</td>
                <td >{player.id}</td>
                <td >{player.points}</td>
            </tr>
        )}    
           
        </table>
    )
}

export default TableDataCard