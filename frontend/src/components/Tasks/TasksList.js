import React from 'react';
import TaskItem from './TaskItem';
import TasksContainer from '../UI/TasksContainer'

const TasksList = (props) => {
  if (props.tasks.length === 0) {
    return (
      <TasksContainer>
        <h5 class="empty-list">No tasks in your list</h5>
      </TasksContainer>
    )
  }

  return (
    <TasksContainer>
      <div className="tasks">
        {props.tasks.map(task => (
          <TaskItem key={task._id} task={task} onDeleteTaskHandler={props.onDeleteTaskHandler} />
        ))}
      </div>
    </TasksContainer>
  );
}

export default TasksList;