const H1Titles = props => {
    const { h1Title } = props

    return (
        <h1
            data-aos="fade-up-right"
            data-aos-duration="1500"

            className="text-4xl text-white p-7 font-extrabold underline underline decoration-8 decoration-cyan-700 "
        >
            {h1Title}
        </h1>
    )
}

export default H1Titles