import React from 'react'
import { Link } from "react-router-dom";

const SelectTimeBar = ()=>{
  return (
    <div>
      <h2 id='olivia'className='time-option'>
        <Link to="/stats/daily-stats" className='time-item'>
          DAILY
        </Link>
        <Link to="/stats/weekly-stats" className='time-item'>
          WEEKLY      
        </Link>
        <Link to="/stats/monthly-stats" className='time-item'>
          MONTHLY
        </Link>
      </h2>
    </div>
  )
}

export default SelectTimeBar;