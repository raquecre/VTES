import H1Titles from "./H1Titles"

const Calendar =() => {

    return(
        <div className="bg-pink-400 flex flex-col justify-center items-center  p-10">
            <H1Titles h1Title="Mira las actividades ya programadas" />
            <div className="bg-red-500 h-[500px] w-[800px] flex justify-center items-center">
                aquí va un calendario
            </div>
        </div>
    )
}

export default Calendar