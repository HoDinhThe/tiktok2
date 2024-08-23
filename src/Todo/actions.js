import { Set_Job, Add_Job, Delete_Job} from './constants'

export const setJob = payload => {
    return {
      type: Set_Job,
      payload
    }
  }
  
 export const addJob = payload => {
    return{
      type: Add_Job,
      payload
    }
  }
  
 export const deleteJob = payload => {
    return {
      type: Delete_Job,
      payload
    }
  }