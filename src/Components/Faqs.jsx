import CardInitialInfo from "./CardInitialInfo"

const Faqs = props => {

    return (
        <div className="grid justify-around m-5 
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <CardInitialInfo title="¿Qué es VTES?"
                urlImage="https://c4.wallpaperflare.com/wallpaper/952/300/55/vampire-the-masquerade-coteries-of-new-york-new-york-city-gangrel-hd-wallpaper-preview.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, eaque repudiandae eius ratione culpa aliquam nihil! Delectus sint quam consequuntur debitis ad saepe explicabo, repudiandae a autem vero accusantium eos!
                "
            />

            <CardInitialInfo title="¿Quiénes somos?"
                urlImage="https://img.freepik.com/fotos-premium/feliz-grupo-amigos-gesticulando-manos_171337-35310.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, eaque repudiandae eius ratione culpa aliquam nihil! Delectus sint quam consequuntur debitis ad saepe explicabo, repudiandae a autem vero accusantium eos!
                "

            />
        </div>
    )
}
export default Faqs

