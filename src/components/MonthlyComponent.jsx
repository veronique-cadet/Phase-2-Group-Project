import React from 'react'
import MonthlyStats from './MonthlyStats';

const MonthlyComponent=({logs})=>{
  return (
    <div>
        <h1>Monthly Component</h1>
        <MonthlyStats logs={logs} />
    </div>
  )
}

export default MonthlyComponent