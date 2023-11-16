const Task = () => {
  return (
    <article className="task">
      <h3>Go Shopping</h3>
      <p>Buy ingredients for fridays dinner</p>
      <span>04/12/2023</span>
      <section className="control">
        <div>
          <button>Completed</button>
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
