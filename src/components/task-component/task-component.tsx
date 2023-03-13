import React from 'react';
import Task from '../task/task';
import styles from './task-component.module.scss';

function TaskComponent() {
  return (
    <div className={styles.taskComponent}>
      Название колонки
      <button className={styles.taskComponent__addbtn}>+ добавить задачу</button>
      <Task />
    </div>
  );
}

export default TaskComponent;
