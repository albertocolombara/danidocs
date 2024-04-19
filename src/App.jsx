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

      <div className="bg-neutral-800 w-full h-[375px] md:h-[500px] rounded-xl flex items-center justify-center mb-20 grayscale relative">
        <h1 className="font-cormorant tracking-tight text-3xl md:text-3xl uppercase font-light text-center z-10 px-4">Director & Filmmaker</h1>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute top-0 left-0 rounded-xl" disablePictureInPicture>
          <source src="/assets/preview/main.webm" type="video/webm"/>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {projetosFiltrados.map((projeto, index) => {
            return (
              <Projeto key={index} titulo={projeto.titulo} descricao={projeto.descricao} ano={projeto.ano} video={projeto.video} categoria={projeto.categoria} image={projeto.image} estilo={projeto.estilo} onhover={projeto.onHoverPreview} video2={projeto.video_2} video3={projeto.video_3} />
            )
          })}

        </div>
      </div>


      <div id="sobre" className="border-t-2 border-t-neutral-800 my-20">
        <div className="flex mt-5 flex-col md:flex-row gap-3 md:gap-0">
          <h2 className="flex-1 font-cormorant text-4xl">Sobre</h2>
          <div className="flex-1 font-astrid-light text-neutral-400 space-y-4">
            <p>Daniel Andrade Maia, 24 anos, sou natural de São Paulo. Sempre gostei de enxergar perspectivas diferentes mediante inúmeras situações. O ritmo acelerado da vida que me levou a 2 continentes, 8 estados, 14 casas, 5 colégios e inúmeras amizades trouxe a estética "film and flow" presente nos meus vídeos.</p>
            <p>Com referências de várias partes do mundo e uma mochila de ideias, comecei minha carreira na fotografia amadora, descobrindo o vídeo por meio de amigos e inspirações. Há 5 anos, trabalho com filmes e conteúdos digitais, além de pós-produção e direção em trabalhos especificamente nichados. Especializado em edição e direção de campanhas, a carreira que começou em Fortaleza-CE, se transferiu novamente para São Paulo-SP, onde estou fixado atualmente.</p>
            <p>Define your world in a whole new way (Defina seu mundo de uma maneira completamente nova) - é o que eu sempre dizia para os meus amigos durante grande parte da minha vida profissional. Essa foi a frase que me trouxe motivação para criar uma identidade diferenciada e específica aos meus filmes, identidade esta que representa a perspectiva enérgica, fluida e adaptável com a qual enxergo meus dias.</p>
          </div>
        </div>
      </div>

      
      <div id="contato" className="border-t-2 border-t-neutral-800 my-20">
        <div className="flex mt-5 flex-col md:flex-row gap-3 md:gap-0">
          <h2 className="flex-1 font-cormorant text-4xl">Contato</h2>
          <div className="flex-1 font-astrid-light text-neutral-400 space-y-4">
           <p className="text-neutral-400"><span className="text-neutral-50">E-mail |</span> contato@danidocs.com.br</p>
           <a href="https://instagram.com/danidocs" target="blank" className="text-neutral-50 hidden sm:block transition-opacity duration-750 hover:opacity-70">Instagram | <span className="text-neutral-400">@danidocs</span></a>
          </div>
          
          
        </div>
      </div>


      <span className="font-cormorant uppercase text-2xl select-none text-center block my-4">Daniel Docs @ 2024</span>

      <div className="fixed top-0 left-0 pointer-events-none opacity-[.175] block h-screen w-screen bg-[url('/assets/noise.gif')] z-50"></div>
    </>

  )
}

export default App;