const CardContact = props => {

    const { iconTypeContact, textContact } = props
    return (
        <div className={'flex gap-2 text-3xl text-white font-semibold items-center '}>
            {iconTypeContact}
            <p>{textContact}</p>
        </div>
    )
}

export default CardContact