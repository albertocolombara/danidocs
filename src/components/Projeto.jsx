import { useState } from "react";

const Projeto = ({ estilo, titulo, ano, categoria, image, onhover, descricao, video }) => {
    const [previewActive, setPreviewActive] = useState(false)
    const [overlayActive, setOverlayActive] = useState(false)
    
    const handleOverlay = () => {
        setOverlayActive(!overlayActive)
    }
    
    const handleCloseOverlay = (e) =>  {
        const overlayId = document.querySelector("#overlay")
        const overlayElement = overlayId.parentElement
        if (e.target === overlayElement) {
            setOverlayActive(!overlayActive)
        }
    }

    return (
        <>
            <div className={`${estilo} h-full cursor-pointer`} onClick={handleOverlay}>
                <div className="flex justify-between mb-1 text-neutral-400 items-center">
                    <h3 className="uppercase font-astrid-light truncate tracking-wider">{titulo}</h3>
                    <span className="text-sm text-neutral-500">{ano}</span>
                </div>
                <div className={` ${estilo ? "h-[648px]" : "h-[300px]" } relative`} onMouseOver={() => setPreviewActive(true)} onMouseOut={() => setPreviewActive(false)}>
                    {previewActive &&
                        <video autoPlay loop muted loading="lazy" className="w-full h-full object-cover rounded-sm">
                            <source src={onhover} type="video/webm"/>
                            Seu navegador não suporta o video.
                        </video>
                    }
                    {image && 
                        <img alt={titulo + " Preview"} loading="lazy" className={`absolute top-0 left-0 w-full h-full object-cover rounded-sm opacity-70 ${previewActive ? 'hidden' : ''}`} src={image}></img>
                    }
                    {categoria && 
                        <span className="absolute bottom-2 right-2 bg-neutral-50 text-neutral-800 rounded-full font-astrid-light text-[12px] px-3 py-2 pb-1 uppercase">{categoria}</span>
                    }
                </div>
            </div>
            {overlayActive && 
            <div className="bg-neutral-950/85 w-screen h-screen fixed top-0 left-0 z-40" onClick={handleCloseOverlay}>
                <div id="overlay" className="flex items-center justify-center flex-col gap-3 w-2/3 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full">
                        {video &&   
                            <iframe className="w-full max-h-[60vh] object-cover rounded-md" width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        }
                        {!video &&
                            <img className="w-full max-h-[60vh] object-cover rounded-md" src={image}></img>
                        }
                    </div>
                    <div className="bg-neutral-950 p-8 rounded-md w-full flex justify-between gap-5">
                        <div className="flex flex-col flex-1">
                            <span className="text-3xl font-astrid-light text-neutral-50">{titulo}</span>
                            <span className="text-sm font-astrid-light text-neutral-400">{ano} // {categoria}</span>
                        </div>
                        <span className="flex-[2] text-neutral-500">{descricao}</span>
                    </div>
                </div>
                {/* <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl cursor-pointer" onClick={handleOverlay}>Fechar</span> */}
            </div>
            }
        </>

    )
}

export default Projeto;