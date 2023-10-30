import {createContext, useState, useEffect} from 'react'

const ToDoContext = createContext() 

export const ToDoProvider = ({children}) => {
  
  
  
  
  //Fetch data from jsonplaceholder
  const getToDoList = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
            return setToDos(data.slice(0, 4));
          })
          .catch((error) => {
            console.error("Error in getToDoList:", error);
          });
        } catch (error) {
          console.error("Error in getToDoList:", error);
        }
      };
      
      
      //State
      const [ToDos, setToDos] = useState([])
      const [TestState] = useState('Test State')
      
      // console.log(ToDos, 'ToDos')
      
      
      useEffect(() => {
        getToDoList()
        // const items = ToDos.slice(0, 4)
        // return setTasks(items)
      }, [])  
      
      // console.log(Tasks, 'Tasks')
      return<ToDoContext.Provider value={{
        ToDos,
        TestState,
      }}>
    {children}
    </ToDoContext.Provider>

}

export default ToDoContext
