import React, { useState } from 'react';
import './Task.css';

function Task({ task, updateTask, deleteTask, completeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);
  const [priority, setPriority] = useState(task.priority);
  const [assignedTo, setAssignedTo] = useState(task.assignedTo);
  const [location, setLocation] = useState(task.location);
  const [recurrence, setRecurrence] = useState(task.recurrence); // New state for recurrence
  const [variation, setVariation] = useState(task.variation); // New state for variation

  const handleEdit = () => {
    const updatedTask = { ...task, title, description, deadline, priority, assignedTo, location, recurrence, variation };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Priority: {task.priority}</p>
          <p>Assigned to: {task.assignedTo}</p>
          <p>Location: {task.location}</p>
          <p>Recurrence: {task.recurrence}</p>
          <p>Variation: {task.variation}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => completeTask(task.id)}>Complete</button>
        </div>
      )}
    </div>
  );
}

export default Task;
