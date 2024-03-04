import { useState } from "react";

const Projeto = ({ estilo, titulo, ano, categoria, url, onhover, descricao }) => {
    const [previewActive, setPreviewActive] = useState(false)
    const [overlayActive, setOverlayActive] = useState(false)

    const handleOverlay = () => {
        setOverlayActive(!overlayActive)
    }

    return (
        <>
            <div className={`${estilo} h-full cursor-pointer`} onClick={handleOverlay}>
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
            {overlayActive && 
            <div className="bg-neutral-950/85 w-screen h-screen fixed top-0 left-0 z-40">
                <div className="flex items-center justify-center flex-col w-2/3 mx-auto">
                    <div className="w-full pt-10 pb-6">
                        <img className="w-full max-h-[600px] object-cover rounded-md" src={onhover ?? url}></img>
                    </div>
                    <div className="bg-neutral-950 px-8 py-12 rounded-md w-full flex justify-between gap-7">
                        <span className="flex-1 text-3xl font-astrid-light text-neutral-50">{titulo}</span>
                        <span className="flex-[2] text-neutral-400">{descricao}</span>
                    </div>
                </div>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl cursor-pointer" onClick={handleOverlay}>Fechar</span>
            </div>
            }
        </>

    )
}

export default Projeto;