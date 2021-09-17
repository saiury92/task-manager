import React from 'react';
import { useForm } from "react-hook-form";

const TaskForm = (props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    props.onSaveTaskData(data.name);
    reset();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <h4>task manager</h4>
      <div className="form-control">
        <input
          type="text"
          name="name"
          className="task-input"
          placeholder="e.g. wash dishes"
          {...register("name", {
            required: 'Name is required',
            maxLength: {
              value: 80,
              message: "Name must be less than 80"
            }
          })}
        />
        <button type="submit" className="btn submit-btn">submit</button>
      </div>
      <div className="form-alert">{errors.name?.message}</div>
    </form>
  );
}

export default TaskForm;