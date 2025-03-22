import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>Hubmatic</h1>
      <nav>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/workflows">Workflows</NavLink>
        <NavLink to="/ai-helper">API Assistant</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
