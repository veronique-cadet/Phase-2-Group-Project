import React from "react";
import MonthlySleepGraph from "./MonthlySleepGraph";
import MonthlyMoodPie from "./MonthlyMoodPie";
import MonthlyWaterGraph from "./MonthlyWaterGraph";
import MonthlyMealGraph from "./MonthlyMealGraph";


const MonthlyStats = ({logs}) => {

  return (
    <div>
        <h1>Monthly</h1>
      <MonthlySleepGraph logs={logs}/>
      <MonthlyMoodPie logs={logs}/>
      <MonthlyWaterGraph logs={logs}/>
      <MonthlyMealGraph logs={logs}/>
    </div>
  );
};

export default MonthlyStats;