import { useState } from "react";
import "./Form.css";

const Form = ({ cards }) => {
  const initialCards = cards;

  const [formData, setFormData] = useState(cards);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: event.target.id.value,
      name: event.target.name.value,
      status: event.target.status.value,
      dueDate: new Date(event.target.dueDate.value),
    };
    setFormData([
      ...formData,
      {
        id: event.target.id.value,
        name: event.target.name.value,
        status: event.target.status.value,
        dueDate: new Date(event.target.dueDate.value),
      },
    ]);
    console.log(formData);
  };

  return (
    <div className="form-wrapper">
      <p>Add a new task</p>
      <form className="add-form" onSubmit={handleSubmit}>
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
          <option value="todo">To do</option>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
          <option value="done">Done</option>
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
