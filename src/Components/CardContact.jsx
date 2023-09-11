const CardContact = props => {

    const { iconTypeContact, textContact } = props
    return (
        <div className={'flex gap-2 text-3xl text-white font-semibold pt-10 items-center hover:{color}'}>
            {iconTypeContact}
            <p>{textContact}</p>
        </div>
    )
}

export default CardContact