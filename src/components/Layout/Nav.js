

export const Nav = () => {
    return (
        <>
            <header className='flex flex-col bg-white-600  items-center justify-start sm:flex-row sm:justify-start sm:relative sm:h-header sm:border-b  sm:shadow-sm'>
                <nav className='flex justify-self-end '>
                    <img
                        src="/rick-morty-navbar.svg"
                        alt="rick and morty navbar icon"
                        className="h-11 w-12 sm:ml-52  "
                    />
                </nav>
            </header>
        </>
    )
}
