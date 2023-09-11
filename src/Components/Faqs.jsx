import CardInitialInfo from "./CardInitialInfo"

const Faqs = props => {

    return (
        <div className="grid justify-around
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <CardInitialInfo title="¿Qué es VTES?" />
            <CardInitialInfo title="¿Quiénes somos?" />
        </div>
    )
}

export default Faqs