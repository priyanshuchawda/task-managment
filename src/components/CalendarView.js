import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView({ tasks }) {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayTasks = tasks.filter(task => {
        const taskDate = new Date(task.deadline);
        return taskDate.toDateString() === date.toDateString();
      });

      return (
        <ul>
          {dayTasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h2>Task Calendar</h2>
      <Calendar tileContent={tileContent} />
    </div>
  );
}

export default CalendarView;