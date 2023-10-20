import { createContext } from "react";
import { taskReducer } from './reducer/taskReducer'
import { type } from './types/types'

export const TaskContext = createContext();
const init = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [{ id: new Date().getTime(), name: "Aprender React", done: false }]
}


export const Contexto = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, [], init)

    const handleDone = (id) => {
        dispatch({
            type: type.TASK_DONE,
            payload: id
        })
    }

    return (



        <Contexto.Provider value={{ name: "Agustin" }}>
            {children}
        </Contexto.Provider>

    )

}