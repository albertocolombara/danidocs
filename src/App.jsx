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
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-astrid-light">Projetos</h2>
          <ul className="flex gap-5 text-sm">
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800">Todos os projetos</li>
            <li className="border border-neutral-600 bg-neutral-800 flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800">Selecionados</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800">Comerciais</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800">Musicais</li>
            <li className="border border-neutral-600 flex justify-center items-center rounded-full px-4 pt-3 pb-2 text-neutral-400 font-astrid-light hover:bg-neutral-800">Eventos</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 grid-rows-[300px,300px,300px,300px] gap-y-[60px] gap-5">
          <Projeto titulo={"Nome do projeto 1"} ano={"2024"} categoria={"Musicais"} url={"https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} onhover={"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif?cid=790b7611mid2keoguooo78xg6ruv7299ewbf6w2xnq3h2gt1&ep=v1_gifs_search&rid=giphy.gif&ct=g"}/>
          <Projeto titulo={"Nome do projeto 2"} ano={"2023"} categoria={"Eventos"} url={"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} onhover={"https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=790b7611mid2keoguooo78xg6ruv7299ewbf6w2xnq3h2gt1&ep=v1_gifs_search&rid=giphy.gif&ct=g"}/>
          <Projeto titulo={"Nome do projeto 3"} ano={"2023"} categoria={"Comerciais"} url={"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} categoria={"Eventos"} url={"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Projeto estilo={"col-span-2 row-span-2"} titulo={"Nome do projeto 5"} ano={"2023"} categoria={"Eventos"} url={"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} onhover={"https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=790b7611mid2keoguooo78xg6ruv7299ewbf6w2xnq3h2gt1&ep=v1_gifs_search&rid=giphy.gif&ct=g"}/>
          <Projeto titulo={"Nome do projeto 6"} ano={"2023"} categoria={"Musicais"} url={"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <Projeto titulo={"Nome do projeto 7"} ano={"2023"} categoria={"Musicais"} url={"https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} categoria={"Comerciais"} url={"https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} categoria={"Eventos"} url={"https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} categoria={"Comerciais"} url={"https://images.unsplash.com/photo-1536590158209-e9d615d525e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />
          <Projeto titulo={"Nome do projeto 4"} ano={"2023"} />

        </div>
      </div>

      <div className="fixed top-0 left-0 pointer-events-none opacity-10 block h-screen w-screen bg-[url('/images/noise.gif')]"></div>
    </>

  )
}

export default App;