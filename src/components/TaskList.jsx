import Task from "./Task";
import CreateTask from "./CreateTask";
import AddTask from "./AddTask";
import { useState } from "react";

const TaskList = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);

  const openTaskModal = () => {
    setAddTaskModal(true);
  };

  const closeTaskModal = () => {
    setAddTaskModal(false);
  };

  const tasks = [
    {
      id: 1,
      title: "Go Shopping",
      description: "buy ingredients for dinner on friday",
      date: "06/12/2023",
      completed: false,
    },
    {
      id: 2,
      title: "Gym Workout",
      description: "train legs and abs",
      date: "04/12/2023",
      completed: false,
    },
    {
      id: 3,
      title: "Read book",
      description: "read 10 pages of atomic habits",
      date: "01/12/2023",
      completed: true,
    },
  ];

  return (
    <>
      <h1>All Tasks</h1>
      <div className="tasks-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            completed={task.completed}
          />
        ))}

        <CreateTask handleButtonClick={openTaskModal} />
        <AddTask isActive={addTaskModal} closeModal={closeTaskModal} />
      </div>
    </>
  );
};

export default TaskList;
