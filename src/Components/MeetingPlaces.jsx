import H1Titles from "./H1Titles"

const MeetingPlaces = () => {

    return (
        <div className="bg-green-600 ">
            <H1Titles h1Title="Punto de encuentro" />
            <div className=" flex items-center p-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.252474026776!2d-3.706941823248376!3d40.403257371441754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d299d05583%3A0xf79c33a6b4bff502!2sCalle%20de%20las%20Pe%C3%B1uelas%2C%2014%2C%2028005%20Madrid!5e0!3m2!1ses!2ses!4v1694105207814!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                la guarida de los matusalenes
            </div>
        </div>
    )
}

export default MeetingPlaces