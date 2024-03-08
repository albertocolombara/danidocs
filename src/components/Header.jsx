const Header = () => {
    return (
        <div className="py-8 flex justify-between items-center">
            <span className="font-cormorant uppercase text-4xl select-none">Daniel Docs</span>
            <span className="font-cormorant text-neutral-400 hidden sm:block">instagram <span className="text-neutral-50">@danidocs</span></span>
            <ul className="gap-5 text-neutral-400 hidden sm:flex">
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    )
}

export default Header;