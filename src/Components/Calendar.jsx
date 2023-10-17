import ButtonSub from "./ButtonSub"
import H1Titles from "./H1Titles"
import EventsList from "./Journal"



const Calendar = () => {

    return (
        <div
            data-aos="zoom-in-left"
            data-aos-duration="1500"

            className=" flex flex-col justify-center items-center gap-5">
            <H1Titles h1Title="Próximas actividades" /> 
            <div className=" 
            flex justify-center items-center pb-4">

                <iframe
                className="rounded-xl 
                2xl:w-[1500px] 2xl:h-[600px] xl:w-[900px] xl:h-[550px] lg:w-[750px] lg:h-[500px] sm:w-[700px] sm:h-[300px] "
                 src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%230B8043&ctz=Europe%2FMadrid&showNav=0&showCalendars=0&showTz=0&showPrint=0&showTitle=0&src=MmY2MTc2OWViYjZhYTVjNTJkYzc0N2NlNmYzNGRlM2M2OTQ2MjNlMzg5N2Y1OWQ1YmEyNzBmZTY3ZmY3YTI0OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688"></iframe>
                
            </div>
            <ButtonSub
                textBtn="Añade nuestros eventos en tu calendario"
                urlSub="https://calendar.google.com/calendar/u/0/r?cid=2f61769ebb6aa5c52dc747ce6f34de3c694623e3897f59d5ba270fe67ff7a249@group.calendar.google.com" />

        </div>
    )
}

export default Calendar
