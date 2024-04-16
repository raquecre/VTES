

const TableDataCard = props => {
    const { tableNumber, ObjectTableNumber} = props

    return (
        <table className="text-center rounded bg-emerald-600/60 border-separate border-tools-table-outline border-black border-1 w-full " >
            <tr className="text-center">Mesa {tableNumber} </tr>
            <tr className="">
                <th className="p-2 ">Posición</th>
                <th className="p-2">ID</th>
                <th className="p-2">Jugador</th>
         
            </tr>

        {ObjectTableNumber.map((player, index )=>
         <tr className="bg-white/50">
                <th >{index +1}</th>
                <td >{player.id}</td>
                <td className="p-3" >{player.player}</td>
              
            </tr>
        )}    
           
        </table>
    )
}

export default TableDataCard