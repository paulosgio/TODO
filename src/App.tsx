import Header from "./components/header"
import Tasks from "./components/tasks"
import { addTask, changeStatus } from "./feature/TasksSlice"
import { useAppDispatch, useAppSelector } from "./hooks"
import { v4 as uuidv4 } from 'uuid';
import addBtn from "./assets/addBtn.svg"
import Form, { type TaskSchemaType } from "./components/form";
import { useState } from "react";
import type { IData } from "./interface";

function App() {
  
  const tasks = useAppSelector(param => param.tasks.data)
  const dispatch = useAppDispatch()
  const [showForm, setShowForm] = useState<boolean>(false)
  const [showCheckedTasks, setShowCheckedTasks] = useState<boolean>(false)
  
  const onSubmit = (data: TaskSchemaType)=> {
    dispatch(addTask( { ...data, id: uuidv4(), status: "todo" } ))
    setShowForm(false)
  }
  const statusChange = (data: IData)=> {
    dispatch(changeStatus(data))
  }

  return (
    <div className="bg-[#3A3A72]">
      <Header setShowCheckedTasks={setShowCheckedTasks}/>
      <Tasks showCheckedTasks={showCheckedTasks} changeStatus={statusChange} data={tasks}/>
      { showForm && (
        <Form onSubmit={onSubmit}/>
      ) }
      <img onClick={()=> setShowForm(true)} className="fixed bottom-10 right-10 rounded-full" src={addBtn} alt="add button" />
    </div>
  )
}

export default App