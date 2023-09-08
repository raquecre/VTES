import Calendar from "./Calendar"
import CardInitialInfo from "./CardInitialInfo"
import Header from "./Header"
import MeetingPlaces from "./MeetingPlaces"
import Footer from "./Footer"

const Home = () => {

    return (
        <div className="">
            <Header nameCommunity="comunidad San Pato" contactUsText="Escríbenos" />
            <div className="flex justify-around">
                <CardInitialInfo title="¿Qué es VTES?"/>
                <CardInitialInfo title="¿Quiénes somos?"/>
            </div>
            <Calendar />
            <MeetingPlaces/>
            <Footer/>
        </div>
    )
}

export default Home