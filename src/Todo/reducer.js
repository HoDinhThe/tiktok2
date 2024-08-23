import { Set_Job, Add_Job, Delete_Job} from './constants'

export const initState = {
    job: '',
    jobs: []
  }

  // 3. Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case Set_Job:
        return  {
          ...state,
          job: action.payload
        }
        
      case Add_Job:
        return  {
          ...state,
          jobs: [...state.jobs, action.payload]
        }
      case Delete_Job: 
      const newJobs = [...state.jobs]
  
      newJobs.splice(action.payload, 1)
      return  {
        ...state,
        jobs:  newJobs
      }
      default:
        throw new Error('Invalid action.')
    }

  }
  export default reducer;