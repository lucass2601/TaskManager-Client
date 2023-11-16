const AddTask = ({ isActive, closeModal }) => {
  return (
    <dialog open={isActive}>
      <article>
        <a className="close" onClick={closeModal}></a>
        <h3>Confirm your action!</h3>
        <p>
          Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue
          finibus pellentesque. Nullam finibus risus non semper euismod.
        </p>
        <footer style={{ display: "flex" }}>
          <button role="button" className="secondary" onClick={closeModal}>
            Cancel
          </button>
          <button role="button" onClick={closeModal}>
            Confirm
          </button>
        </footer>
      </article>
    </dialog>
  );
};

export default AddTask;
