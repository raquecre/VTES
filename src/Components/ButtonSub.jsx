import { Link } from "react-router-dom"

const ButtonSub = props => {
    const { textBtn, urlSub } = props

    return (
        <Link to={urlSub} target="_blank"
        >
            <div className=" text-white text-xl rounded-full p-3 hover:bg-blue-600 bg-blue-800">
                {textBtn}
            </div>
        </Link>
    )
}

export default ButtonSub