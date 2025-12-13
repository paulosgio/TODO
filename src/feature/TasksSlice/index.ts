import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData } from "../../interface";

interface IInitialStateProps {
    data: IData[] 
} 

const initialState: IInitialStateProps = {
    data: JSON.parse(localStorage.getItem("tasks") || "[]")
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<IData>)=> {
            state.data.push(action.payload)
            localStorage.setItem("tasks", JSON.stringify(state.data))
        },
        changeStatus: (state, action: PayloadAction<IData>)=> {
            const index = state.data.findIndex(param => param.id === action.payload.id)
            if (index === -1) {
                return
            }
            const task = state.data[index]
            task.status = task.status === "todo" ? "checked" : "todo"
            localStorage.setItem("tasks", JSON.stringify(state.data))
        }
    }
})

export const { addTask, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer