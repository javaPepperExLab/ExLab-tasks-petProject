import React from 'react';
import styles from './task-component-skeleton.module.scss';

function TaskComponentSkeleton() {
  return (
    <div className={styles.taskComponentSkeleton}>
      <button className={styles.taskComponentSkeleton__addbtn}>+ добавить колонку</button>
    </div>
  );
}

export default TaskComponentSkeleton;
