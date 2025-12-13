import { FaReact } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";

interface IHeaderProps {
    setShowCheckedTasks: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header(  { setShowCheckedTasks }: IHeaderProps ) {
    return(
        <header>
            <ul className="flex items-center w-full justify-between px-6 py-4">
                <li> <FaReact size={46}/> </li>
                <li onClick={()=> setShowCheckedTasks(prev => !prev)}> <MdChecklist size={36}/> </li>
            </ul>
        </header>
    )
}