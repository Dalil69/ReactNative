import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export default function TaskProvider(props) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tâche 1' },
    { id: 2, title: 'Tâche 2' },
    { id: 3, title: 'Tâche 3' },
    { id: 4, title: 'Tâche 4' },
    { id: 5, title: 'Tâche 5' },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
}
