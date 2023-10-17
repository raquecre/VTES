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
            <div className="flex">
                <div className=" 
                    flex justify-center items-center">
                    <iframe
                        className="rounded-xl w-3/4
                        2xl:w-[1500px] 2xl:h-[600px] xl:w-[900px] xl:h-[550px] lg:w-[750px] lg:h-[500px] sm:w-[700px] sm:h-[300px] "
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%230B8043&ctz=Europe%2FMadrid&showTitle=0&showDate=0&showPrint=0&showNav=1&showCalendars=0&showTz=0&src=ZTIxNmZmNmY5NGYzMjE1N2Y1NjA3ZTRhMzkzMDNkODcxODZlMzYyYmYwYjE5ZjAxZDM4NjgyYmZhOWZhZmFhZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26"></iframe>

                    <div className="w-1/4 m-3">
                        <H1Titles h1Title="agenda" />
                        <EventsList />
                    </div>
                </div>
            </div>

            <ButtonSub
                textBtn="Añade los eventos en tu calendario"
                urlSub="https://calendar.google.com/calendar/u/0/r?cid=e216ff6f94f32157f5607e4a39303d87186e362bf0b19f01d38682bfa9fafaad@group.calendar.google.com" />
        </div>
    )
}

export default Calendar
