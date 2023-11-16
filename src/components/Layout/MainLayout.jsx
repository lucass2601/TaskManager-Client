import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const watchWidthForSidebar = () => {
    if (window.innerWidth > 1024) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    watchWidthForSidebar();

    window.addEventListener("resize", watchWidthForSidebar);

    return () => window.removeEventListener("resize", watchWidthForSidebar);
  }, []);

  return (
    <div className="container-fluid main-layout">
      <button className="openMobileSidebar" onClick={toggleSidebar}>
        &#x2630;
      </button>
      <Sidebar isActive={showSidebar} />
      {children}
    </div>
  );
};

export default MainLayout;
