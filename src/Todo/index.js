import { useReducer, useRef } from "react"
import reducer , { initState} from "./reducer"
import { addJob, setJob, deleteJob} from './actions'
import logger from "./logger"

// 39. Todo App with useReducer() hook | Hiểu rõ hơn về useReducer()
// useReducer

  //4. Dispatcha
  function App(){
    const [state, dispatch] = useReducer( logger(reducer), initState)
    const {job, jobs} = state
  
    const inputRef = useRef()
  
    const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
  
      inputRef.current.focus()
    }
    return(
      <div style={{ padding: '0 20px'}}>
          <h3>Todo</h3>
          <input
              ref={inputRef}
              value={job}
              placeholder="Enter todo..."
              onChange={e => {
                dispatch(setJob(e.target.value))
              }}
          />
          <button onClick={handleSubmit}>
              Add
          </button>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>
                {job}
                <span onClick={() => dispatch(deleteJob(index))}>
                  &times;
                </span>
              </li>
            ))}
          </ul>
  
      </div>
    )
  }
  export default App;