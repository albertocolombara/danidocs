import { useEffect, useState } from "react";

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false)
            return clearTimeout(timeout)
          }, 1500)
    }, [])

    return (
        <div className={`transition-all duration-750 w-screen h-screen fixed top-0 left-0 bg-neutral-950 flex items-center justify-center z-50 pointer-events-none ${showLoader ? 'transition-all duration-500 opacity-100' : 'transition-opacity duration-1000 opacity-0'}`}>
            <span className="animate-pulse font-cormorant uppercase text-5xl select-none text-center block my-4">Daniel Docs</span>  
        </div>
    )
}

export default Loader