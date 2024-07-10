import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
import { IoCloseCircleOutline } from "react-icons/io5";

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div onClick={props.onClick}>
        <IoCloseCircleOutline />
      </div>
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={new Date(props.dueDate)} />
      </div>
    </div>
  );
}

export default TaskCard;
