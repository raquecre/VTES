import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"
import Faqs from "../Components/Faqs"

const Home = () => {

    return (
        <div className="bg-[url('https://cutewallpaper.org/28x/v03uqp4iq/185815881.jpg')] bg-fixed ">
            <Header nameCommunity="comunidad San Pato" contactUsText="Escríbenos" />
            <Faqs />
            <Calendar />
            <MeetingPlaces />
            <Footer />
        </div>
    )
}

export default Home