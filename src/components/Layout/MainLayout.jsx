import { PropTypes } from "prop-types";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="container-fluid main-layout">
      <Sidebar />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
