import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./feature/TasksSlice/index.ts"

export const store = configureStore({
    reducer: {
        tasks: tasksSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch