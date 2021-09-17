import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TasksList from './TasksList';
import TaskEdit from './TaskEdit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const DUMMY_TASKS = [
  { "completed": true, "_id": Math.random().toString(), "name": "First Task" },
  { "completed": false, "_id": Math.random().toString(), "name": "Second Task" }
];

const Tasks = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const saveTaskDataHandler = (name) => {
    const taskData = { "completed": false, "_id": Math.random().toString(), "name": name }
    setTasks(prevTasks => (
      [...prevTasks, taskData]
    ))
  }

  const deleteTaskHandler = (taskId) => {
    setTasks(prevTasks => (
      prevTasks.filter(task => task._id !== taskId)
    ))
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TaskForm onSaveTaskData={saveTaskDataHandler} />
          <TasksList tasks={tasks} onDeleteTaskHandler={deleteTaskHandler} />
        </Route>
        <Route path="/task/:id" children={<TaskEdit />} />
      </Switch>
    </Router>
  );
}

export default Tasks;