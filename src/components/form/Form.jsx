import { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  return (
    <div className="form-wrapper">
      <p>Add a new task</p>
      <form className="add-form" onSubmit={onSubmit}>
        <label htmlFor="id">Task Id:</label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Insert task Id..."
          defaultValue=""
        />

        <label htmlFor="name">Task Name:</label>
        <textarea
          id="name"
          name="name"
          placeholder="Insert task name..."
          defaultValue=""
        />

        <label htmlFor="status">Task Status:</label>
        <select name="status" defaultValue="">
          <option value="To do">To do</option>
          <option value="In Progress">In progress</option>
          <option value="Completed">Completed</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor="dueDate">Task Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          defaultValue=""
          min="2024-01-01"
          max="2026-12-31"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
