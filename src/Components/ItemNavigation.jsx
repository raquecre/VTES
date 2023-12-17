import { Link } from "react-router-dom"

const ItemNavigation = props => {
    const { text,link } = props
    return (

     <Link to={link}

     className="text-lg text-white font-extrabold decoration-8 decoration-cyan-700 hover:text-blue-600 "> 
     
     {text}
     
      </Link>

    )
}

export default  ItemNavigation


