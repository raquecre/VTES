import CardInitialInfo from "./CardInitialInfo"
import deflexion from "../Backgroundss/deflexion.jpg"
import gangrelNY from "../Backgroundss/gangrelNewYork.jpg"



const Faqs = props => {

    return (
        <div className="grid justify-around 
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <CardInitialInfo
                title="¿Qué es VTES?"
                urlImage={gangrelNY}
                description="Es un juego de cartas para 5 personas que te permite imprimir aquellas que no tienes.
                Los Matusalenes compiten porimponerse frente a los otros. 
                Para conseguirlo, cada Matusalén se apoyará de una cripta con vampiros para poder desarrollar las acciones en mesa, contando con herramientas de apoyo que se las otorgará el mazo de biblioteca.  "
            />

            <CardInitialInfo title="¿Quiénes somos?"
                urlImage={deflexion}
                description="Somos una Comunidad de jugadores que nos reunimos en La Guarida (Madrid). Nuestro objetivo es hacer esta comunidad en un ambiente de cooperación y apertura.
                 Organizamos partidas una vez a la semana y siempre estamos abiertos a nuevas incorporaciones. La forma de mantenernos en contacto es gracias a Telegram. "

            />
        </div>
    )
}
export default Faqs

