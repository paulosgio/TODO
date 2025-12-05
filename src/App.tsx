import Header from "./components/header"
import Tasks from "./components/tasks"
import type { IData } from "./interface"

export const tasks: IData[] = [
  {
    status: "todo",
    title: "Estudar testes unitários",
    description: "Praticar Jest e Testing Library por 1 hora"
  },
  {
    status: "todo",
    title: "Criar componentes do To-Do App",
    description: "Implementar inputs, listagem e botão de adicionar"
  },
  {
    status: "checked",
    title: "Configurar ambiente do projeto",
    description: "Criar estrutura inicial com React e TypeScript"
  },
  {
    status: "todo",
    title: "Implementar Redux Toolkit",
    description: "Criar slice para gerenciar as tasks"
  },
  {
    status: "checked",
    title: "Criar interface IData",
    description: "Tipagem base para cada task adicionada"
  }
]

function App() {
  return (
    <div className="bg-[#3A3A72] h-screen">
      <Header/>
      <Tasks data={tasks}/>
    </div>
  )
}

export default App

//excluir react-router-dom
