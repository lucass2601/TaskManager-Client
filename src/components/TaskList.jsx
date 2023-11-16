import Task from "./Task";
import AddTaskButton from "./AddTaskButton";
import TaskModal from "./TaskModal";
import { useState, createContext, useContext, useEffect } from "react";

export const TaskContext = createContext();

export const useTaskConfiguration = () => {
  return useContext(TaskContext);
};

const TaskList = ({ filter }) => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [isEdit, setIsEdit] = useState({});
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

  const openTaskModal = (task) => {
    if (task) {
      setIsEdit(true);
      setEditedTask(task);
    } else {
      setIsEdit(false);
      setEditedTask({
        title: "",
        description: "",
        date: "",
        important: false,
        completed: false,
      });
    }
    setAddTaskModal(true);
  };

  const closeTaskModal = () => {
    setAddTaskModal(false);
  };

  const configureTask = (status, task) => {
    switch (status) {
      case "create":
        createTask(task);
        break;
      // case "read":
      //   readTask(task);
      //   break;
      case "update":
        updateTask(task);
        break;
      case "delete":
        deleteTask(task);
        break;
      default:
        console.log("An Error occured");
        break;
    }
  };

  const createTask = (taskParam) => {
    taskParam.id = tasks.length + 1; // temporary fix until db connection is established (CAN BREAK APPLICATION)
    setTasks([...tasks, taskParam]);
  };

  // const readTask = (index) => {
  //   return tasks[index]
  // };

  const updateTask = (taskParam) => {
    let updatedTaskList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.id === taskParam.id);
    updatedTaskList[taskIndex] = taskParam;
    setTasks(updatedTaskList);
  };

  const deleteTask = (taskParam) => {
    let updatedTaskList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.id === taskParam.id);
    updatedTaskList.splice(taskIndex, 1);
    setTasks(updatedTaskList);
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
  }, [filter, tasks]);

  return (
    <>
      <h1>All Tasks</h1>
      <TaskContext.Provider value={configureTask}>
        <div className="tasks-container">
          {tasksFilter.map((task) => (
            <Task
              task={task}
              editTask={() => openTaskModal(task)}
              key={task.id}
            />
          ))}

          <AddTaskButton handleButtonClick={() => openTaskModal()} />
          <TaskModal
            isActive={addTaskModal}
            closeModal={closeTaskModal}
            taskProp={editedTask}
            isEdit={isEdit}
          />
        </div>
      </TaskContext.Provider>
    </>
  );
};

export default TaskList;
