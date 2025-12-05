import type { IData } from "../../interface"
import checked from "../../assets/checked.svg"
import todo from "../../assets/todo.svg"

interface ITasksProps {
    data: IData[]
}

export default function Tasks( { data }: ITasksProps ) {
    return(
        <div className="bg-[#101025cc] p-4 rounded-t-4xl h-screen">
            <ul className="flex flex-col gap-6">
                { data.map(( { description, status, title } )=> {
                    return(
                        <li className="bg-[#0D0D22] items-center flex gap-5 rounded-[48px] p-2">
                            <img className="h-8 w-8" src={status === "checked" ? checked : todo} alt="checked" />
                            <div className="flex flex-col">
                                <h2 className="text-sm font-medium text-white">{title}</h2>
                                <h2 className="text-[#C8C8C8] text-xs fonte-medium">{description}</h2>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}