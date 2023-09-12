import CardContact from "./CardContact"
import VTESLink from "./VTESLink"

const Footer = () => {

    return (
        <div className=" bg-black bg-opacity-90 p-10 grid  justify-items-center pb-8
         2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            <div className="">
                <VTESLink
                    textWeb="Crea tus mazos"
                    urlWeb="https://vtesdecks.com/"

                />
                <VTESLink
                    textWeb="Página oficial"
                    urlWeb="https://www.vekn.net/"

                />
                <VTESLink
                    textWeb="Consigue tus proxys"
                    urlWeb="https://bloodlibrary.info/"

                />
            </div>

            <CardContact
                textContact="Nuestro grupo de Telegram"
                iconTypeContact={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>

                }
            />





        </div>
    )
}

export default Footer