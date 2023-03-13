import React from 'react';
import TaskComponent from '../task-component/task-component';
import TaskComponentSkeleton from '../task-component-skeleton/task-component-skeleton';

function TaskList() {
  return (
    <div className="tasks">
      <TaskComponent />
      <TaskComponent />
      <TaskComponentSkeleton />
    </div>
  );
}

export default TaskList;
