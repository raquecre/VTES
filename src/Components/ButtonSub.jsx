import { Link } from "react-router-dom"

const ButtonSub = props => {
    const { textBtn, urlSub } = props

    return (
        <Link to={urlSub} target="_blank"
        >
            <div className=" text-white text-xl rounded-2xl p-3 hover:bg-slate-800 bg-slate-600">
                {textBtn}
            </div>
        </Link>
    )
}

export default ButtonSub