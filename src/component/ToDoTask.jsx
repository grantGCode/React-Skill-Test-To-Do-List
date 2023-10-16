import React from 'react'
import { ToDoProvider } from '../context/ToDoContext'

function ToDoTask() {

  return (
    <ToDoProvider>
        To Do Task items
    </ToDoProvider>
  )
}

export default ToDoTask