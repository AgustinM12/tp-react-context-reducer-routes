import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contexto } from './context/TaskContext.jsx'
import { AppRoutes } from './routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Contexto>
      <AppRoutes>

        <App />

      </AppRoutes>
    </Contexto>


  </React.StrictMode>,
)
