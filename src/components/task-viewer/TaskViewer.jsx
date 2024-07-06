import React from "react";
import TaskCard from "../task-card/TaskCard";
import "./TaskViewer.css";
const TaskViewer = (props) => {
  const cards = props.cards;
  return (
    <div className="task-viewer-container">
      <h1>Task Manager</h1>
      <div className="task-wrapper">
        {cards ? (
          cards.map((card) => (
            <TaskCard
              key={card.id}
              id={card.id}
              status={card.status}
              name={card.name}
              dueDate={card.dueDate}
            />
          ))
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default TaskViewer;
