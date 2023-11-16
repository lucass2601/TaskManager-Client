const Task = ({ title, description, date, completed }) => {
  return (
    <article className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
      <section className="control">
        <div>
          {completed ? (
            <button>Completed</button>
          ) : (
            <button>Incompleted</button>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <button className="secondary outline">✍🏻</button>
          <button className="secondary outline">❌</button>
        </div>
      </section>
    </article>
  );
};

export default Task;
