import H1Titles from "./H1Titles"

const Calendar =() => {

    return(
        <div 
        data-aos="zoom-in-left"
        data-aos-duration="1500"
        
        className=" flex flex-col justify-center items-center ">
            <H1Titles h1Title="Mira las actividades ya programadas" />
            <div className=" pb-10
            flex justify-center items-center">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230B8043&ctz=Europe%2FMadrid&title=festivos%20en%20Espa%C3%B1a&showDate=0&showNav=0&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
             className="rounded-xl p-1 
             2xl:w-[1500px] 2xl:h-[600px] xl:w-[900px] xl:h-[550px] lg:w-[750px] lg:h-[500px] sm:w-[700px] sm:h-[300px] xs:w-[500px] xs:h-[300px]"></iframe>
            </div>
        </div>
    )
}

export default Calendar