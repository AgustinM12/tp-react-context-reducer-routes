import { useContext } from 'react'
import { type } from './types/types'
import { TaskContext } from './context/TaskContext'

function App() {

  const [taskName, setTaskName] = useState("")

  const { state, dispatch, handleDone } = useContext(TaskContext);


  //METER ESTE DISPATCH EN UNA FUNCION
  // dispatch({
  //   type: "ADD",
  //   payload: {
  //     id: new Date().getTime(),
  //     name: "",
  //     done: false
  //   }
  // })

  return (
    <>
      {/*    <div className="row">
        <div className='col'>
          <h1>Reducer app</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <input type="text" className='form-control'
              placeholder='Enter task'
              name='name'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onKeyUpCapture={(e) => {
                if (e.code === "Enter") {
                  // METER ACA EL DISPATCH
                  dispatch({
                    type: "ADD",
                    payload: {
                      id: new Date().getTime(),
                      name: taskName,
                      done: false
                    }
                  })
                }
              }}
            />
          </div>

          <div className="col-8">

            <pre>
              <code>
                {JSON.stringify(state, null, 3)}
              </code>
            </pre>
          </div>
        </div>
      </div> */}
      <div className="container">
        {/* Header */}

        <div className="row">
          <div className="col-12">
            <h1>TodoApp ( {state.length} )</h1>
          </div>
        </div>

        {/* TodoFilter */}
        <div className="row mb-3">
          <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>

        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="desc"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyUpCapture={(e) => {
                if (e.code === "Enter") {
                  // METER ACA EL DISPATCH
                  dispatch({
                    type: type.TASK_ADD,
                    payload: {
                      id: new Date().getTime(),
                      name: taskName,
                      done: false
                    }
                  })
                }
              }
              }

            />
          </div>

          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
              {/* TodoItems  */}
              {
                (state.length === 0)
                  ?
                  (
                    <li className="alert alert-info text-center">No hay tareas</li>
                  )
                  :
                  (
                    state.map((tasks) => (
                      <li key={tasks.id} className={`d-flex justify-content-between alert ${tasks.done ? 'alert-success' : 'alert-warning'}`}>
                        <span>{tasks.name}</span>
                        <button
                          className="btn btn-sm"
                          onClick={() => handleDone(tasks.id)}
                        >
                          {
                            (tasks.done)
                              ?
                              ("Completada ")
                              :
                              ("Completar")
                          }

                        </button>
                        <button
                          className='btn btn-sm btn-danger'
                          onClick={() => {
                            dispatch({
                              type: type.TASK_DELETE,
                              payload: tasks.id
                            })
                          }}>
                          Eliminar
                        </button>
                      </li>

                    ))
                  )
              }
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
