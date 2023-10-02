import { useState } from 'react'
import Form from './components/form';
import Display from './components/display';
import './App.css'

function App() {
  
  const [toDo, setToDo] = useState([]);

  const updateToDo = (newToDoList) => {
    setToDo((prevToDoList) => (
      [...prevToDoList, newToDoList]
    ))
  }

  const completed = (targetId) => {

    const modifiedToDo = [...toDo].map((toDo) => {
      if (toDo === targetId) {
        toDo.isCompleted = e.target.checked;
        return toDo;
      }
    })
    setToDo(modifiedToDo);
  }

  const deleteTask = (targetId) => {
    const filteredTodoLists = toDo.filter((toDo) => {
      return toDo.id !== targetId;
    });
    setToDo(filteredTodoLists);
  };

  return (
    <div className='Todo App'>
      <Form
        updateToDo={updateToDo}
        />
        <Display toDo={toDo}
        completed={completed} 
        deleteTask={deleteTask}/>
    </div>
  );

}

export default App
