const Projeto = ({ titulo, ano }) => {
    return (
        <div>
            <div className="flex justify-between mb-3 text-neutral-400 items-center">
                <h3 className="uppercase font-astrid-light">{titulo}</h3>
                <span className="text-sm text-neutral-500">{ano}</span>
            </div>
            <div className="bg-neutral-800 w-full h-80 rounded-sm">
                {/* <img url={}></img> */}
            </div>
        </div>

    )
}

export default Projeto;