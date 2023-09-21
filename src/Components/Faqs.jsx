import CardInitialInfo from "./CardInitialInfo"

const Faqs = props => {

    return (
        <div className="grid justify-around m-5 
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <CardInitialInfo title="¿Qué es VTES?"
                urlImage="https://c4.wallpaperflare.com/wallpaper/952/300/55/vampire-the-masquerade-coteries-of-new-york-new-york-city-gangrel-hd-wallpaper-preview.jpg"
                description="Se trata de un juego de cartas multijugador (5 personas). 
                Los Matusalenes compiten por hacer perdurar su estirpe frente a los otros. 
                Para conseguirlo, cada Matusalén se apoyará de una cripta con vampiros para poder desarrollar las acciones en mesa, contando con herramientas de apoyo que se las otorgará el mazo de biblioteca.  "
            />

            <CardInitialInfo title="¿Quiénes somos?"
                urlImage="https://img.freepik.com/fotos-premium/feliz-grupo-amigos-gesticulando-manos_171337-35310.jpg"
                description="Somos una Comunidad de jugadores que nos reunimos en La Guarida (Madrid). Nuestro objetivo es hacer esta comunidad en un ambiente de cooperación y apertura.
                 Organizamos partidas una vez a la semana y siempre estamos abiertos a nuevas incorporaciones. La forma de mantenernos en contacto es gracias a Telegram. "

            />
        </div>
    )
}
export default Faqs

