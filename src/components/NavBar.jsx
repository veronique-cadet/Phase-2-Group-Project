import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-options">
      <NavLink to="/log" className="nav-item">
        LOG
      </NavLink>
      <NavLink to="/stats" className="nav-item">
        STATS
      </NavLink>
      <NavLink to="/getzen" className="nav-item">
        GET ZEN
      </NavLink>
    </nav>
  );
};

export default NavBar;
