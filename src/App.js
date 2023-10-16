import './App.css';
import ToDoList from './component/ToDoList';
import { ToDoProvider } from './context/ToDoContext';



function App() {

  return (
    <ToDoProvider >
      <ToDoList />
    </ToDoProvider>
  );
}

export default App;
