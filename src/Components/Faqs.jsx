import CardInitialInfo from "./CardInitialInfo"

const Faqs = props => {

    return (
        <div className="grid justify-around 
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <CardInitialInfo title="¿Qué es VTES?"
                urlImage="https://c4.wallpaperflare.com/wallpaper/952/300/55/vampire-the-masquerade-coteries-of-new-york-new-york-city-gangrel-hd-wallpaper-preview.jpg"
                description="Es un juego de cartas para 5 personas que te permite imprimir aquellas que no tienes.
                Los Matusalenes compiten porimponerse frente a los otros. 
                Para conseguirlo, cada Matusalén se apoyará de una cripta con vampiros para poder desarrollar las acciones en mesa, contando con herramientas de apoyo que se las otorgará el mazo de biblioteca.  "
            />

            <CardInitialInfo title="¿Quiénes somos?"
                urlImage="https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-9/70063280_10220685345223322_5532278727515308032_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=hrIk_E27vYoAX8Gt1qs&_nc_oc=AQmf5zsRmhfgXHXIS5MbS98j1tpjgUL0SzeZCVwCMh5BZMKQXLz7gnmH1i0i5z07LOs&_nc_ht=scontent-mad2-1.xx&oh=00_AfD_9FXWevF7cPM7OsyxCn4oFNywNXZM1gqzEy_ueHkFaQ&oe=65411CC5"
                description="Somos una Comunidad de jugadores que nos reunimos en La Guarida (Madrid). Nuestro objetivo es hacer esta comunidad en un ambiente de cooperación y apertura.
                 Organizamos partidas una vez a la semana y siempre estamos abiertos a nuevas incorporaciones. La forma de mantenernos en contacto es gracias a Telegram. "

            />
        </div>
    )
}
export default Faqs

