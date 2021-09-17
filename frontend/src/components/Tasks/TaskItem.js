import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const TaskItem = (props) => {
  return (
    <div className={`single-task ${props.task.completed ? "task-completed" : ""}`}>
      <h5>
        <span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        {props.task.name}
      </h5>
      <div className="task-links">
        <Link className="edit-link" to={`/task/${props.task._id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button type="button" className="delete-btn" onClick={() => props.onDeleteTaskHandler(props.task._id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  )
}

export default TaskItem;