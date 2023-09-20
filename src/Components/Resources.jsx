import H1Titles from "./H1Titles"

import VTESLink from "./VTESLink"

const Resources = () => {

    return (
        <div className="
        grid  justify-items-center ml-10 mr-10
        ">
            <H1Titles h1Title="Recursos" />
            <div className="gap-3
            grid justify-items-center
            2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2
            ">
                <VTESLink
                    titleWeb="Vtes Decks"
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    infoWeb=" Que desaboría ponme una docena de paparajotes bonico que zagala más bonica. Menudo zarangollo tienes montao en la cabeza está enrobinao que desaborío la zagala. Un pastelico carne coscoletas está enrobinao hace solanera."
                    urlWeb="https://vtesdecks.com/"
                />

                <VTESLink
                    titleWeb="Vekn"
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    infoWeb=" Que desaboría ponme una docena de paparajotes bonico que zagala más bonica. Menudo zarangollo tienes montao en la cabeza está enrobinao que desaborío la zagala. Un pastelico carne coscoletas está enrobinao hace solanera."
                    urlWeb="https://www.vekn.net/"
                />

                <VTESLink
                    titleWeb="Blood Library"
                    urlImage="https://lackeyccg.com/vtes/common/images/backgrounds/trisnakebackground.jpg"
                    infoWeb=" Que desaboría ponme una docena de paparajotes bonico que zagala más bonica. Menudo zarangollo tienes montao en la cabeza está enrobinao que desaborío la zagala. Un pastelico carne coscoletas está enrobinao hace solanera."
                    urlWeb="https://bloodlibrary.info/"
                />

            </div>

        </div>
    )
}

export default Resources