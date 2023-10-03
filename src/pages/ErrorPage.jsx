
import { Link } from "react-router-dom";
import Header from "../Components/Header";


const ErrorPage = () => {


    return (
        <div className="bg-gradient-to-r from-emerald-800/90 to-teal-800/90 mb-20 ">
            <Header />
            <div className="flex flex-col items-center">
                <img src="https://i.imgur.com/IlxasbV.png" alt="error" srcset="" />

                <Link className="bg-black/50 hover:bg-black text-white rounded-full p-2 text-2xl w-fit m-b" to="/">
                    Vuelve a Home
                </Link>
            </div>




        </div>
    )
}


export default ErrorPage;