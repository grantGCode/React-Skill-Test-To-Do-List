import React from 'react'
import ToDoContext from '../context/ToDoContext'
import { useContext, useEffect } from 'react'

function ToDoTask() {

  const {ToDos} = useContext(ToDoContext)
 
  return (
    
    <div >
      <ul className='Task-List'>
        {ToDos.map((Todo, index) => (
        <li className="Task Complete" key={index}>{Todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoTask