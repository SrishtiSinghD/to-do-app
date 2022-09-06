import { useState } from 'react';
import './App.css';
import data from "./data.json";
//Components

import Header from './Header'
import TaskList from "./TaskList"


function App() {
  const [ taskList, setTaskList ] = useState(data);

  return (
    <div className="App">
      <Header />
      <TaskList listTasks={taskList}/>
    </div>
  );
}

export default App;
