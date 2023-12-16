import React from 'react'
import ToDoContext from '../context/ToDoContext'
import { useContext, useEffect } from 'react'

function ToDoTask() {
  
  const {ToDos} = useContext(ToDoContext)

  
    
  const noStatus = "Task StatusUnkonwn"
  const notComplete = "Task Incomplete"
  const Complete =  "Task Complete"
  let status = noStatus

  ToDos.forEach((element) => {
    if (element.Completed === false) {
      let status = notComplete
      console.log(element)
    } else if (element.Completed === true) {
      let status = Complete
      console.log(element)
    }
    
     
  })

  



  
  
  
 
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