import React from 'react'
import MonthlyStats from './MonthlyStats';

const MonthlyComponent=({logs})=>{
  return (
    <div>
        <MonthlyStats logs={logs} />
    </div>
  )
}

export default MonthlyComponent