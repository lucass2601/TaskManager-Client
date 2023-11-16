import { useEffect, useState } from "react";
import { useTaskConfiguration } from "./TaskList";

const TaskModal = ({ isActive, closeModal, taskProp, isEdit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    important: false,
    completed: false,
  });

  useEffect(() => {
    if (isActive) {
      setTask(taskProp);
    }
  }, [isActive, taskProp]);

  const checkboxStylings = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const submitTask = useTaskConfiguration();

  return (
    <dialog open={isActive}>
      <article>
        <a className="close" onClick={closeModal}></a>
        {isEdit ? <h3>Edit Task</h3> : <h3>Create a Task</h3>}
        <label>
          Title
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </label>
        <label>
          Description
          <textarea
            style={{ resize: "none" }}
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={task.date}
            onChange={(e) => setTask({ ...task, date: e.target.value })}
          />
        </label>
        <label style={checkboxStylings}>
          Important
          <input
            type="checkbox"
            checked={task.important}
            onChange={(e) => setTask({ ...task, important: e.target.checked })}
          />
        </label>
        <label style={checkboxStylings}>
          Completed
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
        </label>

        <footer style={{ display: "flex" }}>
          <button role="button" className="secondary" onClick={closeModal}>
            Cancel
          </button>
          <button
            role="button"
            onClick={() => {
              closeModal();
              isEdit ? submitTask("update", task) : submitTask("create", task);
            }}
          >
            {isEdit ? "Edit Task" : "Add Task"}
          </button>
        </footer>
      </article>
    </dialog>
  );
};

export default TaskModal;
