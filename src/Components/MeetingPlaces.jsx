import CardContact from "./CardContact"
import H1Titles from "./H1Titles"

const MeetingPlaces = () => {

    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
            className=" grid   justify-items-center" >
            <H1Titles h1Title="Punto de encuentro" />
            <div className=" grid   justify-items-center  p-5
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.252474026776!2d-3.706941823248376!3d40.403257371441754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d299d05583%3A0xf79c33a6b4bff502!2sCalle%20de%20las%20Pe%C3%B1uelas%2C%2014%2C%2028005%20Madrid!5e0!3m2!1ses!2ses!4v1694105207814!5m2!1ses!2ses"
                    className="rounded-xl
                    xl:w-[600px] xl:h-[400px]  w-[500px] h-[300px]"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className= "grid items-center align-center content-center gap-5 pt-5">
                    <CardContact
                        textContact="La guarida de los Matusalenes, Madrid"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        }
                    />
                    <CardContact
                        textContact="L5, Acacias"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-green-500 w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>


                        }
                    />

                    <CardContact
                        textContact="L3  / C5, Embajadores"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-yellow-500 w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        }
                    />
                </div>

            </div>
        </div>
    )
}

export default MeetingPlaces