import H1Titles from "./H1Titles"

import VTESLink from "./VTESLink"

const Resources = () => {

    return (
        <div className="
        grid  justify-items-center
        ">
            <H1Titles h1Title="Recursos" />

            <div className="gap-3
            grid justify-items-center
            2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2
            ">
                <VTESLink titleWeb="Vtes Decks"
                    preInfo="crea tus mazos"
                    infoWeb="Monta tus mazos y consulta los que han creado otros Matusalenes."
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    urlWeb="https://vtesdecks.com/"
                />

                <VTESLink titleWeb="Vekn"
                    preInfo="Página oficial"
                    infoWeb="Página oficial de VTES."
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    urlWeb="https://www.vekn.net/"
                />

                <VTESLink titleWeb="Blood Library"
                    preInfo="Obtén tus proxys"
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    infoWeb="Si necesitas una carta y no eres capaz de encontrarla por ninguna parte, siempre puedes imprimirla."
                    urlWeb="https://bloodlibrary.info/"
                />

            </div>

        </div>
    )
}

export default Resources