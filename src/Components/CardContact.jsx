const CardContact = props => {

    const { iconTypeContact, textContact } = props
    return (
        <div className={'flex ml-3 gap-2 text-2xl text-white font-semibold items-center '}>
            {iconTypeContact}
            <h2>{textContact}</h2>
        </div>
    )
}

export default CardContact