import React from 'react'
import WeeklyStats from './WeeklyStats';

function WeeklyComponent({logs}) {

  return (
    <>
    <div>
        <WeeklyStats logs={logs}/>
    </div>
    </>
  )
}

export default WeeklyComponent