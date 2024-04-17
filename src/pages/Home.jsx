import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import MeetingPlaces from "../Components/MeetingPlaces"
import Footer from "../Components/Footer"
import Faq from "../Components/Faq"
import Resources from "../Components/Resources"
import Banner from "../Components/Banner"

const Home = () => {

  return (

    <div className="bg-gray-400 bg-fixed ">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Banner />
        <div className="m-5">

          <Faq
            title="¿Qué es VTES?"
            description="Es un juego de cartas para 5 personas que te permite imprimir aquellas que no tienes.
                Los Matusalenes compiten por imponerse frente a los otros. 
                Para conseguirlo, cada Matusalén se apoyará de una cripta con vampiros para poder desarrollar las acciones en mesa, contando con herramientas de apoyo que se las otorgará el mazo de biblioteca."
          />
          <Faq title="¿Quiénes somos?"
            description="Somos una Comunidad de jugadores que nos reunimos en La Guarida (Madrid). Nuestro objetivo es hacer esta comunidad en un ambiente de cooperación y apertura.
                  Organizamos partidas una vez a la semana y siempre estamos abiertos a nuevas incorporaciones. La forma de mantenernos en contacto es gracias a Telegram. "
          />

        </div>

        <Calendar />
        {/*   <Resources /> */}
        <MeetingPlaces />
      </div>
      <Footer />
    </div>
  )
}

export default Home