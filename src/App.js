import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: "2022-05-03",
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-3",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-24",
    },
    {
      id: "T-4",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2024-04-04",
    },
    {
      id: "T-5",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-6",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-7",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-8",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-9",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
    {
      id: "T-10",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: "2022-07-04",
    },
  ];

  let savedTasks = localStorage.getItem("tasks");
  savedTasks = savedTasks ? JSON.parse(savedTasks) : data;
  const [formData, setFormData] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: event.target.id.value,
      name: event.target.name.value,
      status: event.target.status.value,
      dueDate: event.target.dueDate.value,
    };
    setFormData([
      ...formData,
      {
        id: event.target.id.value,
        name: event.target.name.value,
        status: event.target.status.value,
        dueDate: event.target.dueDate.value,
      },
    ]);
  };

  const handleDelete = (event) => {
    const cardWrapperEl = event.target.parentNode
      ? event.target.parentNode.parentNode
      : null;
    if (cardWrapperEl) {
      const taskIdEl = cardWrapperEl.querySelector(".task-id");
      if (taskIdEl) {
        const taskId = taskIdEl.textContent;
        const newTasks = formData.filter((task) => task.id !== taskId);
        setFormData(newTasks);
      }
    }
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleSubmit} />
      <TaskViewer cards={formData} onClick={handleDelete} />
    </div>
  );
}

export default App;
