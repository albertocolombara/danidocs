import { useEffect, useState } from "react";
import Header from "./components/Header";
import Projeto from "./components/Projeto"
import Loader from "./components/Loader";
import { projetos } from "./data/projetos";
import Lenis from '@studio-freight/lenis'

const App = () => {
  const [filtro, setFiltro] = useState("Todos os projetos")

  const projetosFiltrados = filtro === "Todos os projetos" ? projetos : projetos.filter(projeto => projeto.categoria === filtro)

  const handleFiltro = (e) => {
    setFiltro(e.target.textContent)
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Header />
      <Loader />

      <div className="bg-neutral-800 w-full h-[500px] rounded-xl flex items-center justify-center mb-20 grayscale relative">
        <h1 className="font-cormorant text-5xl uppercase font-light text-center z-10">Diretor & Filmmaker</h1>
        <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 rounded-xl" disablePictureInPicture>
          <source src="/assets/preview/preview_carrano_destaque.webm" type="video/webm"/>
          Seu navegador não suporta o video.
        </video>
      </div>

      <div id="projetos">
        <div className="mb-12 flex items-center justify-between flex-col md:flex-row gap-5">
          <h2 className="text-4xl font-cormorant">Projetos</h2>
          <ul className="flex gap-4 text-sm flex-wrap justify-center">
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Todos os projetos" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase transition-all`}>Todos os projetos</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Moda" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase transition-all`}>Moda</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Esportes" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase transition-all`}>Esportes</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Backstage" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase transition-all`}>Backstage</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[328px,328px,328px] gap-4 md:gap-5">
          {projetosFiltrados.map((projeto, index) => {
            return (
              <Projeto key={index} titulo={projeto.titulo} descricao={projeto.descricao} ano={projeto.ano} video={projeto.video} categoria={projeto.categoria} image={projeto.image} estilo={projeto.estilo} onhover={projeto.onHoverPreview} />
            )
          })}

        </div>
      </div>


      <div id="sobre" className="border-t-2 border-t-neutral-800 my-20">
        <div className="flex mt-5">
          <h2 className="flex-1 font-cormorant text-4xl">Sobre</h2>
          <p className="flex-1 font-astrid-light text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <span className="font-cormorant uppercase text-2xl select-none text-center block my-4">Daniel Docs @ 2024</span>

      <div className="fixed top-0 left-0 pointer-events-none opacity-[.175] block h-screen w-screen bg-[url('/assets/noise.gif')] z-50"></div>
    </>

  )
}

export default App;