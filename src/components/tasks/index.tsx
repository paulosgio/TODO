import type { IData } from "../../interface"
import checked from "../../assets/checked.svg"
import todo from "../../assets/todo.svg"
import { AiOutlineDelete } from "react-icons/ai";

interface ITasksProps {
    data: IData[],
    changeStatus: (data: IData)=> void,
    showCheckedTasks: boolean
}

export default function Tasks( { data, changeStatus, showCheckedTasks }: ITasksProps ) {

    const checkedTasks = data.filter(param => param.status === "checked")
    
    return(
        <div className="bg-[#101025cc] p-4 rounded-t-4xl h-dvh overflow-auto">
            <ul className="flex flex-col gap-6">
                { showCheckedTasks ? checkedTasks.length > 0 ? checkedTasks.map(({ description, status, title, id })=> {
                    return(
                        <li key={id} className="bg-[#0D0D22] items-center flex gap-5 rounded-[48px] p-2">
                            <img onClick={()=> changeStatus({ description, status, title, id })} className="h-8 w-8" src={status === "checked" ? checked : todo} alt="checked" />
                            <div className="flex justify-between w-full items-center pr-3">
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-medium text-white truncate max-w-3xs">{title}</h2>
                                    <h2 className="text-[#C8C8C8] text-xs fonte-medium truncate max-w-3xs">{description}</h2>
                                </div>
                                <AiOutlineDelete size={26} color="#FF7F7F"/>
                            </div>
                        </li>
                    )
                }) : (
                    <p>Nenhuma tarefa concluida</p>
                ) : data.length > 0 ? data.map(( { description, status, title, id } )=> {
                        return(
                            <li key={id} className="bg-[#0D0D22] items-center flex gap-5 rounded-[48px] p-2">
                                <img onClick={()=> changeStatus({ description, status, title, id })} className="h-8 w-8" src={status === "checked" ? checked : todo} alt="checked" />
                                <div className="flex justify-between w-full items-center pr-3">
                                    <div className="flex flex-col">
                                        <h2 className="text-sm font-medium text-white truncate max-w-3xs">{title}</h2>
                                        <h2 className="text-[#C8C8C8] text-xs fonte-medium truncate max-w-3xs">{description}</h2>
                                    </div>
                                    <AiOutlineDelete size={26} color="#FF7F7F"/>
                                </div>
                            </li>
                        )
                }) : (
                    <p className="text-[#0D0D22] font-medium">Adicione sua tarefa</p>
                )}
            </ul>
        </div>
    )
}

// fazer component para task 