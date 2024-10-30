import React, { useState, useEffect } from 'react';
// import { db } from '../firebaseConfig';
// import { collection, onSnapshot } from 'firebase/firestore';
import Task from './Task';
import TaskForm from './TaskForm';
import PomodoroTimer from './PomodoroTimer';
import FocusMode from './FocusMode';
import AnalyticsDashboard from './AnalyticsDashboard';
import CalendarView from './CalendarView';
import KanbanBoard from './KanbanBoard';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [points, setPoints] = useState(0);
  const [sortType, setSortType] = useState('priority');
  const [filterMood, setFilterMood] = useState('All'); // New state for mood filter

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    const storedPoints = JSON.parse(localStorage.getItem('points')) || 0;
    setPoints(storedPoints);

    const checkDeadlines = () => {
      const now = new Date();
      const upcomingTasks = storedTasks.filter(task => {
        const deadline = new Date(task.deadline);
        const timeDiff = deadline - now;
        return timeDiff > 0 && timeDiff <= 24 * 60 * 60 * 1000; // 24 hours
      });

      if (upcomingTasks.length > 0) {
        alert(`You have ${upcomingTasks.length} task(s) due within the next 24 hours!`);
      }
    };

    checkDeadlines();
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = filterMood === 'All' ? tasks : tasks.filter(task => task.mood === filterMood);

  return (
    <div>
      <h2>Points: {points}</h2>
      <select value={filterMood} onChange={(e) => setFilterMood(e.target.value)}>
        <option value="All">All Moods</option>
        <option value="Neutral">Neutral</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Energetic">Energetic</option>
        <option value="Tired">Tired</option>
      </select>
      <AnalyticsDashboard tasks={tasks} points={points} />
      <KanbanBoard tasks={filteredTasks} updateTask={updateTask} />
      <PomodoroTimer />
    </div>
  );
}

export default TaskList;
