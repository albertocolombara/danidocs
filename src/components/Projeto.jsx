import { useState } from "react";

const Projeto = ({ estilo, titulo, ano, categoria, image, onhover, descricao, video, video2, video3, video4 }) => {
    const [previewActive, setPreviewActive] = useState(false)
    const [overlayActive, setOverlayActive] = useState(false)
    const [videoShowing, setVideoShowing] = useState(1)
    
    const handleVideo = () => {
        if(videoShowing === 2) {
            return video2;
        } else if (videoShowing === 3) {
            return video3
        } else if (videoShowing === 4) {
            return video4
        } else return video;
    }

    const handleOverlay = () => {
        setOverlayActive(!overlayActive)
    }
    
    const handleCloseOverlay = (e) =>  {
        const overlayId = document.querySelector("#overlay")
        const overlayElement = overlayId.parentElement
        if (e.target === overlayElement) {
            setOverlayActive(!overlayActive)
            setVideoShowing(1)
        }
    }

    return (
        <>
            <div className={`${estilo ?? ''} object-cover h-full cursor-pointer`} onClick={handleOverlay}>
                <div className="flex justify-between mb-1 text-neutral-400 items-center">
                    <h3 className="uppercase font-astrid-light truncate tracking-wider text-sm md:text-base">{titulo}</h3>
                    <span className="text-[10px] md:text-sm text-neutral-500">{ano}</span>
                </div>
                <div className={`${estilo ? estilo : "h-[200px] md:h-[300px]"} relative`} onMouseOver={() => setPreviewActive(true)} onMouseOut={() => setPreviewActive(false)}>
                    {previewActive &&
                        <video autoPlay loop muted playsInline loading="lazy" className="w-full h-full object-cover rounded-sm touch-none pointer-events-none" disablePictureInPicture>
                            <source src={onhover} type="video/webm"/>
                            Seu navegador não suporta o video.
                        </video>
                    }
                    {image && 
                        <img alt={titulo + " Preview"} className={`absolute top-0 left-0 w-full h-full object-cover rounded-sm opacity-70 ${previewActive ? 'hidden' : ''}`} src={image}></img>
                    }
                    {categoria && 
                        <span className="absolute bottom-2 right-2 bg-neutral-50 text-neutral-800 rounded-full font-astrid-light text-[10px] md:text-[12px] px-3 py-2 pb-1 uppercase">{categoria}</span>
                    }
                </div>
            </div>
            {overlayActive && 
            <div className="bg-neutral-950/85 w-screen h-screen fixed top-0 left-0 z-40" onClick={handleCloseOverlay}>
                <div id="overlay" className="flex items-center justify-center flex-col gap-3 w-full p-5 lg:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full md:h-[60vh] h-[30vh]">
                        {video &&   
                            <iframe className="w-full h-full object-cover rounded-md" width="560" src={handleVideo()} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        }
                        {!video &&
                            <img className="w-full h-full object-cover rounded-md" src={image}></img>
                        }
                    </div>
                    <div className="bg-neutral-950 p-8 rounded-md w-full flex justify-between gap-5 flex-col md:flex-row">
                        <div className="flex flex-col md:flex-1">
                            <span className="text-3xl font-astrid-light text-neutral-50">{titulo}</span>
                            <span className="text-sm font-astrid-light text-neutral-400">{ano} // {categoria}</span>
                        </div>
                        <span className="md:flex-[2] text-neutral-500">{descricao}</span>
                        <div className="flex flex-wrap md:items-end gap-1 text-neutral-400">
                            <span onClick={() => setVideoShowing(1)} className="cursor-pointer rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light bg-neutral-900 hover:bg-neutral-800">Video 1</span>
                            {video2 && <span onClick={() => setVideoShowing(2)} className="cursor-pointer rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light bg-neutral-900 hover:bg-neutral-800">Video 2</span>}
                            {video3 && <span onClick={() => setVideoShowing(3)} className="cursor-pointer rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light bg-neutral-900 hover:bg-neutral-800">Video 3</span>}
                            {video4 && <span onClick={() => setVideoShowing(4)} className="cursor-pointer rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light bg-neutral-900 hover:bg-neutral-800">Video 4</span>}
                        </div>

                    </div>
                </div>
                {/* <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl cursor-pointer" onClick={handleOverlay}>Fechar</span> */}
            </div>
            }
        </>

    )
}

export default Projeto;