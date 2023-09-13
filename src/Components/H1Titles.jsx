const H1Titles = props => {
    const { h1Title } = props

    return (
        <div
            data-aos="fade-up-right"
            data-aos-duration="1500"

            className="text-3xl text-white p-4 font-semibold"
        >
            {h1Title}
        </div>
    )
}

export default H1Titles