import {createContext, useState} from 'react'

const ToDoContext = createContext() 

   export const ToDoProvider = ({children}) => {
    
     
     //Fetch data from jsonplaceholder
     const getToDoList = async () => { 
       const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
       const data =  await responce.json()
       setToDOs(data)
       
       getToDoList()
      }
   
      //State
      const [ToDos, setToDOs] = useState(getToDoList)
      
      
  return<ToDoContext.Provider value={{
    ToDos,
  }}>
    {children}
    </ToDoContext.Provider>

}

export default ToDoContext
