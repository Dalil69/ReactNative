import React, { createContext, useState } from 'react';

// Création du contexte pour stocker les tâches
export const TaskContext = createContext();

export default function TaskProvider(props) {
  // Initialisation du state pour les tâches
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tâche 1' },
    { id: 2, title: 'Tâche 2' },
    { id: 3, title: 'Tâche 3' },
    { id: 4, title: 'Tâche 4' },
    { id: 5, title: 'Tâche 5' },
  ]);

  // Rendu du contexte pour permettre aux composants enfants de l'utiliser
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
}
