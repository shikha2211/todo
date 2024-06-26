import { useState } from 'react';
import './App.css';

function App() {

  let taskId = 1;

  const oldTasks = [
    {id: taskId++, task: 'Laundry' },
    {id: taskId++, task: 'Groceries'}
  ]

  let [existingTasks, setExistingTasks] = useState(oldTasks);
  const [task, setTask] = useState('');
  

  function AddTask() {
    setExistingTasks(
      existingTasks.concat({
          id: taskId++,
          task: task
        })
      )
  }

  function DeleteTask(id) {
    setExistingTasks(existingTasks.filter((task) => (task.id !== id)))
  }

  return (
    <div className="App">
        <div className='addtask'>
          <input type="text" placeholder='Enter a new task!' onChange={(e) => setTask(e.target.value)} />
          <button onClick={AddTask}>Add</button>
        </div>
        <div className='showtask'>
            <ul>
              { 
                existingTasks.map(({id, task}) => {
                  return (
                      <li key={id}>{task}
                      <input type="button" value="Delete" onClick={() => DeleteTask(id)} />
                      </li>
                  );
                  })
                }
            </ul>
        </div>
    </div>
  );
}

export default App;
