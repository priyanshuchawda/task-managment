import React, { useState } from 'react';

function KanbanBoard({ tasks, updateTask }) {
  const [columns, setColumns] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const moveTask = (taskId, targetColumn) => {
    const task = tasks.find(task => task.id === taskId);
    if (!task) return;

    const updatedColumns = { ...columns };
    Object.keys(updatedColumns).forEach(column => {
      updatedColumns[column] = updatedColumns[column].filter(task => task.id !== taskId);
    });
    updatedColumns[targetColumn].push(task);

    setColumns(updatedColumns);
  };

  return (
    <div className="kanban-board">
      {Object.keys(columns).map(column => (
        <div key={column} className="kanban-column">
          <h3>{column}</h3>
          {columns[column].map(task => (
            <div key={task.id} className="kanban-task">
              <h4>{task.title}</h4>
              <button onClick={() => moveTask(task.id, 'todo')}>To Do</button>
              <button onClick={() => moveTask(task.id, 'inProgress')}>In Progress</button>
              <button onClick={() => moveTask(task.id, 'done')}>Done</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;