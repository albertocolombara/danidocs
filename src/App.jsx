import { useEffect, useState } from "react";
import Header from "./components/Header";
import Projeto from "./components/Projeto"
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

      <div className="bg-neutral-800 w-full h-[500px] rounded-xl flex items-center justify-center mb-20">
        <h1 className="font-cormorant text-5xl uppercase font-light ">Diretor & Filmmaker</h1>
      </div>

      <div id="projetos">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-astrid-light">Projetos</h2>
          <ul className="flex gap-5 text-sm">
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Todos os projetos" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase`}>Todos os projetos</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Moda" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase`}>Moda</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Esportes" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase`}>Esportes</li>
            <li onClick={handleFiltro} className={`cursor-pointer border border-neutral-600 ${filtro === "Backstage" ? "bg-neutral-800" : ""} flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800 uppercase`}>Backstage</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 grid-rows-[300px,300px,300px,300px] gap-y-[60px] gap-5">
          {projetosFiltrados.map((projeto, index) => {
            return (
              <Projeto key={index} titulo={projeto.titulo} descricao={projeto.descricao} ano={projeto.ano} video={projeto.video} categoria={projeto.categoria} image={projeto.image} estilo={projeto.estilo} onhover={projeto.onHoverPreview} />
            )
          })}

        </div>
      </div>

      <div className="fixed top-0 left-0 pointer-events-none opacity-[.175] block h-screen w-screen bg-[url('assets/noise.gif')]"></div>
    </>

  )
}

export default App;