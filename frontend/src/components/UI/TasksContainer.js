import React from 'react';

const TasksContainer = (props) => {
  return (
    <section className="tasks-container">
      {props.children}
    </section>
  );
}

export default TasksContainer;