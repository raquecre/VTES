import Header from "../Components/Header"
import Faqs from "../Components/Faqs"
import Calendar from "../Components/Calendar"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"



const Home = () => {

    return (
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 bg-fixed ">
            <Header nameCommunity="comunidad VTES Madrid" contactUsText="Escríbenos" />
            <Faqs />
            <Calendar />
            <MeetingPlaces />
            <Footer />
        </div>
    )
}

export default Home