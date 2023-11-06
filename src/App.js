import './App.css';
import ToDoList from './component/ToDoList';
import { ToDoProvider } from './context/ToDoContext';
import { useContext } from 'react';
import ToDoContext from './context/ToDoContext';


function App() {
  
// const {ToDos} = useContext(ToDoContext)
// console. log(ToDos, "ToDos")
// console. log(tasks, "tasks")
  return (
    <>
      <h2 className='title'>To Do List</h2>
      <ToDoList />
    </>
  );
}

export default App;
