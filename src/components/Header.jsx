const Header = () => {
    return (
        <div className="py-8 flex justify-between items-center">
            <span className="font-cormorant uppercase text-3xl select-none tracking-tight">Daniel Docs</span>
            <a href="https://instagram.com/danidocs" target="blank" className="font-cormorant text-neutral-400 hidden sm:block transition-opacity duration-750 hover:opacity-70">instagram <span className="text-neutral-50">@danidocs</span></a>
            <ul className="gap-5 text-neutral-400 hidden sm:flex">
                <li><a className="transition-opacity duration-750 hover:opacity-70" href="#projetos">Projetos</a></li>
                <li><a className="transition-opacity duration-750 hover:opacity-70" href="#sobre">Sobre</a></li>
                <li><a className="transition-opacity duration-750 hover:opacity-70" href="#contato">Contato</a></li>
            </ul>
        </div>
    )
}

export default Header;