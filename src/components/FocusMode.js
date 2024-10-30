import React, { useState } from 'react';

function FocusMode({ tasks }) {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const blockedWebsites = ['facebook.com', 'twitter.com', 'youtube.com']; // Add more as needed

  const startFocusMode = (task) => {
    setCurrentTask(task);
    setIsFocusMode(true);
    alert(`Focus Mode started! Avoid these sites: ${blockedWebsites.join(', ')}`);
  };

  const endFocusMode = () => {
    setCurrentTask(null);
    setIsFocusMode(false);
  };

  return (
    <div>
      {isFocusMode ? (
        <div>
          <h2>Focus Mode</h2>
          <h3>{currentTask.title}</h3>
          <p>{currentTask.description}</p>
          <button onClick={endFocusMode}>End Focus Mode</button>
        </div>
      ) : (
        <div>
          <h2>Select a Task to Focus On</h2>
          {tasks.map(task => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <button onClick={() => startFocusMode(task)}>Focus</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FocusMode;
