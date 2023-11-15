import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <span className="logo">❤</span>
        {/* Logo will be an emoji instead of an actual img (just like github) */}
        <div className="name-container">
          <span>Lucas</span>
          <span>Fischer</span>
        </div>
      </div>
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink>All Tasks</NavLink>
            </li>
            <li>
              <NavLink>Important</NavLink>
            </li>
            <li>
              <NavLink>Completed</NavLink>
            </li>
            <li>
              <NavLink>Do It Now</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="signout">
        <button>Sign Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
