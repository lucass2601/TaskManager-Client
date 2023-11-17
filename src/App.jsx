import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const loggedIn = false;

  return <>{loggedIn ? <Home /> : <Login />}</>;
};

export default App;
