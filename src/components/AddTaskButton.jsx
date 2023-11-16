const AddTaskButton = ({ handleButtonClick }) => {
  const cardStylings = { display: "flex", justifyContent: "center" };

  return (
    <article
      role="button"
      className="task secondary outline"
      onClick={handleButtonClick}
      style={cardStylings}
    >
      <h3>+ Add New Task</h3>
    </article>
  );
};

export default AddTaskButton;
