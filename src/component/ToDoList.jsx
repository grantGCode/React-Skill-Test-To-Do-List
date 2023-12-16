import React from 'react'
import ToDoTask from './ToDoTask'
import { useContext} from 'react'
import ToDoContext, { ToDoProvider } from '../context/ToDoContext'

function ToDoList() {


// const ToDos = useContext(ToDoContext)

  return(       
    
      <ToDoProvider>
        <ToDoTask />  
      </ToDoProvider>
  )
}

export default ToDoList
