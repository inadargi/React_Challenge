import React, { useState } from 'react';

function App() {
  // Step 1: State for input and list
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Step 2: Add task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  // Step 3: Delete task
  const handleDeleteTask = (indexToDelete) => {
    const updatedList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(updatedList);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>📝 Simple To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {taskList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
