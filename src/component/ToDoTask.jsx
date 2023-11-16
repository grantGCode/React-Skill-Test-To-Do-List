import React from 'react'
import ToDoContext from '../context/ToDoContext'
import { useContext, useEffect } from 'react'

function ToDoTask() {
  
  const {ToDos} = useContext(ToDoContext)
  
  let status = "Task Incomplete"
  const showStatusStyling = (status) => {
    
  // let status = "Task Incomplete"
  //   if (ToDos.list[3] === false) {
      // let status = "Task Incomplete"
  //   }


  
  }

  
 
  return (
    
    <div >
      <ul className='Task-List'>
        {ToDos.map((Todo, index) => (
        <li className={status} key={index}>{Todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoTask