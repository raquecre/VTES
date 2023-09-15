const Header = props => {
    const { nameCommunity, contactUsText } = props
    return (

        <div className="font-bold text-3xl bg-gray-900 text-white  gap-5
        grid  justify-items-center items-center
        2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">

            <div className="rounded-full p-5 text-center w-[150px] h-[150px]
             grid items-center gap-5">
                <img src="https://i.imgur.com/jZVFkpm.png" alt="ttes guarida logo" />
            </div>
            <p>{nameCommunity}</p>
            <a href="/" class="relative inline-block px-4 py-2 font-medium group w-fit">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    {contactUsText}
                </span>
            </a>




        </div>

    )
}

export default Header