import React from 'react'
import { Link } from "react-router-dom";

const SelectTimeBar = ()=>{
  return (
    <div>
      <h2 id='olivia'>
        <Link to="/stats/daily-stats">
          DAILY
        </Link>
        <Link to="/stats/weekly-stats">
          WEEKLY      
        </Link>
      </h2>
    </div>
  )
}

export default SelectTimeBar;