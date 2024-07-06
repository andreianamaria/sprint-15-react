import "./App.css";
import Form from "./components/form/Form";
import { useState } from "react";
import TaskCard from "./components/task-card/TaskCard";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-3",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-4",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-5",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-6",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-7",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-8",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-9",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-10",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
  ];
  const [formData, setFormData] = useState(data);

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
    data.push(newTask);
  };

  return (
    <div className="app-container">
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
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
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
      <TaskViewer cards={formData} />
    </div>
  );
}

export default App;
