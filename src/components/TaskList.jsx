import Task from "./Task";
import AddTaskButton from "./AddTaskButton";
import AddTask from "./AddTask";
import { useState, createContext, useContext, useEffect } from "react";

export const TaskContext = createContext();
export const AddTaskContext = createContext();

export const useAddTask = () => {
  return useContext(AddTaskContext);
};

const TaskList = ({ filter }) => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Go Shopping",
      description: "buy ingredients for dinner on friday",
      date: "06/12/2023",
      important: true,
      completed: false,
    },
    {
      id: 2,
      title: "Gym Workout",
      description: "train legs and abs",
      date: "04/12/2023",
      important: false,
      completed: false,
    },
    {
      id: 3,
      title: "Read book",
      description: "read 10 pages of atomic habits",
      date: "01/12/2023",
      important: false,
      completed: true,
    },
  ]);
  const [tasksFilter, setTasksFilter] = useState(tasks);

  const openTaskModal = () => {
    setAddTaskModal(true);
  };

  const closeTaskModal = () => {
    setAddTaskModal(false);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    if (filter) {
      setTasksFilter(
        tasks.filter((task) => {
          return task[filter.key] === filter.value;
        })
      );
    } else {
      setTasksFilter(tasks);
    }
  }, [filter]);

  return (
    <>
      <h1>All Tasks</h1>
      <TaskContext.Provider value={tasks}>
        <AddTaskContext.Provider value={addTask}>
          <div className="tasks-container">
            {tasksFilter.map((task, index) => (
              <Task
                key={index}
                title={task.title}
                description={task.description}
                date={task.date}
                important={task.important}
                completed={task.completed}
              />
            ))}

            <AddTaskButton handleButtonClick={openTaskModal} />
            <AddTask isActive={addTaskModal} closeModal={closeTaskModal} />
          </div>
        </AddTaskContext.Provider>
      </TaskContext.Provider>
    </>
  );
};

export default TaskList;
