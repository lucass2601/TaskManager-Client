import MainLayout from "./components/Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <MainLayout>
        <div className="content">
          <Routes>
            <Route index element={<TaskList />} />
            <Route
              path="/important"
              element={<TaskList filter={{ key: "important", value: true }} />}
            />
            <Route
              path="/completed"
              element={<TaskList filter={{ key: "completed", value: true }} />}
            />
            <Route
              path="/incompleted"
              element={<TaskList filter={{ key: "completed", value: false }} />}
            />
          </Routes>
        </div>
      </MainLayout>
    </>
  );
};

export default App;
