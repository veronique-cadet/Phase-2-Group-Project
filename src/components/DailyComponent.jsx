import React from 'react'
import DailyStats from './DailyStats';
import SelectTimeBar from './SelectTimeBar';

function DailyComponent({logs}) {

const dailyLogs = logs.map((log) => {
    return <DailyStats log={log} key={log.id} date={log.date} />;
    });

  return (
    <>
    <div>
        {dailyLogs}
    </div>
    </>
  )
}

export default DailyComponent