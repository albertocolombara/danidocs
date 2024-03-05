import { useState } from "react";

const Projeto = ({ estilo, titulo, ano, categoria, image, onhover, descricao, video }) => {
    const [previewActive, setPreviewActive] = useState(false)
    const [overlayActive, setOverlayActive] = useState(false)

    const handleOverlay = () => {
        setOverlayActive(!overlayActive)
    }

    return (
        <>
            <div className={`${estilo} h-full cursor-pointer`} onClick={handleOverlay}>
                <div className="flex justify-between mb-1 text-neutral-400 items-center">
                    <h3 className="uppercase font-astrid-light truncate">{titulo}</h3>
                    <span className="text-sm text-neutral-500">{ano}</span>
                </div>
                <div className="h-full relative">
                    {image && 
                        <img onMouseOver={() => setPreviewActive(true)} onMouseOut={() => setPreviewActive(false)} className="w-full h-full object-cover rounded-sm" src={ previewActive ? (onhover ?? image) : image}></img>
                    }
                    {categoria && 
                        <span className="absolute bottom-2 right-2 bg-neutral-50 text-neutral-800 rounded-full font-astrid-light text-[12px] px-3 py-2 pb-1 uppercase">{categoria}</span>
                    }
                </div>
            </div>
            {overlayActive && 
            <div className="bg-neutral-950/85 w-screen h-screen fixed top-0 left-0 z-40">
                <div className="flex items-center justify-center flex-col gap-3 w-2/3 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full">
                        <img className="w-full max-h-[600px] object-cover rounded-md" src={video ?? (onhover ?? image)}></img>
                    </div>
                    <div className="bg-neutral-950 px-8 py-12 rounded-md w-full flex justify-between gap-5">
                        <div className="flex flex-col flex-1">
                            <span className="text-3xl font-astrid-light text-neutral-50">{titulo}</span>
                            <span className="text-sm font-astrid-light text-neutral-400">{ano} // {categoria}</span>
                        </div>
                        <span className="flex-[2] text-neutral-500">{descricao}</span>
                    </div>
                </div>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl cursor-pointer" onClick={handleOverlay}>Fechar</span>
            </div>
            }
        </>

    )
}

export default Projeto;