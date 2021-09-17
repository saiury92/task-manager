import React from 'react';
import { useParams } from 'react-router-dom';

const TaskEdit = () => {
  let { id } = useParams();
  return (<div>
    {id}
  </div>)
}

export default TaskEdit;
