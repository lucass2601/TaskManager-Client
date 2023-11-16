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
            <Route path="/important" element={<h1>Important</h1>} />
            <Route path="/completed" element={<h1>Completed</h1>} />
            <Route path="/incompleted" element={<h1>Incompleted</h1>} />
          </Routes>
        </div>
      </MainLayout>
    </>
  );
};

export default App;
