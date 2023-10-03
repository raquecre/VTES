import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"
import Faqs from "../Components/Faqs"
import Resources from "../Components/Resources"

const Home = () => {

    return (
        <div className="bg-gradient-to-r from-emerald-800/90 to-teal-800/90 bg-fixed">
            <Header nameCommunity="VTES La Guarida" contactUsText="Escríbenos" />
            <div className="p-6">
                <Faqs />
                <Calendar />
                <Resources />
                <MeetingPlaces />
            </div>
            <Footer />
        </div>
    )
}

export default Home