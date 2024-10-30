import React, { useState } from 'react';
// import { db } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');
  const [assignedTo, setAssignedTo] = useState('');
  const [location, setLocation] = useState('');
  const [recurrence, setRecurrence] = useState('None');
  const [variation, setVariation] = useState('');
  const [mood, setMood] = useState('Neutral'); // New state for mood

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      deadline,
      priority,
      assignedTo,
      location,
      recurrence,
      variation,
      mood, // Include mood
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setPriority('Low');
    setAssignedTo('');
    setLocation('');
    setRecurrence('None');
    setVariation('');
    setMood('Neutral'); // Reset mood
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="text"
        placeholder="Assign to"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
        <option value="None">None</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
      <input
        type="text"
        placeholder="Variation"
        value={variation}
        onChange={(e) => setVariation(e.target.value)}
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="Neutral">Neutral</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Energetic">Energetic</option>
        <option value="Tired">Tired</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
