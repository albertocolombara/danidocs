import { useState } from "react";

const Projeto = ({ estilo, titulo, ano, categoria, url, onhover }) => {
    const [previewActive, setPreviewActive] = useState(false)


    return (
        <div className={`${estilo} h-full cursor-pointer`}>
            <div className="flex justify-between mb-3 text-neutral-400 items-center">
                <h3 className="uppercase font-astrid-light">{titulo}</h3>
                <span className="text-sm text-neutral-500">{ano}</span>
            </div>
            <div className="h-full relative">
                {url && 
                    <img onMouseOver={() => setPreviewActive(true)} onMouseOut={() => setPreviewActive(false)} className="w-full h-full object-cover rounded-sm brightness-50" src={ previewActive ? (onhover ?? url) : url}></img>
                }
                {categoria && 
                    <span className="absolute bottom-2 right-2 bg-neutral-50 text-neutral-800 rounded-full font-astrid-light text-[12px] px-3 py-2 pb-1 uppercase">{categoria}</span>
                }
            </div>
        </div>

    )
}

export default Projeto;