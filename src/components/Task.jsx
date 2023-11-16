import { useTaskConfiguration } from "./TaskList";

const Task = ({ task, editTask }) => {
  const configureTask = useTaskConfiguration();

  const toggleCompleted = () => {
    task.completed = !task.completed;
    configureTask("update", task);
  };

  return (
    <article className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.date}</span>
      <section className="control">
        <div onClick={toggleCompleted}>
          {task.completed ? (
            <button className="outline">✔</button>
          ) : (
            <button className="outline">❌</button>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={editTask} className="secondary outline">
            ✍🏻
          </button>
          <button
            onClick={() => configureTask("delete", task)}
            className="secondary outline"
          >
            🗑
          </button>
        </div>
      </section>
    </article>
  );
};

export default Task;
