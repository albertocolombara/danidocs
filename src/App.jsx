import Header from "./components/Header";
import Projeto from "./components/Projeto"

const App = () => {
  return (
    <>
      <Header />

      <div className="bg-neutral-800 w-full h-[500px] rounded-xl flex items-center justify-center mb-20">
        <h1 className="font-cormorant text-5xl uppercase font-light ">Diretor & Filmmaker</h1>
      </div>

      <div id="projetos">
        <div className="mb-12 flex justify-between">
          <h2 className="text-5xl">Projetos</h2>
          <ul className="flex gap-5 text-sm">
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-5 py-3 text-neutral-400 font-astrid-light hover:bg-neutral-800">Todos os projetos</li>
            <li className="border border-neutral-600 bg-neutral-800 flex justify-center items-center rounded-full px-5 py-3 text-neutral-400 font-astrid-light hover:bg-neutral-800">Selecionados</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-5 py-3 text-neutral-400 font-astrid-light hover:bg-neutral-800">Comerciais</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-5 py-3 text-neutral-400 font-astrid-light hover:bg-neutral-800">Musicais</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-5 py-3 text-neutral-400 font-astrid-light hover:bg-neutral-800">Eventos</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Projeto titulo={"Nome do projeto 1"} ano={"2024"} />
          <Projeto titulo={"Nome do projeto 2"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 3"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />
          <Projeto estilo={"col-span-2"} titulo={"Nome do projeto 4"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />

        </div>
      </div>


    </>

  )
}

export default App;