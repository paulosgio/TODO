import Header from "./components/header"
import Tasks from "./components/tasks"
import { addTask } from "./feature/TasksSlice"
import { useAppDispatch, useAppSelector } from "./hooks"
import { v4 as uuidv4 } from 'uuid';
import addBtn from "./assets/addBtn.svg"
import Form, { type TaskSchemaType } from "./components/form";
import { useState } from "react";

function App() {
  
  const tasks = useAppSelector(param => param.tasks.data)
  const dispatch = useAppDispatch()
  const onSubmit = (data: TaskSchemaType)=> {
    dispatch(addTask( { ...data, id: uuidv4(), status: "todo" } ))
    setShowForm(false)
  }
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <div className="bg-[#3A3A72]">
      <Header/>
      <Tasks data={tasks}/>
      { showForm && (
        <Form onSubmit={onSubmit}/>
      ) }
      <img onClick={()=> setShowForm(true)} className="fixed bottom-10 right-10 rounded-full" src={addBtn} alt="add button" />
    </div>
  )
}

export default App

//excluir react-router-dom
