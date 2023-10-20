import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import App from '../App'
import { Tasks } from '../tasks'



export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<App />} />
                <Route path='/task' element={<Tasks />} />


            </Routes>
        </BrowserRouter>
    )
}