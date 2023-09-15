import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"
import Faqs from "../Components/Faqs"

const Home = () => {

    return (
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 ">
            <Header nameCommunity="comunidad San Pato" contactUsText="Escríbenos" />
            <Faqs />
            <Calendar />
            <MeetingPlaces />
            <Footer />
        </div>
    )
}

export default Home