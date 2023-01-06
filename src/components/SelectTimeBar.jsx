import React from "react";
import { NavLink } from "react-router-dom";

const SelectTimeBar = () => {
  return (
    <div className="time-container">
      <div id="olivia" className="time-option">
        <nav className="stats-nav">
          <NavLink to="/stats/daily-stats" className="time-item">
            DAILY
          </NavLink>
          <NavLink to="/stats/weekly-stats" className="time-item">
            WEEKLY
          </NavLink>
          <NavLink to="/stats/monthly-stats" className="time-item">
            MONTHLY
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SelectTimeBar;
