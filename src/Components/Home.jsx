import Calendar from "./Calendar"
import Header from "./Header"
import MeetingPlaces from "./MeetingPlaces"
import Footer from "./Footer"
import Faqs from "./Faqs"

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