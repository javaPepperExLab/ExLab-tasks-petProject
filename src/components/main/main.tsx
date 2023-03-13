import React from 'react';
import SettingBar from '../settingbar/settingbar';
import TaskList from '../task-list/task-list';

export default function Main() {
  return (
    <div className="main">
      <SettingBar />
      <TaskList />
    </div>
  );
}
