import React from 'react';

function AnalyticsDashboard({ tasks, points }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  const averageCompletionTime = () => {
    const completedTasks = tasks.filter(task => task.completed && task.completionTime);
    if (completedTasks.length === 0) return 'N/A';

    const totalCompletionTime = completedTasks.reduce((total, task) => {
      const completionTime = new Date(task.completionTime) - new Date(task.creationTime);
      return total + completionTime;
    }, 0);

    const avgTime = totalCompletionTime / completedTasks.length;
    return `${Math.round(avgTime / (1000 * 60 * 60))} hours`;
  };

  const taskDistribution = () => {
    const distribution = { Low: 0, Medium: 0, High: 0 };
    tasks.forEach(task => {
      distribution[task.priority] += 1;
    });
    return distribution;
  };

  const distribution = taskDistribution();

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>Total Points: {points}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Total Tasks: {totalTasks}</p>
      <p>Average Completion Time: {averageCompletionTime()}</p>
      <p>Task Distribution:</p>
      <ul>
        <li>Low Priority: {distribution.Low}</li>
        <li>Medium Priority: {distribution.Medium}</li>
        <li>High Priority: {distribution.High}</li>
      </ul>
    </div>
  );
}

export default AnalyticsDashboard;
